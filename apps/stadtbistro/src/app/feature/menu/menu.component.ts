import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodCardComponent } from './ui/food-card/food-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import { LogoComponent } from '../../shared/ui/logo/logo.component';
import { HeroSliderComponent } from './ui/hero-slider/hero-slider.component';
import { FoodFetchService } from '../../shared/data-access';
import { ScrollService } from '../../core/services/scroll.service';
import { fromEvent } from 'rxjs';
import { FoodScrollProgressBarComponent } from './ui/food-scroll-progress-bar/food-scroll-progress-bar.component';

@Component({
  selector: 'sb-menu',
  standalone: true,
  imports: [
    CommonModule,
    LogoComponent,
    FoodCardComponent,
    FontAwesomeModule,
    HeroSliderComponent,
    FoodScrollProgressBarComponent,
  ],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export default class MenuComponent implements AfterViewInit {
  @ViewChild('foodBar')
  foodbarRef?: ElementRef<HTMLDivElement>;

  // private readonly scrollEffect = effect(
  //   () => {
  //     const scrollDistance = this.scrollService.scrollDistance();

  //     if (!this.foodbarRef) return;

  //     const scrollTop =
  //       this.foodbarRef.nativeElement.getBoundingClientRect().top;
  //     console.log('scrollTop', scrollTop);

  //     this.overScrolled.set(scrollDistance > scrollTop);
  //   },
  //   { allowSignalWrites: true }
  // );

  protected overScrolled = signal(false);

  private readonly foodService = inject(FoodFetchService);
  private readonly scrollService = inject(ScrollService);

  protected readonly pizzas = this.foodService.pizzas;
  protected readonly bowls = this.foodService.bowls;

  protected readonly expandCircleIcon = faAnglesDown;

  ngAfterViewInit(): void {
    fromEvent(window, 'scroll').subscribe(() => {
      if (!this.foodbarRef) return;
      this.overScrolled.set(
        this.foodbarRef.nativeElement.getBoundingClientRect().top <= 64
      );
    });
  }
}
