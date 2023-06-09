import { AfterViewInit, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swiper, {
  Autoplay,
  EffectCoverflow,
  EffectCube,
  Keyboard,
  Pagination,
} from 'swiper';

@Component({
  selector: 'sb-hero-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-slider.component.html',
  styleUrls: ['./hero-slider.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeroSliderComponent implements AfterViewInit {
  @ViewChild('heroswiper') swiperRef?: ElementRef<HTMLDivElement>;

  private readonly swiper: Swiper = new Swiper('.hero-swiper', {
    loop: true,
    autoplay: {
      delay: 15000,
    },
    speed: 1000,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    effect: 'coverflow',
    modules: [Keyboard, Autoplay, EffectCube, EffectCoverflow, Pagination],
  });

  ngAfterViewInit(): void {
    if (this.swiperRef) {
      const width =
        this.swiperRef.nativeElement.parentElement?.offsetWidth || 1;
      const height =
        this.swiperRef.nativeElement.parentElement?.offsetHeight || 1;

      this.swiperRef.nativeElement.style.height = `${height}px`;
      this.swiperRef.nativeElement.style.width = `${width}px`;
    }

    this.swiper.init();
  }
}
