import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentSliderService } from '../../service/content-slider.service';

@Component({
  selector: 'jgh-lib-content-slider-background-slice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-slider-background-slice.component.html',
  styleUrls: ['./content-slider-background-slice.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentSliderBackgroundSliceComponent implements OnInit {
  @Input() active = false;
  @Input() image!: string;
  @Input() index!: number;
  @Input() maxIndex!: number;
  protected clipPath = '';

  ngOnInit(): void {
    this.clipPath = this.getClipPath();
  }

  constructor(protected readonly sliderService: ContentSliderService) {}

  private getClipPath(): string {
    const slideIndex = this.index + 1;
    const percentile = Math.ceil(100 / this.maxIndex);
    return `inset(0 ${(this.maxIndex - slideIndex) * percentile}% 0 ${
      (slideIndex - 1) * percentile - 0.1
    }%)`;
  }
}
