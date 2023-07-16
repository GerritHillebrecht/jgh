import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  computed,
  effect,
  inject,
  signal,
  untracked,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingService } from '../../../core/service/scrolling/scrolling.service';

// private readonly imagePath = 'assets/images/landing/scrolling/justitia';
// private readonly fileName = 'ezgif-frame-';
// private readonly fileExtension = 'jpg';
// private readonly frameCount = 20;
// private readonly paddedZeros = 3;

// image.width,
// image.height,
// 0,
// 0,
// this.canvas.nativeElement.width,
// this.canvas.nativeElement.height

interface CanvasOptions {
  imagePath: string;
  fileName: string;
  fileExtension: string;
  frameCount: number;
  paddedZeros: number;
}

@Component({
  selector: 'rab-canvas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
})
export class CanvasComponent implements OnInit, AfterViewInit {
  @ViewChild('section', { static: true })
  section?: ElementRef<HTMLDivElement>;

  @ViewChild('canvas', { static: true })
  canvas?: ElementRef<HTMLCanvasElement>;

  protected cavasContext?: CanvasRenderingContext2D | null;

  @Input()
  options?: Partial<CanvasOptions>;

  private readonly image = new Image();

  private canvasOptions: CanvasOptions = {
    imagePath:
      'https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass',
    fileName: '',
    fileExtension: 'jpg',
    frameCount: 100,
    paddedZeros: 4,
  };

  private readonly scrollingService = inject(ScrollingService);
  private readonly maxScrollTop = signal(0);

  private readonly currentIndex = computed(() => {
    const scrollDistance = this.scrollingService.scrollDistance();
    const maxScrollTop = untracked(() => this.maxScrollTop());
    const scrollPercentage = scrollDistance / maxScrollTop;

    return Math.floor(this.canvasOptions.frameCount * scrollPercentage);
  });

  protected readonly currentFrame = computed(() =>
    this.createFilePath((this.currentIndex() || 0) + 1)
  );

  private canvasEffect = effect(() => {
    const source = this.currentFrame();
    requestAnimationFrame(() => this.updateImage(source));
  });

  ngOnInit(): void {
    this.canvasOptions = {
      ...this.canvasOptions,
      ...this.options,
    };

    for (let i = 0; i < this.canvasOptions.frameCount; i++) {
      const image = new Image();
      image.src = this.createFilePath(i);
    }
  }

  ngAfterViewInit() {
    if (this.section) {
      const scrollHeight = this.section.nativeElement.scrollHeight;
      const clientHeight = window.innerHeight;
      this.maxScrollTop.set(scrollHeight - clientHeight);
    }

    if (this.canvas) {
      this.cavasContext = this.canvas.nativeElement.getContext('2d');
      this.canvas.nativeElement.width = 1158;
      this.canvas.nativeElement.height = 770;
    }
  }

  private updateImage(source: string) {
    this.image.src = source;
    this.image.onload = () => {
      if (this.cavasContext && this.canvas) {
        this.cavasContext.drawImage(this.image, 0, 0);
      }
    };
  }

  private createFilePath(index: number) {
    const { imagePath, fileName, paddedZeros, fileExtension } =
      this.canvasOptions;

    return `${imagePath}/${fileName}${index
      .toString()
      .padStart(paddedZeros, '0')}.${fileExtension}`;
  }
}
