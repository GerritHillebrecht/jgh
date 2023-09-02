import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'jgh-lib-step-indicator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './step-indicator.component.html',
  styleUrls: ['./step-indicator.component.scss'],
})
export class StepIndicatorComponent implements AfterViewInit {
  @ViewChild('line') line?: ElementRef<HTMLDivElement>;
  @ViewChild('circle') circle?: ElementRef<HTMLDivElement>;
  @ViewChild('title') title?: ElementRef<HTMLDivElement>;
  @Input() number = 1;
  @Input() fromColor = '#7928CA';
  @Input() toColor = '#FF0080';

  private readonly observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('fadeIn', entry.isIntersecting);
      });
    },
    { threshold: 0 }
  );

  ngAfterViewInit(): void {
    if (this.circle) {
      this.observer.observe(this.circle.nativeElement);
    }

    if (this.title) {
      this.observer.observe(this.title.nativeElement);
    }

    if (this.line) {
      this.observer.observe(this.line.nativeElement);
    }
  }
}
