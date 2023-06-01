import { Injectable, signal } from '@angular/core';
import { fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  readonly scrollDistance = signal(0);

  constructor() {
    fromEvent(window, 'scroll').subscribe(() => {
      this.scrollDistance.set(window.scrollY);
    });
  }
}
