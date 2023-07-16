import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LogoComponent } from '../../logo/logo.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
// eslint-disable-next-line @nx/enforce-module-boundaries
import {
  NavigationService,
  ScrollService,
} from 'apps/stadtbistro/src/app/core/services';
import {
  faBars,
  faMugHot,
  faPizzaSlice,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'sb-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    LogoComponent,
    ShoppingCartComponent,
    MatButtonModule,
    MatMenuModule,
    FontAwesomeModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  protected readonly menuIcon = faBars;
  protected readonly foodIcon = faPizzaSlice;
  protected readonly drinksIcon = faMugHot;

  protected readonly navigationService = inject(NavigationService);

  protected readonly scrollService = inject(ScrollService);
  protected readonly routes: Array<{ path: string; label: string }> = [
    {
      path: '/',
      label: 'Das Stadtbistro',
    },
    {
      path: '/menu',
      label: 'Speisekarte',
    },
    {
      path: '/team',
      label: 'Unser Team',
    },
  ];
}
