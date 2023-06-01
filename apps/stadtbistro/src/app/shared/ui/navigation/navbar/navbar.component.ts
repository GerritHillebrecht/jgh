import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LogoComponent } from '../../logo/logo.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { ScrollService } from 'apps/stadtbistro/src/app/core/services/scroll.service';

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
    MatIconModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  protected readonly scrollService = inject(ScrollService);
  protected readonly routes: Array<{ path: string; label: string }> = [
    {
      path: '/',
      label: 'Das Stadtbistro',
    },
  ];
}
