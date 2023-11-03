import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  readonly sidenavOpened = signal(false);
}
