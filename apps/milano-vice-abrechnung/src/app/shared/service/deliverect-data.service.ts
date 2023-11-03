import { Injectable, computed, inject } from '@angular/core';
import { DateSelectionService } from './date-selection/date-selection.service';
import { Observable, combineLatest, firstValueFrom } from 'rxjs';
import {
  Firestore,
  collection,
  collectionData,
  collectionGroup,
} from '@angular/fire/firestore';
import { DeliverectService } from '../data-access/deliverect/deliverect.service';
import * as dayjs from 'dayjs';
import { DeliverectItem } from '../data-access/deliverect/deliverect.fetch.model';
import { TableRow } from '../ui/table/table-deliverect';

export interface Order {
  courier: {
    id: number;
    name: string;
  };
  orderDate: string;
  orderNumberDeliverect: string;
  orderNumberDisplayed: string;
  price: number;
  payment: number;
  prices: {
    foodRevenue: number;
    drinkRevenue: number;
  };
  discount: number;
  discountDeliverect: number;
}

interface ItemData {
  name: string;
  plu: string;
  price: {
    [x: number]: number;
  };
  type: 'food' | 'drink';
  vat: number;
}

@Injectable({
  providedIn: 'root',
})
export class DeliverectDataService {
  private readonly dateSelection = inject(DateSelectionService);
  private readonly dataAccess = inject(DeliverectService);
  private readonly firestore = inject(Firestore);

  private readonly couries: { [x: number]: string } = {
    103: 'Lieferando',
    16: 'Wolt',
    7: 'Uber Eats',
  };

  protected readonly courierLogo: { [x: number]: string } = {
    103: 'assets/images/delivery/lieferando.png',
    16: 'assets/images/delivery/wolt.png',
    7: 'assets/images/delivery/uber_eats.png',
  };

  private readonly itemCollectionRef = collection(this.firestore, 'food-items');
  private readonly priceCollectionRef = collectionGroup(
    this.firestore,
    'prices'
  );

  readonly orders = computed<Promise<Order[]>>(async () => {
    const startDate = dayjs(this.dateSelection.selectedTimePeriod().from)
      .startOf('day')
      .toISOString();

    const endDate = dayjs(this.dateSelection.selectedTimePeriod().to)
      .endOf('day')
      .toISOString();

    const [orders, itemData, prices] = await firstValueFrom(
      combineLatest([
        this.dataAccess.fetchOrders({ startDate, endDate }),
        collectionData(this.itemCollectionRef) as Observable<ItemData[]>,
        collectionData(this.priceCollectionRef),
      ])
    );

    console.log({ prices });

    return orders._items.map((order) => {
      const { foodRevenue, drinkRevenue } = this.getPriceOfOrder(
        order,
        itemData
      );

      const orderPrice = foodRevenue + drinkRevenue;
      const orderDiscount = orderPrice - order.payment.amount / 100;

      const createdOrder: Order = {
        price: orderPrice,
        payment: order.payment.amount / 100,
        prices: {
          foodRevenue,
          drinkRevenue,
        },
        discount: orderDiscount,
        discountDeliverect: order.discountTotal / 100,
        orderNumberDisplayed: order.channelOrderDisplayId,
        orderNumberDeliverect: order.channelOrderId,
        orderDate: order.pickupTime,
        courier: {
          id: Number(order.channel),
          name: this.couries[order.channel],
        },
      };

      return createdOrder;
    });
  });

  readonly tableRows = computed<Promise<TableRow[]>>(async () => {
    const orders = await this.orders();
    return orders.map((order) => {
      return {
        orderNumber: order.orderNumberDisplayed,
        orderDate: order.orderDate,
        price: order.price,
        payment: order.payment,
        discount: order.discount,
        discountDeliverect: order.discountDeliverect,
        sum: order.payment + order.discount,
        difference: order.price - (order.payment - order.discountDeliverect),
        courier: { ...order.courier, logo: this.courierLogo[order.courier.id] },
      } as TableRow;
    });
  });

  private getPriceOfOrder(
    order: DeliverectItem,
    itemData: ItemData[]
  ): { foodRevenue: number; drinkRevenue: number } {
    const orderPrice = order.items.reduce(
      (acc, orderItem) => {
        const priceItem = itemData.find(
          (item) => item['plu'] === orderItem.plu
        );
        const quantity = orderItem.quantity;

        if (!priceItem) {
          console.log('no price item', orderItem.plu, orderItem.name);
          return { foodRevenue: 0, drinkRevenue: 0 };
        }

        const itemPrice = {
          food: priceItem.type === 'food' ? priceItem.price[order.channel] : 0,
          drink:
            priceItem.type === 'drink' ? priceItem.price[order.channel] : 0,
        };

        const subItemsPrice = orderItem.subItems.reduce(
          (acc, subItem) => {
            const subItemPriceItem = itemData.find(
              (item) => item['plu'] === subItem.plu
            );

            const { foodRevenue, drinkRevenue } = acc;

            if (!subItemPriceItem) {
              console.log('no price item', {
                courier: this.couries[order.channel],
                plu: subItem.plu,
                name: subItem.name,
                price: subItem.price / 100,
              });
              return { foodRevenue, drinkRevenue };
            }
            const { price, type } = subItemPriceItem;
            const subItemPrice = {
              foodRevenue:
                type === 'food' ? price[order.channel] * subItem.quantity : 0,
              drinkRevenue:
                type === 'drink' ? price[order.channel] * subItem.quantity : 0,
            };

            return {
              foodRevenue: foodRevenue + subItemPrice.foodRevenue,
              drinkRevenue: drinkRevenue + subItemPrice.drinkRevenue,
            };
          },
          { foodRevenue: 0, drinkRevenue: 0 }
        );

        const { foodRevenue, drinkRevenue } = acc;
        return {
          foodRevenue:
            foodRevenue +
            quantity * (itemPrice.food + subItemsPrice.foodRevenue),
          drinkRevenue:
            drinkRevenue +
            quantity * (itemPrice.drink + subItemsPrice.drinkRevenue),
        };
      },
      { foodRevenue: 0, drinkRevenue: 0 }
    );

    return orderPrice;
  }
}
