import {
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
  computed,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogFullscreenComponent } from './dialog/dialog-fullscreen/dialog-fullscreen.component';

export interface GalleryImage {
  filename: string;
  path: string;
  filetypes: Filetype[];
  defaulttype: Filetype;
}

export interface GalleryImageComputed {
  src: string;
  size: string;
  type: Filetype;
  default?: boolean;
}

type Filetype = 'webp' | 'avif' | 'jpg' | 'png';

@Component({
  selector: 'jgh-image-gallery',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ImageGalleryComponent {
  @Input()
  set images(images: GalleryImage[]) {
    this._galleryImages.set(images);
  }

  @Input({ required: true })
  size!: number;

  private readonly dialog = inject(MatDialog);

  private readonly _galleryImages = signal<GalleryImage[]>([]);
  protected readonly galleryImages = computed(() => {
    const images = this._galleryImages();
    return images.reduce((acc, image) => {
      const galleryImages = image.filetypes.map((filetype) => {
        const src = `${image.path}/${image.filename}_${this.size}x${this.size}.${filetype}`;
        return {
          src,
          size: `${this.size}px`,
          type: filetype,
          default: filetype === image.defaulttype,
        };
      });
      return [...acc, galleryImages];
    }, [] as GalleryImageComputed[][]);
  });

  protected fullsize(index: number): void {
    this.dialog.open(DialogFullscreenComponent, {
      data: { images: this.galleryImages(), index },
      panelClass: 'fullscreen-dialog',
    });
  }
}
