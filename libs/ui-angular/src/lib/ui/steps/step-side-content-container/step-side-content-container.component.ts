import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepSideHeadlineComponent } from '../step-side-headline/step-side-headline.component';
import { StepSideIndicatorComponent } from '../step-side-indicator/step-side-indicator.component';
import { faTv } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'jgh-lib-step-side-content-container',
  standalone: true,
  imports: [
    CommonModule,
    StepSideHeadlineComponent,
    StepSideIndicatorComponent,
  ],
  templateUrl: './step-side-content-container.component.html',
  styleUrls: ['./step-side-content-container.component.scss'],
})
export class StepSideContentContainerComponent {
  @Input() icon = faTv;
  @Input() iconColor = 'white';
  @Input() gradientStart = '#7928CA';
  @Input() gradientEnd = '#FF0080';
  @Input({ required: true }) title!: string;
}
