/* eslint-disable @nx/enforce-module-boundaries */
import { Component, OnInit, Signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import {
  Bowl,
  Food,
  Pizza,
} from 'apps/stadtbistro/src/app/shared/model/food.model';
import { FoodFetchService } from 'apps/stadtbistro/src/app/shared/data-access';
import { FirestoreItem } from 'apps/stadtbistro/src/app/shared/model/firestoreItem.model';

@Component({
  selector: 'sb-product-grid',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss'],
})
export class ProductGridComponent implements OnInit {
  private readonly foodService = inject(FoodFetchService);

  protected readonly pizzas: Signal<FirestoreItem<Pizza>[] | undefined>;
  protected readonly bowls: Signal<FirestoreItem<Bowl>[] | undefined>;

  constructor() {
    this.pizzas = this.foodService.pizzasAdmin;
    this.bowls = this.foodService.bowlsAdmin;
  }

  ngOnInit(): void {
    console.log('initted');
  }

  protected trackBy(index: number, foodItem: FirestoreItem<Food>): string {
    return foodItem.id;
  }
}
