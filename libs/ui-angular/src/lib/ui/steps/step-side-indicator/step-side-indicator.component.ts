import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTv } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'jgh-lib-step-side-indicator',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './step-side-indicator.component.html',
  styleUrls: ['./step-side-indicator.component.scss'],
})
export class StepSideIndicatorComponent implements AfterViewInit {
  @ViewChild('lineContainer') lineContainer:
    | ElementRef<HTMLDivElement>
    | undefined;

  @Input() icon = faTv;
  @Input() iconColor = 'white';
  @Input() gradientStart = '#7928CA';
  @Input() gradientEnd = '#FF0080';

  private readonly observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const element = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          return element.style.setProperty('grid-template-rows', '1fr');
        }

        return element.style.setProperty('grid-template-rows', '0fr');
      });
    },
    {
      threshold: 0.1,
    }
  );

  ngAfterViewInit(): void {
    if (this.lineContainer) {
      this.observer.observe(this.lineContainer.nativeElement);
    }
  }
}
