import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  QueryList,
  ViewChild,
  ViewChildren,
  effect,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { fromEvent } from 'rxjs';
import { foodCategories } from '../../../../shared/constants/constants';

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

  @ViewChildren('foodbarItem')
  foodbarItems?: QueryList<ElementRef<HTMLDivElement>>;

  @Output()
  selectIndex = new EventEmitter<number>();

  @Input() set activeIndex(index: number) {
    this._activeIndex.set(index);
    if (this.foodbarItems) {
      const ref = this.foodbarItems.toArray()[index];
      const { width } = ref.nativeElement.getBoundingClientRect();
      const left = ref.nativeElement.offsetLeft;

      this.distance.set(left);
      this.width.set(width);
    }
  }

  protected readonly _activeIndex = signal(0);

  private activeItemChangeEffect = effect(() => {
    const activeIndex = this._activeIndex();
    if (this.foodbarItems) {
      const ref = this.foodbarItems.toArray()[activeIndex];
      // ref.nativeElement.scrollIntoView();
    }
  });

  protected readonly foodCategories = signal(foodCategories);

  protected distance = signal(0);
  protected width = signal(100);
  protected overScrolled = signal(false);

  protected indexSelectHandler(index: number) {
    this.selectIndex.emit(index);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.foodbarItems) {
        const index = this._activeIndex();
        const element = this.foodbarItems.toArray()[index].nativeElement;
        const { width } = element.getBoundingClientRect();

        this.width.set(width);
        this.distance.set(element.offsetLeft);
      }
    }, 1);
    setTimeout(() => {
      fromEvent(window, 'scroll').subscribe(() => {
        if (!this.foodbarRef) return;
        this.overScrolled.set(
          this.foodbarRef.nativeElement.getBoundingClientRect().top <= 64
        );
      });
    }, 1);
  }
}
