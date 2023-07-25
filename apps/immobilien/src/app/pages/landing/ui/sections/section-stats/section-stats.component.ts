/* eslint-disable @nx/enforce-module-boundaries */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from 'apps/immobilien/src/app/shared/ui/button/button.component';

@Component({
  selector: 'im-section-stats',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './section-stats.component.html',
  styleUrls: ['./section-stats.component.scss'],
})
export class SectionStatsComponent {}
