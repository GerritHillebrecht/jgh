import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  readonly sidenavOpened = signal<boolean>(false);

  toggleSidenav(): void {
    this.sidenavOpened.set(!this.sidenavOpened());
  }
}
