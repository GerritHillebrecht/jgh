import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Food } from '../../../model/food.model';
import { CartStateModel } from 'apps/stadtbistro/src/app/core/store/shopping-cart';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { toSignal } from '@angular/core/rxjs-interop';
import { CartItem } from 'apps/stadtbistro/src/app/core/store/shopping-cart/shopping-cart.state';
import {
  AddItemToCart,
  ClearCart,
  RemoveItemFromCart,
} from 'apps/stadtbistro/src/app/core/store/shopping-cart/shopping-cart.actions';

@Component({
  selector: 'sb-shopping-cart',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatMenuModule,
  ],
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent {
  @Select(({ cart }: { cart: CartStateModel }) => cart.items)
  items$!: Observable<CartItem<Food>[]>;

  private readonly store = inject(Store);

  private readonly signalItems = toSignal(this.items$);
  protected readonly count = computed(() => {
    const count = this.signalItems()!.reduce(
      (acc, curr) => acc + curr.quantity,
      0
    );

    return count;
  });
  protected readonly total = computed(() => {
    const sum = this.signalItems()!.reduce(
      (acc, curr) => acc + curr.price * curr.quantity,
      0
    );

    return `${sum.toFixed(2)} €`;
  });

  protected addItem(food: Food, event: any): void {
    event.stopPropagation();
    this.store.dispatch(new AddItemToCart(food));
  }

  protected removeItem(food: Food, event: any): void {
    event.stopPropagation();
    this.store.dispatch(new RemoveItemFromCart(food));
  }

  protected clearCart(): void {
    this.store.dispatch(new ClearCart());
  }
}
