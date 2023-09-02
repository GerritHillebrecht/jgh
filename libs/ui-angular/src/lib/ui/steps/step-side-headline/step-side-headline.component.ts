import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'jgh-lib-step-side-headline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './step-side-headline.component.html',
  styleUrls: ['./step-side-headline.component.scss'],
})
export class StepSideHeadlineComponent {
  @Input() bottomMargin = true;
}
