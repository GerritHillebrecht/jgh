import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  EquirectProjection,
  NgxView360Module,
  View360Options,
} from '@egjs/ngx-view360';
import { ScreenSizeService } from '@jgh/ui-angular/service/screen-size/screen-size.service';

@Component({
  selector: 'im-section-marzipano',
  standalone: true,
  imports: [CommonModule, NgxView360Module],
  templateUrl: './section-marzipano.component.html',
  styleUrls: ['./section-marzipano.component.scss'],
})
export class SectionMarzipanoComponent {
  protected readonly screenSize = inject(ScreenSizeService);

  protected readonly options: Partial<View360Options> = {
    projection: new EquirectProjection({
      src: 'assets/images/tiles/002.jpg',
    }),
    scrollable: true,
    wheelScrollable: true,
    initialZoom: 0,
    autoplay: {
      speed: 0.25,
      pauseOnHover: false,
    },
  };
}
