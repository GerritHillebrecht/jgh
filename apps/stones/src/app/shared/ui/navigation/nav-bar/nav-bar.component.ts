import { Component, ViewEncapsulation, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import {
  faMagnifyingGlass,
  faShoppingBag,
} from '@fortawesome/free-solid-svg-icons';

import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'st-nav-bar',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, MatTabsModule, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavBarComponent {
  protected readonly instagramIcon = faInstagram;
  protected readonly twitterIcon = faTwitter;
  protected readonly searchIcon = faMagnifyingGlass;
  protected readonly shoppingBagIcon = faShoppingBag;

  protected readonly tabs = signal([
    {
      label: 'New',
      path: '/',
      exact: true,
    },
    {
      label: 'Shop',
      path: '/shop',
      exact: false,
    },
    {
      label: 'Collections',
      path: '/collection',
      exact: false,
    },
    {
      label: 'About',
      path: '/about',
      exact: false,
    },
    {
      label: 'Contact',
      path: '/contact',
      exact: false,
    },
  ]);
}
