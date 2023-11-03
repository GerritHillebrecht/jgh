import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';

import { DateSelectionService } from '../../../service/date-selection/date-selection.service';

import * as dayjs from 'dayjs';

@Component({
  selector: 'mva-progress-boxes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress-boxes.component.html',
  styleUrls: ['./progress-boxes.component.scss'],
})
export class ProgressBoxesComponent {
  protected readonly dateSelectionService = inject(DateSelectionService);

  protected readonly days = computed<dayjs.Dayjs[]>(() => {
    return Array.from(
      {
        length:
          this.dateSelectionService.selectedTimePeriod().to.getDate() -
          this.dateSelectionService.selectedTimePeriod().from.getDate() +
          1,
      },
      (_, i) =>
        dayjs(this.dateSelectionService.selectedTimePeriod().from).add(
          i,
          'days'
        )
    );
  });
}
