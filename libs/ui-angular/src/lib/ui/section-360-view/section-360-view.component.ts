import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  EquirectProjection,
  NgxView360Module,
  View360Options,
} from '@egjs/ngx-view360';

@Component({
  selector: 'jgh-section-360-view',
  standalone: true,
  imports: [CommonModule, NgxView360Module],
  // templateUrl: './section-360-view.component.html',
  template: `<ngx-view360 class="is-16by9" [options]="options">
    <div class="view360-hotspots">
      <div
        class="view360-hotspot"
        *ngFor="let hotspot of hotspots; let index = index"
        [attr.data-yaw]="hotspot.yaw"
        [attr.data-pitch]="hotspot.pitch"
        [ngClass]="{
          'view360-hotspot--search': hotspot.type === 'search',
          'view360-hotspot--link': hotspot.type === 'link'
        }"
      >
        {{ hotspot.type === 'search' ? '' : hotspot.text }}
      </div>
      <!-- <div class="view360-hotspot" data-yaw="0" data-pitch="0">1</div>
      <div class="view360-hotspot" data-yaw="-90" data-pitch="0">2</div>
      <div class="view360-hotspot" data-position="0 1 0">3</div>
      <div class="view360-hotspot" data-yaw="-90" data-pitch="-90">4</div>
      <div class="view360-hotspot" data-yaw="-180" data-pitch="-90">5</div> -->
    </div>
  </ngx-view360>`,
  styleUrls: ['./section-360-view.component.scss'],
})
export class Section360ViewComponent {
  @Input()
  image =
    'https://res.cloudinary.com/khatera-gross/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1693046259/realistic_inside_the_living_room_of_a_extremely_ex_s12bik.jpg?_s=public-apps';

  readonly hotspots: {
    type: string;
    yaw: number;
    pitch: number;
    book?: number;
    text?: string;
  }[] = [
    {
      type: 'search',
      yaw: 232,
      pitch: -14,
      book: 1,
    },
    {
      type: 'search',
      yaw: 133,
      pitch: -18,
      book: 2,
    },
    {
      type: 'search',
      yaw: 186,
      pitch: -17,
      book: 3,
    },
    {
      type: 'link',
      yaw: 94,
      pitch: -8,
      text: 'Economy\nCulture',
    },
  ];

  options: Partial<View360Options> = {
    hotspot: {
      zoom: true,
    },
    projection: new EquirectProjection({
      src: this.image,
    }),
  };
}
