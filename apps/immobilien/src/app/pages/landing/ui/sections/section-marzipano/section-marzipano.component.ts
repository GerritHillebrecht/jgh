/* eslint-disable @nx/enforce-module-boundaries */
import {
  AfterViewInit,
  Component,
  ViewChild,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  EquirectProjection,
  NgxView360Component,
  NgxView360Module,
  View360Options,
} from '@egjs/ngx-view360';
import { ScreenSizeService } from '@jgh/ui-angular/service/screen-size/screen-size.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  selector: 'im-section-marzipano',
  standalone: true,
  imports: [CommonModule, NgxView360Module],
  templateUrl: './section-marzipano.component.html',
  styleUrls: ['./section-marzipano.component.scss'],
})
export class SectionMarzipanoComponent {
  @ViewChild('viewer')
  viewer?: NgxView360Component;

  protected readonly screenSize = inject(ScreenSizeService);

  private readonly breakpointObserver = inject(BreakpointObserver);
  protected readonly isSmall = this.breakpointObserver
    .observe(['(max-width: 640px)'])
    .pipe(map((result) => result.matches));

  protected readonly options = toSignal<Partial<View360Options>>(
    this.isSmall.pipe(
      map((isSmall) => ({
        projection: new EquirectProjection({
          src: 'assets/images/tiles/002.jpg',
        }),
        scrollable: true,
        wheelScrollable: true,
        initialZoom: isSmall ? 1.75 : 0,
        useResizeObserver: true,
        autoplay: {
          speed: 0.25,
          pauseOnHover: false,
        },
      }))
    )
  );
}
