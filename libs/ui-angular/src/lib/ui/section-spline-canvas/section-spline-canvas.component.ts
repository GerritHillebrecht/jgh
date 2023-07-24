import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  NgZone,
  ViewChild,
  ViewEncapsulation,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Application } from '@splinetool/runtime';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'jgh-section-spline-canvas',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule, FontAwesomeModule],
  templateUrl: './section-spline-canvas.component.html',
  styleUrls: ['./section-spline-canvas.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SectionSplineCanvasComponent implements AfterViewInit {
  @ViewChild('canvas', { static: true })
  canvas?: ElementRef<HTMLCanvasElement>;

  @Input({ required: true })
  splineURL!: string;

  @Input()
  render = true;

  protected readonly phoneIcon = faPhone;
  protected readonly mailIcon = faEnvelope;

  protected readonly canvasLoading = signal(true);
  private readonly zone = inject(NgZone);

  ngAfterViewInit(): void {
    if (this.canvas && this.render) {
      const canvas = this.canvas.nativeElement;
      this.zone.runOutsideAngular(() => {
        const spline = new Application(canvas);
        spline.load(this.splineURL).then(() => this.canvasLoading.set(false));
      });
    }
  }
}
