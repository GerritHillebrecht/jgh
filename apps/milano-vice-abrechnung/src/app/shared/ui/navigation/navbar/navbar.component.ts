import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'mva-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  protected readonly routes = signal<{ path: string; label: string }[]>([
    { path: '/', label: 'Partner Hub' },
    { path: '/orders', label: 'Meine Bestellungen' },
    { path: '/recipes', label: 'Backanleitung' },
  ]);
}
