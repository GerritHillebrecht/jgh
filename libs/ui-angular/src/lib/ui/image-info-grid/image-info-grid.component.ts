/* eslint-disable @nx/enforce-module-boundaries */
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  QueryList,
  ViewChildren,
  inject,
} from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { ObserverService } from '@jgh/ui-angular/service/observer';

export interface InfoBox {
  title: string;
  description: string;
  image: string;
  action?: string;
  anchor?: string;
}

@Component({
  selector: 'jgh-image-info-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-info-grid.component.html',
  styleUrls: ['./image-info-grid.component.scss'],
})
export class ImageInfoGridComponent implements AfterViewInit {
  @ViewChildren('infobox')
  infoBoxElements?: QueryList<ElementRef<HTMLAnchorElement>>;

  private readonly observer = inject(ObserverService).observer;

  @Input({ required: true })
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

  private viewportScroller = inject(ViewportScroller);

  protected scrollTo(infoBox: InfoBox) {
    if (infoBox.anchor) {
      this.viewportScroller.scrollToAnchor(infoBox.anchor);
    }
  }

  ngAfterViewInit() {
    if (this.infoBoxElements) {
      this.infoBoxElements.forEach((element) => {
        this.observer.observe(element.nativeElement);
      });
    }
  }
}
