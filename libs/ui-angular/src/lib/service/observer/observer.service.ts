import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ObserverService {
  readonly observer = new IntersectionObserver((entries, options) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('observer-show', entry.isIntersecting);
    });
  }, {
    threshold: 0.2,
  });
}
