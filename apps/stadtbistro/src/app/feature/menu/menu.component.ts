import {
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodCardComponent } from './ui/food-card/food-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import { LogoComponent } from '../../shared/ui/logo/logo.component';
import { FoodFetchService } from '../../shared/data-access';
import { FoodScrollProgressBarComponent } from './ui/food-scroll-progress-bar/food-scroll-progress-bar.component';
import { foodCategories } from '../../shared/constants/constants';
import { FoodItemOfCategoryPipe } from '../../shared/pipes/food-item-of-category.pipe';
import { Food } from '../../shared/model/food.model';
import { FirestoreItem } from '../../shared/model/firestoreItem.model';
import { toppings } from '../../shared/constants';
import { FilterToppingsPipe } from './pipes/filter-toppings.pipe';

@Component({
  selector: 'sb-menu',
  standalone: true,
  imports: [
    CommonModule,
    LogoComponent,
    FoodCardComponent,
    FontAwesomeModule,
    FoodScrollProgressBarComponent,
    FoodItemOfCategoryPipe,
    FilterToppingsPipe,
  ],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export default class MenuComponent {
  @ViewChildren('foodItemHeadline')
  foodItemHeadlines?: QueryList<ElementRef<Element>>;

  private readonly foodService = inject(FoodFetchService);
  protected readonly foodItems = this.foodService.foodItems;
  protected readonly foodCategories = signal(foodCategories);
  protected readonly toppings = signal(
    toppings.filter((topping) => topping.availableAsExtra)
  );

  protected readonly activeIndex = signal(0);

  protected readonly expandCircleIcon = faAnglesDown;

  protected handleSelectIndex(index: number) {
    this.activeIndex.set(index);
    this.foodItemHeadlines?.toArray()[index].nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  protected handleIntersects(food: FirestoreItem<Food>) {
    const categories = this.foodCategories();
    if (!categories) return;

    const index = categories.findIndex(
      (category) => category.name === food.category
    );

    this.activeIndex.set(index);
  }
}
