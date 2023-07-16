import { Injectable, signal } from '@angular/core';
import { fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollingService {
  readonly scrollDistance = signal(0);
  readonly lastScrollDistance = signal(0);
  readonly maxScrollDistance = signal(0);

  constructor() {
    fromEvent(window, 'scroll').subscribe(() => {
      this.lastScrollDistance.set(this.scrollDistance());
      this.scrollDistance.set(window.scrollY);
    });
  }
}
