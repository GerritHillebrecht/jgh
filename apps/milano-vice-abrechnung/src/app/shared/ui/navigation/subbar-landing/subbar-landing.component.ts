import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faDownload, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import {
  DateSelectionService,
  TimePeriod,
} from '../../../service/date-selection/date-selection.service';

@Component({
  selector: 'mva-subbar-landing',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    FontAwesomeModule,
  ],
  templateUrl: './subbar-landing.component.html',
  styleUrls: ['./subbar-landing.component.scss'],
})
export class SubbarLandingComponent {
  protected readonly downloadIcon = signal(faDownload);
  protected readonly sendMailIcon = signal(faPaperPlane);

  protected readonly dateSelectionService = inject(DateSelectionService);

  onSelectionChange(period: TimePeriod) {
    this.dateSelectionService.updateCurrentDatePeriod(period);
  }
}
