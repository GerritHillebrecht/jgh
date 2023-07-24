import { Injectable, effect, signal, untracked } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { fromEvent, map, startWith } from 'rxjs';

export type Theme = 'dark' | 'light';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  readonly theme = signal<Theme>('light');
  readonly automaticTheme = signal<boolean>(true);

  private readonly mediaQuery = window.matchMedia(
    '(prefers-color-scheme: dark)'
  );
  private readonly automaticChange = toSignal(
    fromEvent<MediaQueryList>(this.mediaQuery, 'change').pipe(
      startWith(this.mediaQuery),
      map((list: MediaQueryList) => list.matches)
    )
  );
  private readonly automaticEffect = effect(
    () => {
      const darkTheme = this.automaticChange();

      if (untracked(() => this.automaticTheme())) {
        this.theme.set(darkTheme ? 'dark' : 'light');
      }
    },
    {
      allowSignalWrites: true,
    }
  );

  private readonly changeEffect = effect(() => {
    document.documentElement.classList.toggle('dark', this.theme() === 'dark');
  });

  setTheme(theme: Theme) {
    this.theme.set(theme);
  }
}
