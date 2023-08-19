/* eslint-disable @nx/enforce-module-boundaries */
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObserverService } from '@jgh/ui-angular/service/observer';

@Component({
  selector: 'jgh-section-split-image-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-split-image-content.component.html',
  styleUrls: ['./section-split-image-content.component.scss'],
})
export class SectionSplitImageContentComponent implements AfterViewInit {
  @ViewChild('figure')
  figure?: ElementRef<HTMLElement>;

  @Input()
  set reverse(reverse: boolean) {
    this.reverseOrder.set(reverse);
  }

  @Input({ required: true })
  image!: string;

  private readonly observer = inject(ObserverService).observer;

  protected reverseOrder = signal(false);

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.figure) {
        this.observer.observe(this.figure.nativeElement);
      }
    }, 1);
  }
}
