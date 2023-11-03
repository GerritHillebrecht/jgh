import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fromEvent } from 'rxjs';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';
import {
  ContentSliderSlideComponent as SlideComponent,
  ContentSliderPaginationComponent as PaginationComponent,
} from './components';
import { ContentSliderService } from './service';
import { ContentSliderSlide as Slide } from './model';
import { GestureDirective } from './directive/gesture.directive';

@Component({
  selector: 'jgh-lib-content-slider',
  standalone: true,
  imports: [
    CommonModule,
    SlideComponent,
    PaginationComponent,
    GestureDirective,
  ],
  templateUrl: './content-slider.component.html',
  styleUrls: ['./content-slider.component.scss'],
})
export class ContentSliderComponent implements OnInit {
  @Input() set setSlides(slides: Slide[] | null | undefined) {
    this.sliderService.slides = slides || [];
  }

  @Input() turbulenceState = false;

  @Output() indexChange = new EventEmitter<number>();

  get slides() {
    return this.sliderService.slides;
  }

  get activeSlide() {
    return this.sliderService.selectedSlides.get('active') || 0;
  }

  constructor(protected readonly sliderService: ContentSliderService) {}

  ngOnInit(): void {
    // Emit Slider Index Changes
    this.sliderService.slideIndexChange$
      .pipe(distinctUntilChanged())
      .subscribe((index) => this.indexChange.emit(index));

    // Register keyboard events
    fromEvent<KeyboardEvent>(document, 'keydown')
      .pipe(
        map((event: KeyboardEvent) => event.key),
        filter((key) => ['ArrowRight', 'ArrowLeft'].includes(key))
      )
      .subscribe((key) => {
        console.log(`[content-slider-component] key ${key} pressed`);
        key === 'ArrowRight' ? this.nextSlide() : this.previousSlide();
      });
  }

  nextSlide(): void {
    console.log('[content-slider-component] next slide called');
    this.sliderService.changeSlide('next');
  }

  previousSlide(): void {
    this.sliderService.changeSlide('previous');
  }

  selectSlide(index: number): void {
    this.sliderService.selectSlide(index);
  }
}
