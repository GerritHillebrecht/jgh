import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepSideContentContainerComponent } from '@jgh/ui-angular/ui/steps';
import { faStore } from '@fortawesome/free-solid-svg-icons';

import Swiper, {
  Controller,
  EffectCreative,
  Keyboard,
  Navigation,
  Pagination,
} from 'swiper';

@Component({
  selector: 'ciu-section-how-it-works',
  standalone: true,
  imports: [CommonModule, StepSideContentContainerComponent],
  templateUrl: './section-how-it-works.component.html',
  styleUrls: ['./section-how-it-works.component.scss'],
})
export class SectionHowItWorksComponent implements AfterViewInit {
  @ViewChild('swiper') swiperRef?: ElementRef<HTMLDivElement>;

  protected readonly iconShop = faStore;

  private readonly swiper = new Swiper('.swiper', {
    // Optional parameters
  });

  ngAfterViewInit(): void {
    this.swiper.init();
    if (this.swiperRef) {
      this.swiperRef.nativeElement.style.width =
        this.swiperRef.nativeElement.parentElement?.offsetWidth + 'px';
    }
  }
}
