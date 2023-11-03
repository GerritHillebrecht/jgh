import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavService } from './sidenav.service';

@Component({
  selector: 'rab-sidenav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  protected readonly sidenavService = inject(SidenavService);

  protected closeSidenav(): void {
    this.sidenavService.sidenavOpened.update(() => false);
  }
}
