import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentSliderService } from '../../service';

@Component({
  selector: 'jgh-monorepo-content-slider-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-slider-pagination.component.html',
  styleUrls: ['./content-slider-pagination.component.scss'],
})
export class ContentSliderPaginationComponent {
  constructor(protected readonly sliderService: ContentSliderService) {}

  selectSlide(index: number): void {
    this.sliderService.selectSlide(index);
  }
}
