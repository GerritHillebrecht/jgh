/* eslint-disable @nx/enforce-module-boundaries */
import { Component, OnInit, Signal, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import {
  Food,
  FoodCategory,
} from 'apps/stadtbistro/src/app/shared/model/food.model';
import { FoodFetchService } from 'apps/stadtbistro/src/app/shared/data-access';
import { FirestoreItem } from 'apps/stadtbistro/src/app/shared/model/firestoreItem.model';
import { foodCategories } from '../../../../../shared/constants/constants';
import { FoodItemOfCategoryPipe } from 'apps/stadtbistro/src/app/shared/pipes/food-item-of-category.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { FoodMutateService } from 'apps/stadtbistro/src/app/shared/data-access/food/food.mutate.service';

@Component({
  selector: 'sb-product-grid',
  standalone: true,
  imports: [
    CommonModule,
    ProductCardComponent,
    FoodItemOfCategoryPipe,
    FontAwesomeModule,
  ],
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss'],
})
export class ProductGridComponent implements OnInit {
  private readonly foodService = inject(FoodFetchService);
  private readonly foodMutateService = inject(FoodMutateService);

  protected readonly foodItems: Signal<FirestoreItem<Food>[] | undefined>;
  protected readonly foodCategories = signal(foodCategories);

  protected readonly addIcon = faAdd;

  constructor() {
    this.foodItems = this.foodService.foodItemsAdmin;
  }

  ngOnInit(): void {
    console.log('initted');
  }

  addNewFoodItem(category: FoodCategory['name']): void {
    this.foodMutateService.addEmptyItem(category);
  }

  protected trackBy(index: number, foodItem: FirestoreItem<Food>): string {
    return foodItem.id;
  }
}
