import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ObserverService {
  readonly observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('hide', !entry.isIntersecting);
    });
  });
}
