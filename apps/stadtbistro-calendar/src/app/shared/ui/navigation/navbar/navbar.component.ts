import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../../../services/authentication/authentication.service';
import { MatButtonModule } from '@angular/material/button';
import { NavigationService } from '../../../services/navigation/navigation.service';

@Component({
  selector: 'sbc-navbar',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  private readonly authService = inject(AuthenticationService);
  private readonly navigationService = inject(NavigationService);

  protected logout(): void {
    this.authService.logout();
  }

  protected toggleSidenav(): void {
    this.navigationService.toggleSidenav();
  }
}
