import { Pipe, PipeTransform } from '@angular/core';
import { Topping } from '../../../shared/model/topping.model';

@Pipe({
  name: 'sortTopping',
  standalone: true,
})
export class SortToppingPipe implements PipeTransform {
  transform(toppings: string[]): string[] {
    return toppings.sort((a, b) => a.localeCompare(b));
  }
}
