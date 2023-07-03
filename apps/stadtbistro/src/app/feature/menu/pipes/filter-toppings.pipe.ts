import { Pipe, PipeTransform } from '@angular/core';
import { Topping } from '../../../shared/model/topping.model';
import { FoodCategory } from '../../../shared/model/food.model';

@Pipe({
  name: 'filterToppings',
  standalone: true,
})
export class FilterToppingsPipe implements PipeTransform {
  transform(toppings: Topping[], category: FoodCategory['name']): Topping[] {
    return toppings.filter((topping) => topping.category.includes(category));
  }
}
