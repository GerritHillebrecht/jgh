import { Pipe, PipeTransform } from '@angular/core';
import { Food, FoodCategory } from '../../../shared/model/food.model';
import { FirestoreItem } from '../../../shared/model/firestoreItem.model';
import { Topping } from '../../../shared/model/topping.model';

@Pipe({
  name: 'toppingOfCategory',
  standalone: true,
})
export class ToppingOfCategoryPipe implements PipeTransform {
  transform(toppings: Topping[], category: FoodCategory['name']): Topping[] {
    return toppings
      .filter((topping) => topping.category.includes(category))
      .sort((a, b) => a.name.localeCompare(b.name));
  }
}
