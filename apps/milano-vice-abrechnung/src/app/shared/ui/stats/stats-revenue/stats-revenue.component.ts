import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mva-stats-revenue',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats-revenue.component.html',
  styleUrls: ['./stats-revenue.component.scss'],
})
export class StatsRevenueComponent {
  @Input()
  revenues: {
    [key: string]: number;
  } = {};

  @Input()
  discounts: {
    [key: string]: number;
  } = {};
}
