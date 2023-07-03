import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  public readonly theme = signal<'light' | 'dark'>('light');
}
