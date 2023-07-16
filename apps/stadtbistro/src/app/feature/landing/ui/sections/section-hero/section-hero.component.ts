import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { dishes, icons, new_icons } from '../../../constants';
import { RouterLink } from '@angular/router';
import Swiper, { Autoplay, EffectCreative, Keyboard, Navigation } from 'swiper';
import { AvatarComponent } from '@jgh/ui-angular/avatar';

@Component({
  selector: 'sb-section-hero',
  standalone: true,
  imports: [CommonModule, MatTooltipModule, RouterLink, AvatarComponent],
  templateUrl: './section-hero.component.html',
  styleUrls: ['./section-hero.component.scss'],
})
export class SectionHeroComponent implements AfterViewInit {
  @ViewChild('swiper')
  swiperRef?: ElementRef<HTMLDivElement>;

  protected readonly currentDish = signal(0);
  protected readonly dishes = dishes;
  protected readonly icons = new_icons;

  private readonly swiper = new Swiper('.swiper', {
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 5000,
    },
    effect: 'creative',
    creativeEffect: {
      prev: {
        rotate: [0, 0, 90],
        opacity: 0,
        origin: '120% center',
      },
      next: {
        rotate: [0, 0, -90],
        scale: 0.4,
        opacity: 0,
        origin: '120% center',
      },
    },
    on: {
      slideChange: () => {
        this.currentDish.set(this.swiper.realIndex);
      },
    },
    modules: [EffectCreative, Keyboard, Navigation, Autoplay],
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
