import { Injectable, inject } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private readonly auth = inject(Auth);
  private readonly router = inject(Router);

  googleLogin() {
    return signInWithPopup(this.auth, new GoogleAuthProvider())
      .then(() => {
        this.router.navigate(['']);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  logout() {
    return this.auth
      .signOut()
      .then(() => {
        this.router.navigate(['auth']);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
