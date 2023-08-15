import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { Router, RouterModule } from '@angular/router';
import { Auth, signOut } from '@angular/fire/auth';

@Component({
  selector: 'im-admin',
  standalone: true,
  imports: [CommonModule, ButtonComponent, RouterModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export default class AdminComponent {
  private readonly auth = inject(Auth);
  private readonly router = inject(Router);

  protected async logout() {
    console.log('Signing out')
    await signOut(this.auth);
    this.router.navigate(['/']);
  }
}
