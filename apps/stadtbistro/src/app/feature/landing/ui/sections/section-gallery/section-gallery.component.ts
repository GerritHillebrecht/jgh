import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { HeadlineSectionComponent } from 'apps/stadtbistro/src/app/shared/ui/typographie';
import { Storage, listAll, ref } from '@angular/fire/storage';

@Component({
  selector: 'sb-section-gallery',
  standalone: true,
  imports: [CommonModule, HeadlineSectionComponent],
  templateUrl: './section-gallery.component.html',
  styleUrls: ['./section-gallery.component.scss'],
})
export class SectionGalleryComponent {
  private readonly firebaseStorage = inject(Storage);
  protected readonly storageImages: string[][] = [];

  protected readonly images = Array.from({ length: 8 }, (_, i) =>
    i === 2
      ? 'https://nextjsconf-pics.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fzeit-inc%2Fimage%2Fupload%2Fc_scale%2Cw_720%2Fnextconf-photos%2FSexton_Vercel_3022.jpg&w=1200&q=75'
      : `https://picsum.photos/seed/${i + 1}/720/480`
  );
  constructor() {
    const listRef = ref(this.firebaseStorage, 'images/bistro');
    listAll(listRef).then((res) => {
      const items = res.items;
      const imagenames = new Set(
        items.map((item) => {
          const name = item.name
            .replace('_1200x1200', '')
            .replace('_400x400', '')
            .split('.');
          name.pop();
          return name.join('.');
        })
      );

      console.log('imagenames', imagenames);

      this.storageImages.push(
        ...Array.from(imagenames).map((filename, index) => {
          return [
            `https://storage.googleapis.com/dasstadtbistro.appspot.com/images/bistro/${filename}_1200x1200.avif`,
            `https://storage.googleapis.com/dasstadtbistro.appspot.com/images/bistro/${filename}_400x400.webp`,
            `https://storage.googleapis.com/dasstadtbistro.appspot.com/images/bistro/${filename}.jpg`,
          ];
        })
      );

      console.log('storageItems', this.storageImages)
    });
  }
}
