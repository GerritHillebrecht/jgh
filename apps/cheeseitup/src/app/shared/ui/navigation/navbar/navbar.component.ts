import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NavbarRoundedOverlayComponent,
  NavLink,
} from '@jgh/ui-angular/ui/navigation/navbar-rounded-overlay/';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'ciu-navbar',
  standalone: true,
  imports: [CommonModule, NavbarRoundedOverlayComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  protected readonly routes = signal<NavLink[]>([
    {
      path: '',
      label: 'Home',
      icon: {},
    },
    {
      path: 'menu',
      label: 'Menu',
      icon: {
        fontAwesome: faUtensils,
      },
    },
  ]);
}
