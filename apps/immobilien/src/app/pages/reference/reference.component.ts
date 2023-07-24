import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ImageGalleryComponent,
  GalleryImage,
} from '@jgh/ui-angular/ui/image-gallery';

import { ref, listAll, Storage } from '@angular/fire/storage';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { toSignal } from '@angular/core/rxjs-interop';

interface Project {
  title: string;
  description: string;
  images: GalleryImage[];
}

@Component({
  selector: 'im-reference',
  standalone: true,
  imports: [CommonModule, ImageGalleryComponent],
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.scss'],
})
export default class ReferenceComponent {
  private readonly firebaseStorage = inject(Storage);
  private readonly firestore = inject(Firestore);
  protected images = signal<GalleryImage[]>([]);

  private readonly collectionRef = collection(this.firestore, 'projects');
  protected readonly data = toSignal(collectionData(this.collectionRef));
  protected readonly projects = computed(async () => {
    const projects = this.data();

    // Guard Clause
    if (!projects) return [];

    return await Promise.all(
      projects.map(async (project) => {
        const listRef = ref(
          this.firebaseStorage,
          `images/projects/${project['storage']}`
        );

        const imagelist = await listAll(listRef);
        const items = imagelist.items;
        const imagenames = new Set(
          items.map((item) => {
            const name = item.name
              .replace('_1200x1200', '')
              .replace('_800x800', '')
              .split('.');
            name.pop();
            return name.join('.');
          })
        );

        const images = Array.from(imagenames).map(
          (filename) =>
            ({
              filename,
              path: `https://storage.googleapis.com/chatera-gross.appspot.com/images/projects/${project['storage']}`,
              filetypes: ['webp', 'avif', 'jpg'],
              defaulttype: 'jpg',
            } as GalleryImage)
        );

        return {
          title: project['title'],
          images,
          description: project['description'],
        } as Project;
      })
    );
  });
}
