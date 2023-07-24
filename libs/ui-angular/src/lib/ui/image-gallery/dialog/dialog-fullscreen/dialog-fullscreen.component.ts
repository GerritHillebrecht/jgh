import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  QueryList,
  ViewChild,
  ViewChildren,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  GalleryImage,
  GalleryImageComputed,
} from '../../image-gallery.component';
import Swiper, { EffectCards, EffectCube, Keyboard, Navigation, Pagination } from 'swiper';

@Component({
  selector: 'jgh-dialog-fullscreen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dialog-fullscreen.component.html',
  styleUrls: ['./dialog-fullscreen.component.scss'],
})
export class DialogFullscreenComponent implements AfterViewInit {
  protected readonly index = signal(0);
  protected readonly images = signal<GalleryImageComputed[][]>([]);
  private swiper: Swiper;

  @ViewChildren('swiperSlide')
  swiperSlides?: QueryList<ElementRef<HTMLDivElement>>;

  @ViewChild('swiper')
  swiperContainer?: ElementRef<HTMLDivElement>;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { images: GalleryImageComputed[][]; index: number }
  ) {
    const { images, index } = data;
    this.images.set(
      images.map((image) =>
        image.map((i) => ({
          ...i,
          src: i.src.replace('_800x800', '_1200x1200'),
        }))
      )
    );

    this.index.set(index);

    this.swiper = new Swiper('.swiper', {
      initialSlide: this.index(),
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        disabledClass: 'swiper-button-disabled',
      },
      modules: [Keyboard, Pagination, Navigation],
    });
  }

  ngAfterViewInit(): void {
    this.swiper.init();
  }
}
