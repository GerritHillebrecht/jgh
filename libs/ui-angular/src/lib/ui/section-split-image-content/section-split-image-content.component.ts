import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'jgh-section-split-image-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-split-image-content.component.html',
  styleUrls: ['./section-split-image-content.component.scss'],
})
export class SectionSplitImageContentComponent {
  @Input()
  set reverse(reverse: boolean) {
    this.reverseOrder.set(reverse);
  }

  @Input({required: true})
  image!: string;

  protected reverseOrder = signal(false);
}
