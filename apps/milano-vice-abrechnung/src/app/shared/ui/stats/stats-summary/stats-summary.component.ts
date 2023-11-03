import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';

export interface StatsSummaryData {
  revenueTotal: number;
  discountTotal: number;
  earningsTotal: number;
  ratingsTotal: number;
  ratingsAmount: number;
  ratingsEarnings: number;
  costsChoco: number;
}

@Component({
  selector: 'mva-stats-summary',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './stats-summary.component.html',
  styleUrls: ['./stats-summary.component.scss'],
})
export class StatsSummaryComponent {
  @Input()
  data: StatsSummaryData = {
    revenueTotal: 10000,
    discountTotal: 200,
    earningsTotal: 6000,
    ratingsTotal: 4.6,
    ratingsAmount: 25,
    ratingsEarnings: 300,
    costsChoco: 4000,
  };

  protected readonly faClock = faClockRotateLeft;
}
