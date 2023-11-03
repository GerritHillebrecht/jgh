import { Component, ElementRef, ViewChild, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Application } from '@splinetool/runtime';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'ciu-car-game',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule],
  templateUrl: './car-game.component.html',
  styleUrls: ['./car-game.component.scss'],
})
export class CarGameComponent {
  @ViewChild('canvas3d')
  canvas?: ElementRef<HTMLCanvasElement>;

  protected readonly started = signal<boolean>(false);
  protected readonly loading = signal<boolean>(true);

  loadGame() {
    if (this.canvas) {
      this.started.update(() => true);
      const spline = new Application(this.canvas.nativeElement);
      spline
        .load('https://prod.spline.design/YNs7LwQhhm-Xooom/scene.splinecode')
        .then(() => {
          this.loading.update(() => false);
        });
    }
  }
}
