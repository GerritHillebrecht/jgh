import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionSectionComponent } from '@jgh/ui-angular/ui/accordion-section';
import {
  accordionElements,
  accordionOptions,
  subtitle,
  title,
} from './constants/accordion.constants';
import { HeroSectionComponent } from './ui/hero-section/hero-section.component';
import { InformationSectionComponent } from './ui/information-section/information-section.component';
import { LocationSectionComponent } from './ui/location-section/location-section.component';
import { CanvasComponent } from 'libs/ui-angular/src/lib/ui/canvas/canvas.component';

@Component({
  selector: 'rab-landing',
  standalone: true,
  imports: [
    CommonModule,
    AccordionSectionComponent,
    HeroSectionComponent,
    InformationSectionComponent,
    LocationSectionComponent,
    CanvasComponent,
  ],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export default class LandingComponent {
  protected readonly title = title;
  protected readonly subtitle = subtitle;
  protected readonly accordionOptions = accordionOptions;
  protected readonly accordionElements = accordionElements;

  protected readonly canvasOptions = {
    imagePath: 'assets/images/landing/scrolling/macklemore',
    fileName: 'ezgif-frame-',
    fileExtension: 'jpg',
    frameCount: 22,
    paddedZeros: 3,
  };
}
