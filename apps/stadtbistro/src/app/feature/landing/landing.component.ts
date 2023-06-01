import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeroComponent } from './ui/sections/section-hero/section-hero.component';
import { SectionRecommendationsComponent } from './ui/sections/section-recommendations/section-recommendations.component';
import { SectionGalleryComponent } from './ui/sections/section-gallery/section-gallery.component';

@Component({
  selector: 'sb-landing',
  standalone: true,
  imports: [
    CommonModule,
    SectionHeroComponent,
    SectionRecommendationsComponent,
    SectionGalleryComponent,
  ],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export default class LandingComponent {}
