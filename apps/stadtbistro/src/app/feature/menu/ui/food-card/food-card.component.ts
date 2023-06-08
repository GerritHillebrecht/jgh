/* eslint-disable @nx/enforce-module-boundaries */
import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Food } from 'apps/stadtbistro/src/app/shared/model/food.model';
import { Store } from '@ngxs/store';
import { AddItemToCart } from 'apps/stadtbistro/src/app/core/store/shopping-cart';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBacon,
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
import { ToppingComponent } from '../food-item/food-item.component';
import { Topping } from 'apps/stadtbistro/src/app/shared/model/topping.model';
import { toppings } from '../../constants';

@Component({
  selector: 'sb-food-card',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatTooltipModule,
    ToppingComponent,
  ],
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
  protected readonly porkIcon = faBacon;
  protected readonly heatIcon = faTemperatureHigh;
  protected readonly eggIcon = faEgg;
  protected readonly hotIcon = faPepperHot;
  protected readonly cheeseIcon = faCheese;
  protected readonly newIcon = faTag;
  protected readonly recommendationIcon = faRibbon;
  protected readonly dealIcon = faHeart;

  protected readonly foodItems: Topping[] = toppings;

  protected handleButtonclick(): void {
    this.store.dispatch(new AddItemToCart(this.food));
  }
}
