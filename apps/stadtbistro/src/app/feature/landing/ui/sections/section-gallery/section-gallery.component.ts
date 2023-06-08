import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { HeadlineSectionComponent } from 'apps/stadtbistro/src/app/shared/ui/typographie';

@Component({
  selector: 'sb-section-gallery',
  standalone: true,
  imports: [CommonModule, HeadlineSectionComponent],
  templateUrl: './section-gallery.component.html',
  styleUrls: ['./section-gallery.component.scss'],
})
export class SectionGalleryComponent {
  protected readonly images = Array.from({ length: 8 }, (_, i) =>
    i === 2
      ? 'https://nextjsconf-pics.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fzeit-inc%2Fimage%2Fupload%2Fc_scale%2Cw_720%2Fnextconf-photos%2FSexton_Vercel_3022.jpg&w=1200&q=75'
      : `https://picsum.photos/seed/${i + 1}/720/480`
  );
}
