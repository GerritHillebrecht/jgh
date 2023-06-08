import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'sb-section-location',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './section-location.component.html',
  styleUrls: ['./section-location.component.scss'],
})
export class SectionLocationComponent implements OnInit {
  activeHeadline = signal(0);

  ngOnInit(): void {
    setInterval(() => {
      this.activeHeadline.update((v) => (v + 1) % 3);
    }, 3000);
  }
}
