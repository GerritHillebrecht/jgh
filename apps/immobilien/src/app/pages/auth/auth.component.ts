import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ButtonComponent } from '../../shared/ui/button/button.component';

@Component({
  selector: 'im-auth',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonComponent,
  ],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export default class AuthComponent {
  private readonly router = inject(Router);
  private readonly auth = inject(Auth);
  protected authForm: FormGroup;

  get email() {
    return this.authForm.get('email') as FormControl;
  }

  get password() {
    return this.authForm.get('password') as FormControl;
  }

  constructor() {
    this.authForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  protected async login() {
    this.authForm.markAllAsTouched();
    if (this.authForm.invalid) return;

    const authenticated = await signInWithEmailAndPassword(
      this.auth,
      this.email.value,
      this.password.value
    );

    if (authenticated) {
      this.router.navigate(['/preview']);
    }
  }
}
