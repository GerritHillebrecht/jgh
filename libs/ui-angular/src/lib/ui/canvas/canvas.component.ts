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
import { ScrollingService } from '../../service/scrolling/scrolling.service';

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

export interface CanvasOptions {
  imagePath: string;
  fileName: string;
  fileExtension: string;
  frameCount: number;
  paddedZeros: number;
  width: number;
  height: number;
  backgroundColor: string;
  canvasHeight: number;
  horizontalPosition: 'flex-start' | 'center' | 'flex-end';
}

@Component({
  selector: 'jgh-canvas',
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

  protected canvasContext?: CanvasRenderingContext2D | null;

  @Input()
  options?: Partial<CanvasOptions>;

  private readonly image = new Image();

  protected canvasOptions: CanvasOptions = {
    imagePath:
      'https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass',
    fileName: '',
    fileExtension: 'jpg',
    frameCount: 148,
    paddedZeros: 4,
    width: 1158,
    height: 770,
    backgroundColor: '#000000',
    canvasHeight: 4,
    horizontalPosition: 'center',
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
    console.log('source', source);
    requestAnimationFrame(() => this.updateImage(source));
  });

  ngOnInit(): void {
    this.canvasOptions = {
      ...this.canvasOptions,
      ...this.options,
    };

    for (let i = 0; i < this.canvasOptions.frameCount; i++) {
      const image = new Image();
      const filePath = this.createFilePath(i);
      image.src = filePath;
    }
  }

  ngAfterViewInit() {
    if (this.section) {
      this.maxScrollTop.set(this.section.nativeElement.scrollHeight);
    }

    if (this.canvas) {
      this.canvasContext = this.canvas.nativeElement.getContext('2d');
      this.canvas.nativeElement.width = this.canvasOptions.width;
      this.canvas.nativeElement.height = this.canvasOptions.height;
    }
  }

  private updateImage(source: string) {
    this.image.src = source;
    this.image.onload = () => {
      if (this.canvasContext && this.canvas) {
        this.canvasContext.clearRect(
          0,
          0,
          this.canvas.nativeElement.width,
          this.canvas.nativeElement.height
        );
        this.canvasContext.drawImage(this.image, 0, 0);
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
