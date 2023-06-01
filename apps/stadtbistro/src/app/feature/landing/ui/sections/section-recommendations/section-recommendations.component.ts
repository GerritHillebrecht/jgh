import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'sb-section-recommendations',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule],
  templateUrl: './section-recommendations.component.html',
  styleUrls: ['./section-recommendations.component.scss'],
})
export class SectionRecommendationsComponent {}
