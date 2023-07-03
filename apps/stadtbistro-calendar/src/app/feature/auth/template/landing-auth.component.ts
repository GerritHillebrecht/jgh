import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Auth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';

import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Router, RouterModule } from '@angular/router';
import { AuthenticationService } from '../../../shared/services/authentication/authentication.service';

@Component({
  selector: 'sbc-landing-auth',
  standalone: true,
  imports: [CommonModule, MatButtonModule, FontAwesomeModule],
  templateUrl: './landing-auth.component.html',
  styleUrls: ['./landing-auth.component.scss'],
})
export default class LandingAuthComponent {
  private readonly authService = inject(AuthenticationService);

  protected googleLogo = faGoogle;

  protected googleLogin(): void {
    this.authService.googleLogin();
  }
}
