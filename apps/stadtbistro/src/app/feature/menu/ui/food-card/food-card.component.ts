import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Food } from 'apps/stadtbistro/src/app/shared/model/food.model';
import { Store } from '@ngxs/store';
import { AddItemToCart } from 'apps/stadtbistro/src/app/core/store/shopping-cart';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCheese,
  faCow,
  faEgg,
  faFishFins,
  faHeart,
  faPepperHot,
  faRibbon,
  faSeedling,
  faShrimp,
  faTag,
  faTemperatureHigh,
  faWheatAwn,
} from '@fortawesome/free-solid-svg-icons';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'sb-food-card',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, MatTooltipModule],
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.scss'],
})
export class FoodCardComponent {
  @Input({ required: true }) food!: Food;
  private readonly store = inject(Store);

  protected readonly veganIcon = faSeedling;
  protected readonly glutenIcon = faWheatAwn;
  protected readonly fishIcon = faFishFins;
  protected readonly shrimIcon = faShrimp;
  protected readonly meatIcon = faCow;
  protected readonly heatIcon = faTemperatureHigh;
  protected readonly eggIcon = faEgg;
  protected readonly hotIcon = faPepperHot;
  protected readonly cheeseIcon = faCheese;
  protected readonly newIcon = faTag;
  protected readonly recommendationIcon = faRibbon;
  protected readonly dealIcon = faHeart;

  protected handleButtonclick(): void {
    this.store.dispatch(new AddItemToCart(this.food));
  }
}
