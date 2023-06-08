import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { HeadlineSectionComponent } from 'apps/stadtbistro/src/app/shared/ui/typographie';

@Component({
  selector: 'sb-section-video',
  standalone: true,
  imports: [CommonModule, HeadlineSectionComponent],
  templateUrl: './section-video.component.html',
  styleUrls: ['./section-video.component.scss'],
})
export class SectionVideoComponent {}
