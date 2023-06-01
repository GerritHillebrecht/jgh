import { Food } from '../../../shared/model/food.model';

export class AddItemToCart {
  static readonly type = '[Cart] Add Item To Cart';
  constructor(public item: Food) {}
}

export class RemoveItemFromCart {
  static readonly type = '[Cart] Remove Item From Cart';
  constructor(public item: Food) {}
}

export class ClearCart {
  static readonly type = '[Cart] Clear Cart';
}
