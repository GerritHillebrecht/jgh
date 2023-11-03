import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'ciu-menu-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export default class MenuItemComponent implements OnInit, AfterViewInit {
  @ViewChild('slider')
  sliderRef!: ElementRef<HTMLDivElement>;

  @ViewChildren('slide')
  slidesRef!: QueryList<ElementRef<HTMLDivElement>>;

  protected readonly active = signal(-1);

  protected readonly slides = signal([
    {
      image: 'assets/images/products/pizza/pizza-king-cheese.png',
    },
    {
      image: 'assets/images/products/pizza/pizza-diavolo-picante.png',
    },
    {
      image: 'assets/images/products/pizza/pizza-king-cheese.png',
    },
    {
      image: 'assets/images/products/pizza/pizza-italian-delight.png',
    },
    {
      image: 'assets/images/products/pizza/pizza-diavolo.png',
    },
    
  ]);

  ngOnInit(): void {
    fromEvent(window, 'resize').subscribe(() => {
      this.calculateSize();
    });

    fromEvent(window, 'keydown').subscribe((event: Event) => {
      const keyEvent = event as KeyboardEvent;
      if (keyEvent.key === 'ArrowLeft') {
        this.prev();
      }

      if (keyEvent.key === 'ArrowRight') {
        this.next();
      }
    });
  }

  ngAfterViewInit(): void {
    this.active.update(() => 0);
    this.calculateSize();
  }

  private calculateSize(): void {
    if (!this.sliderRef) {
      return;
    }

    const { width, height } =
      this.sliderRef.nativeElement.getBoundingClientRect();

    if (width > height) {
      this.sliderRef.nativeElement.style.setProperty(
        '--inner',
        `${height / 6}px`
      );
      this.sliderRef.nativeElement.style.setProperty(
        '--middle',
        `${height / 4}px`
      );
    } else {
      this.sliderRef.nativeElement.style.setProperty(
        '--inner',
        `${width / 6}px`
      );
      this.sliderRef.nativeElement.style.setProperty(
        '--middle',
        `${width / 2.7}px`
      );
    }
  }

  protected next() {
    this.active.update((currentValue) => {
      const nextValue = currentValue + 1;
      return nextValue > this.slides().length - 1 ? 0 : nextValue;
    });
  }

  protected prev() {
    this.active.update((currentValue) => {
      const nextValue = currentValue - 1;
      return nextValue < 0 ? this.slides().length - 1 : nextValue;
    });
  }
}
