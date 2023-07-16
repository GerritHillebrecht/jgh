import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faEnvelope,
  faInfoCircle,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'sb-section-location',
  standalone: true,
  imports: [CommonModule, RouterLink, FontAwesomeModule],
  templateUrl: './section-location.component.html',
  styleUrls: ['./section-location.component.scss'],
})
export class SectionLocationComponent implements OnInit, AfterViewInit {
  @ViewChild('section')
  section!: ElementRef<HTMLElement>;

  protected readonly activeHeadline = signal(0);
  protected readonly phoneIcon = faPhone;
  protected readonly mailIcon = faEnvelope;
  protected readonly infoIcon = faInfoCircle;

  protected readonly showMaps = signal(false);

  ngOnInit(): void {
    setInterval(() => {
      this.activeHeadline.update((v) => (v + 1) % 3);
    }, 3000);
  }

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          return this.showMaps.set(true);
        }
        return this.showMaps.set(false);
      });
    });
    if (this.section) {
      observer.observe(this.section.nativeElement);
    }
  }
}
