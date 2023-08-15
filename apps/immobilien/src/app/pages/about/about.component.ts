import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionSplitImageContentComponent } from '@jgh/ui-angular/ui/section-split-image-content';
import { BlockQuote, BlockquoteComponent } from '@jgh/ui-angular/ui/blockquote';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'im-about',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SectionSplitImageContentComponent,
    BlockquoteComponent,
    ButtonComponent,
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export default class AboutComponent {
  protected readonly quote = signal<BlockQuote>({
    quote:
      'Design ist nicht nur, wie es aussieht und sich anfühlt. Design ist, wie es funktioniert',
    author: 'Steve Jobs',
    position: 'Mitbegründer von Apple Inc.',
  });
}
