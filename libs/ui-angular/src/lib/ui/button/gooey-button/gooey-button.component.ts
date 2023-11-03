import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'jgh-lib-gooey-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gooey-button.component.html',
  styleUrls: ['./gooey-button.component.scss'],
})
export class GooeyButtonComponent implements AfterViewInit {
  @ViewChild('btn') button: ElementRef<HTMLButtonElement> | undefined;

  @Input() numberOfBubbles = 10;
  @Input() paddingX = '1.25rem';
  @Input() paddingY = '0.85rem';
  @Input() bubbleSize = '1.5rem';
  @Input() btnClass = '';

  protected bubbleArray: number[];

  constructor() {
    this.bubbleArray = Array.from(
      { length: this.numberOfBubbles },
      (_, i) => i
    );
  }

  ngAfterViewInit(): void {
    this.button?.nativeElement.style.setProperty(
      '--btn-padding-x',
      this.paddingX
    );
    this.button?.nativeElement.style.setProperty(
      '--btn-padding-y',
      this.paddingY
    );
    this.button?.nativeElement.style.setProperty(
      '--bubble-size',
      this.bubbleSize
    );

    if (this.btnClass.length) {
      this.btnClass.split(' ').forEach((className) => {
        this.button?.nativeElement.classList.add(className);
      });
    }
  }
}
