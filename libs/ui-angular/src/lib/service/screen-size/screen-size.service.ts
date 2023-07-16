import { BreakpointObserver } from '@angular/cdk/layout';
import { Injectable, inject, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScreenSizeService {
  private readonly breakpointObserver = inject(BreakpointObserver);
  readonly small = signal<boolean>(true);

  constructor() {
    this.breakpointObserver
      .observe('(max-width: 639px)')
      .subscribe((result) => {
        this.small.set(result.matches);
      });
  }
}
