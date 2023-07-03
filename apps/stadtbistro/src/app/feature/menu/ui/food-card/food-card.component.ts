/* eslint-disable @nx/enforce-module-boundaries */
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Food } from 'apps/stadtbistro/src/app/shared/model/food.model';
import { Store } from '@ngxs/store';
import { AddItemToCart } from 'apps/stadtbistro/src/app/core/store/shopping-cart';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBacon,
  faCheese,
  faCow,
  faDrumstickBite,
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
import { toppings } from '../../../../shared/constants';
import { faNutritionix } from '@fortawesome/free-brands-svg-icons';
import { FoodImageComponent } from 'apps/stadtbistro/src/app/shared/ui/cards/card-elements';
import { FirestoreItem } from 'apps/stadtbistro/src/app/shared/model/firestoreItem.model';
import { SortToppingPipe } from '../../pipes/sort-topping.pipe';

@Component({
  selector: 'sb-food-card',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatTooltipModule,
    ToppingComponent,
    FoodImageComponent,
    SortToppingPipe,
  ],
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.scss'],
})
export class FoodCardComponent implements OnInit, AfterViewInit {
  @Input({ required: true }) food!: FirestoreItem<Food>;
  private readonly store = inject(Store);

  @Output()
  intersects = new EventEmitter<FirestoreItem<Food>>();

  @ViewChild('foodCard')
  foodCard?: ElementRef<HTMLDivElement>;

  protected productImage: { filename: string; extension: string } | undefined;

  protected readonly veganIcon = faSeedling;
  protected readonly glutenIcon = faWheatAwn;
  protected readonly fishIcon = faFishFins;
  protected readonly shrimIcon = faShrimp;
  protected readonly meatIcon = faCow;
  protected readonly chickenIcon = faDrumstickBite;
  protected readonly nutsIcon = faNutritionix;
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

  ngOnInit(): void {
    if (!this.food.image || !this.food.image.includes('.')) return;

    const imageData = this.food.image.split('.');
    const extension = imageData.pop() as string;
    const filename = imageData.join('.');
    this.productImage = { filename, extension };
  }

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.intersects.emit(this.food);
        }
      });
    }, {
      threshold: 0.5,
    });

    if (this.foodCard) {
      observer.observe(this.foodCard.nativeElement);
    }
  }
}
