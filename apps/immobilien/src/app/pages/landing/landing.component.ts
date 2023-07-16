import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageInfoGridComponent } from '@jgh/ui-angular/ui/image-info-grid';
import {
  CanvasComponent,
  CanvasOptions,
} from '@jgh/ui-angular/ui/canvas/canvas.component';

@Component({
  selector: 'im-landing',
  standalone: true,
  imports: [CommonModule, ImageInfoGridComponent, CanvasComponent],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export default class LandingComponent {
  protected readonly canvasOptions: CanvasOptions = {
    imagePath: 'assets/images/canvas/hero/jendrik/small',
    fileName: 'Beispiel_PNG',
    fileExtension: 'png',
    frameCount: 131,
    paddedZeros: 3,
    width: 1920,
    height: 1080,
    backgroundColor: '#1e40af',
    canvasHeight: 2.5,
    horizontalPosition: 'flex-end',
  };
  // protected readonly canvasOptions = {
  //   imagePath: 'https://www.apple.com/105/media/us/airpods-pro/2022/d2deeb8e-83eb-48ea-9721-f567cf0fffa8/anim/hero/large',
  //   fileName: '',
  //   fileExtension: 'png',
  //   frameCount: 63,
  //   paddedZeros: 4,
  //   width: 1440,
  //   height: 810,
  //   backgroundColor: '#000',
  //   canvasHeight: 2.5,
  // };
}
