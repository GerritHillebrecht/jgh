import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface InfoBox {
  title: string;
  description: string;
  image: string;
  action?: string;
}

@Component({
  selector: 'jgh-image-info-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-info-grid.component.html',
  styleUrls: ['./image-info-grid.component.scss'],
})
export class ImageInfoGridComponent {
  @Input()
  infoBoxes: InfoBox[] = [
    {
      title: 'Absorbance 96',
      description: 'Eine neue Plate Reader Kategorie',
      image:
        'https://byonoy.com/site/assets/files/1072/byonoy_absorbance_96-2465-1.1000x700.webp',
    },
    {
      title: 'Absorbance One',
      description: 'Das maßgeschneiderte UV/Vis Photometer',
      image:
        'https://byonoy.com/site/assets/files/1073/byonoy_absorbance_one-5535-2_thimbnail-1.1000x700.jpg',
    },
    {
      title: 'Absorbance 96 Automate',
      description: 'Der erste on-deck Plate Reader',
      image:
        'https://byonoy.com/site/assets/files/1574/a96a_90_thumbnail_b.1000x700.jpg',
    },
  ];
}
