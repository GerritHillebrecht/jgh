import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faInfoCircle, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'sb-section-location',
  standalone: true,
  imports: [CommonModule, RouterLink, FontAwesomeModule],
  templateUrl: './section-location.component.html',
  styleUrls: ['./section-location.component.scss'],
})
export class SectionLocationComponent implements OnInit {
  protected readonly activeHeadline = signal(0);
  protected readonly phoneIcon = faPhone;
  protected readonly mailIcon = faEnvelope;
  protected readonly infoIcon = faInfoCircle;

  ngOnInit(): void {
    setInterval(() => {
      this.activeHeadline.update((v) => (v + 1) % 3);
    }, 3000);
  }
}
