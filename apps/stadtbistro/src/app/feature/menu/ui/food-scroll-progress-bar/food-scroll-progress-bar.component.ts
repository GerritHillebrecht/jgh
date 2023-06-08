import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'sb-food-scroll-progress-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './food-scroll-progress-bar.component.html',
  styleUrls: ['./food-scroll-progress-bar.component.scss'],
})
export class FoodScrollProgressBarComponent implements AfterViewInit {
  @ViewChild('foodbar')
  foodbarRef?: ElementRef<HTMLDivElement>;

  protected overScrolled = signal(false);

  ngAfterViewInit(): void {
    fromEvent(window, 'scroll').subscribe(() => {
      if (!this.foodbarRef) return;
      this.overScrolled.set(
        this.foodbarRef.nativeElement.getBoundingClientRect().top <= 64
      );
    });
  }
}
