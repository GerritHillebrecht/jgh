import { Pipe, PipeTransform } from '@angular/core';
import { Topping } from '../../../shared/model/topping.model';

@Pipe({
  name: 'toppingCategory',
  standalone: true,
})
export class ToppingCategoryPipe implements PipeTransform {
  transform(
    toppings: Topping[],
    toppingCategory: Topping['toppingCategory']
  ): Topping[] {
    return toppings.filter((item) => item.toppingCategory === toppingCategory);
  }
}
