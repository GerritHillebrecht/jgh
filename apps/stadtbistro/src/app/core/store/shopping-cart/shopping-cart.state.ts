import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { Food } from '../../../shared/model/food.model';
import {
  AddItemToCart,
  ClearCart,
  RemoveItemFromCart,
} from './shopping-cart.actions';

export type CartItem<T> = T & { quantity: number };

export interface CartStateModel {
  items: CartItem<Food>[];
}

@State<CartStateModel>({
  name: 'cart',
  defaults: {
    items: [],
  },
})
@Injectable()
export class ShoppingCartState {
  @Action(AddItemToCart)
  addItemToCart(
    { getState, patchState }: StateContext<CartStateModel>,
    { item }: AddItemToCart
  ) {
    const items = [...getState().items];
    const existingItem = items.find((i) => i.name === item.name);

    if (existingItem) {
      const index = items.indexOf(existingItem);
      items[index] = { ...existingItem, quantity: existingItem.quantity + 1 };
      return patchState({
        items,
      });
    }

    return patchState({
      items: [...items, { ...item, quantity: 1 }],
    });
  }

  @Action(RemoveItemFromCart)
  removeItemFromCart(
    { getState, patchState }: StateContext<CartStateModel>,
    { item }: RemoveItemFromCart
  ) {
    const items = [...getState().items];
    const existingItem = items.find((i) => i.name === item.name);

    if (existingItem) {
      if (existingItem.quantity === 1) {
        return patchState({
          items: items.filter((i) => i.name !== item.name),
        });
      }

      const index = items.indexOf(existingItem);
      items[index] = { ...existingItem, quantity: existingItem.quantity - 1 };

      return patchState({
        items,
      });
    }
    
    return null;
  }

  @Action(ClearCart)
  clearCart({ patchState }: StateContext<CartStateModel>) {
    return patchState({
      items: [],
    });
  }
}
