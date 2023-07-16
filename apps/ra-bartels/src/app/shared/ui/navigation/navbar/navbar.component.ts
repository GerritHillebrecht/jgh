import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ScrollingService } from 'apps/ra-bartels/src/app/core/service/scrolling/scrolling.service';

@Component({
  selector: 'rab-navbar',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  private readonly scrollService = inject(ScrollingService);
  protected readonly scrolled = computed(
    () => this.scrollService.scrollDistance() > 0
  );
  protected readonly scrolledDown = computed(
    () =>
      this.scrollService.scrollDistance() >
      this.scrollService.lastScrollDistance()
  );
}
