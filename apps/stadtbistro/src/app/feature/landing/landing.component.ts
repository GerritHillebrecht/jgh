import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SectionHeroComponent,
  SectionGalleryComponent,
  SectionLocationComponent,
  SectionRecommendationsComponent,
  SectionVideoComponent,
  SectionInformationComponent,
} from './ui/sections';

@Component({
  selector: 'sb-landing',
  standalone: true,
  imports: [
    CommonModule,
    SectionHeroComponent,
    SectionRecommendationsComponent,
    SectionGalleryComponent,
    SectionVideoComponent,
    SectionLocationComponent,
    SectionInformationComponent,
  ],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export default class LandingComponent {}
