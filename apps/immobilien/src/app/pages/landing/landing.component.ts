/* eslint-disable @nx/enforce-module-boundaries */
import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ImageInfoGridComponent } from '@jgh/ui-angular/ui/image-info-grid';
import { SectionSplineCanvasComponent } from '@jgh/ui-angular/ui/section-spline-canvas';
import { SectionSplitImageContentComponent } from '@jgh/ui-angular/ui/section-split-image-content';
import { BlockQuote, BlockquoteComponent } from '@jgh/ui-angular/ui/blockquote';
import { List, ListComponent } from '../../shared/ui/list/list.component';
import { infoBoxes, lists, quotes } from './constants/constants';
import { environment } from 'apps/immobilien/src/environments/environment';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import {
  // SectionProjectsPreviewComponent,
  SectionAreasOfWorkComponent,
  // SectionBlogPreviewComponent,
  SectionMarzipanoComponent,
  SectionRecommendationsComponent,
  SectionStatsComponent,
} from './ui/sections';
import { SectionProjectsPreviewComponent } from '@jgh/ui-angular/ui/section-projects-preview';
import { SectionBlogPreviewComponent } from '@jgh/ui-angular/ui/section-blog-preview';
import { QuoteService } from '../../shared/data-access/quote';

@Component({
  selector: 'im-landing',
  standalone: true,
  imports: [
    CommonModule,
    ImageInfoGridComponent,
    SectionSplineCanvasComponent,
    SectionSplitImageContentComponent,
    SectionAreasOfWorkComponent,
    SectionStatsComponent,
    SectionRecommendationsComponent,
    SectionMarzipanoComponent,
    SectionBlogPreviewComponent,
    SectionProjectsPreviewComponent,
    ButtonComponent,
    BlockquoteComponent,
    ListComponent,
    FontAwesomeModule,
    RouterModule,
  ],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export default class LandingComponent {
  private readonly quoteService = inject(QuoteService);
  protected readonly production = signal(environment.production);

  protected readonly quotes = signal<BlockQuote[]>(quotes);
  protected readonly blockquotes = this.quoteService.quotes();
  protected readonly lists = signal<List[]>(lists);
  protected readonly infoBoxes = signal(infoBoxes);

  protected readonly splineURL =
    'https://prod.spline.design/0W6YOb1UI3BWf3JV/scene.splinecode';

  protected readonly phoneIcon = faPhone;
  protected readonly mailIcon = faEnvelope;
}
