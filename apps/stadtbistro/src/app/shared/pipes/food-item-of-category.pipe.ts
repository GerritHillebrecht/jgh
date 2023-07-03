import { Pipe, PipeTransform } from '@angular/core';
import { FirestoreItem } from '../model/firestoreItem.model';
import { Food, FoodCategory } from '../model/food.model';

@Pipe({
  name: 'foodItemOfCategory',
  standalone: true,
})
export class FoodItemOfCategoryPipe implements PipeTransform {
  transform(
    items: FirestoreItem<Food>[] | undefined,
    category: FoodCategory['name']
  ): FirestoreItem<Food>[] {
    if (!items) {
      return [];
    }
    return items.filter((item) => item.category === category);
  }
}
