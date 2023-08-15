import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Blockquote component
 * @quote
 * @author
 * @position
 */
export interface BlockQuote {
  quote: string;
  author: string;
  position?: string;
}

@Component({
  selector: 'jgh-blockquote',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blockquote.component.html',
  styleUrls: ['./blockquote.component.scss'],
})
export class BlockquoteComponent {
  @Input({ required: true })
  blockquote!: BlockQuote;
}
