/* eslint-disable @nx/enforce-module-boundaries */
import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  faGavel,
  faLinesLeaning,
  faLocationDot,
  faPhone,
  faShieldHalved,
} from '@fortawesome/free-solid-svg-icons';
import {
  NavLink,
  NavbarRoundedOverlayComponent,
} from '@jgh/ui-angular/ui/navigation/navbar-rounded-overlay/';
import { ScrollingService } from 'apps/ra-bartels/src/app/core/service/scrolling/scrolling.service';
import { SidenavService } from '../sidenav/sidenav.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'rab-navbar',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    NavbarRoundedOverlayComponent,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  private readonly scrollService = inject(ScrollingService);
  private readonly sidenavService = inject(SidenavService);

  protected readonly scrolled = computed(
    () => this.scrollService.scrollDistance() > 0
  );
  protected readonly scrolledDown = computed(
    () =>
      this.scrollService.scrollDistance() >
      this.scrollService.lastScrollDistance()
  );

  protected readonly routes = signal<NavLink[]>([
    {
      path: '/',
      label: 'Home',
      icon: {
        fontAwesome: faLinesLeaning,
      },
    },
    {
      label: 'Notfall',
      icon: {
        fontAwesome: faShieldHalved,
      },
      path: '/learn',
    },
    {
      label: 'Kontakt',
      icon: {
        fontAwesome: faPhone,
      },
      path: '/explore',
    },
    {
      label: 'Anfahrt',
      icon: {
        fontAwesome: faLocationDot,
      },
      path: '/support',
    },
  ]);

  protected openSidenav() {
    this.sidenavService.sidenavOpened.update(() => true);
  }
}
