import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  QueryList,
  ViewChildren,
  computed,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { DeliverectService } from '../../../data-access/deliverect/deliverect.service';
import { DateSelectionService } from '../../../service/date-selection/date-selection.service';

import * as dayjs from 'dayjs';

type DeliverService = 'Lieferando' | 'Wolt' | 'UberEats' | 'Foodora' | string;
type ServiceDetail = {
  service: DeliverService;
  serviceNo?: number;
  amount: number;
  orderAmount: number;
  orders?: any[];
};

export interface InvoiceData {
  revenue: {
    foods: {
      total: number;
      detailed: ServiceDetail[];
    };
    drinks: {
      total: number;
      detailed: ServiceDetail[];
    };
  };
  discounts: {
    total: number;
    detailed: ServiceDetail[];
  };
  cancelledOrders: {
    total: number;
    detailed: ServiceDetail[];
  };
  vat: () => {
    total: number;
    detailed: {
      sevenPercent: number;
      nineteenPercent: number;
    };
  };
  netRevenue: () => number;
  franchiseCosts: () => number;
  ownerEarnings: () => number;
  onlinePaymentCosts: () => {
    total: number;
    detailed: ServiceDetail[];
  };

  bonusForRating: () => number;

  refundsOnOrders: {
    total: number;
    detailed: ServiceDetail[];
  };

  refundForOwnDelivery: {
    total: number;
    detailed: ServiceDetail[];
  };

  refundForBadQuality: number;

  creditNote: () => number;
  productOrderCost: number;
  owedVAT: () => {
    total: number;
    detailed: {
      revenue: number;
      refundsDelivery: number;
      refundsOrders: number;
      orderVAT: number;
    };
  };
  payout: () => number;
}

@Component({
  selector: 'mva-invoice-list',
  standalone: true,
  imports: [CommonModule, MatDividerModule, MatExpansionModule, MatIconModule],
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss'],
})
export class InvoiceListComponent implements OnInit, AfterViewInit {
  @ViewChildren(MatAccordion) accordion!: QueryList<MatAccordion>;

  private readonly dataAccess = inject(DeliverectService);
  private readonly dateSelection = inject(DateSelectionService);

  private readonly couries: { [x: number]: string } = {
    103: 'Lieferando',
    16: 'Wolt',
    7: 'Uber Eats',
  };

  protected readonly revenue = signal<InvoiceData['revenue']>({
    foods: {
      total: 0,
      detailed: [
        {
          service: 'Lieferando',
          amount: 0,
          orderAmount: 0,
        },
        {
          service: 'UberEats',
          amount: 0,
          orderAmount: 0,
        },
        {
          service: 'Wolt',
          amount: 0,
          orderAmount: 0,
        },
      ],
    },
    drinks: {
      total: 0,
      detailed: [
        {
          service: 'Lieferando',
          amount: 0,
          orderAmount: 0,
        },
        {
          service: 'UberEats',
          amount: 0,
          orderAmount: 0,
        },
        {
          service: 'Wolt',
          amount: 0,
          orderAmount: 0,
        },
      ],
    },
  });

  protected readonly discounts = signal<InvoiceData['discounts']>({
    total: 0,
    detailed: [
      { service: 'Lieferando', amount: 0, orderAmount: 20 },
      { service: 'UberEats', amount: 0, orderAmount: 10 },
      { service: 'Wolt', amount: 0, orderAmount: 10 },
    ],
  });

  protected readonly cancelledOrders = signal<InvoiceData['cancelledOrders']>({
    total: 0,
    detailed: [
      { service: 'Lieferando', amount: 0, orderAmount: 0 },
      { service: 'UberEats', amount: 0, orderAmount: 0 },
      { service: 'Wolt', amount: 0, orderAmount: 0 },
    ],
  });

  protected readonly vat = computed(() => {
    return {
      total:
        this.revenue().foods.total * 0.07 + this.revenue().drinks.total * 0.19,
      detailed: {
        sevenPercent: this.revenue().foods.total * 0.07,
        nineteenPercent: this.revenue().drinks.total * 0.19,
      },
    };
  });

  protected readonly netRevenue = computed(() => {
    return (
      this.revenue().foods.total +
      this.revenue().drinks.total +
      this.discounts().total -
      this.cancelledOrders().total -
      this.vat().total
    );
  });

  protected readonly franchiseCosts = computed(() => {
    return this.netRevenue() * 0.48;
  });

  protected readonly ownerEarnings = computed(() => {
    return this.netRevenue() - this.franchiseCosts();
  });

  protected readonly onlinePaymentCosts = computed(() => {
    return {
      total: (this.revenue().foods.total + this.revenue().drinks.total) * 0.02,
      detailed: this.revenue().foods.detailed.map((service, index) => {
        return {
          service: service.service,
          amount:
            (service.amount + this.revenue().drinks.detailed[index].amount) *
            0.02,
          orders: service.orderAmount,
        };
      }),
    };
  });

  protected readonly bonusForRating = computed(() => {
    return (
      (this.revenue().foods.total +
        this.revenue().drinks.total +
        this.discounts().total -
        this.cancelledOrders().total) *
      0.03
    );
  });

  protected readonly refundsOnOrders = signal<InvoiceData['refundsOnOrders']>({
    // total: 103.59,
    // detailed: [
    //   { service: 'Lieferando', amount: 103.59, orderAmount: 6 },
    //   { service: 'UberEats', amount: 0, orderAmount: 0 },
    //   { service: 'Wolt', amount: 0, orderAmount: 0 },
    // ],
    total: 0,
    detailed: [
      { service: 'Lieferando', amount: 0, orderAmount: 0 },
      { service: 'UberEats', amount: 0, orderAmount: 0 },
      { service: 'Wolt', amount: 0, orderAmount: 0 },
    ],
  });

  protected readonly refundForBadQuality =
    signal<InvoiceData['refundForBadQuality']>(0);

  protected readonly refundForOwnDelivery = signal<
    InvoiceData['refundForOwnDelivery']
  >({
    // total: 142.44,
    // detailed: [
    //   { service: 'Lieferando', amount: 92.56, orderAmount: 5 },
    //   { service: 'UberEats', amount: 25, orderAmount: 2 },
    //   { service: 'Wolt', amount: 25, orderAmount: 2 },
    // ],
    total: 0,
    detailed: [
      { service: 'Lieferando', amount: 0, orderAmount: 0 },
      { service: 'UberEats', amount: 0, orderAmount: 0 },
      { service: 'Wolt', amount: 0, orderAmount: 0 },
    ],
  });

  protected readonly creditNote = computed(() => {
    return (
      this.ownerEarnings() -
      this.onlinePaymentCosts().total +
      this.bonusForRating() +
      this.refundsOnOrders().total +
      this.refundForBadQuality() +
      this.refundForOwnDelivery().total
    );
  });

  protected readonly productOrderCost =
    signal<InvoiceData['productOrderCost']>(0);

  protected readonly owedVAT = computed(() => {
    const vatFromRevenue = this.vat().total * 0.52;

    // TO DO: Calculate VAT from refunds seperated by food and drinks
    const vatFromOwnDelivery = this.refundForOwnDelivery().total * 0.19;

    // TO DO: Calculate VAT from refunds seperated by food and drinks
    const vatFromRefundsOnOrders = this.refundsOnOrders().total * 0.19;
    const orderVAT = this.productOrderCost() * 0.07;

    const totalVAT =
      vatFromRevenue + vatFromOwnDelivery + vatFromRefundsOnOrders;

    return {
      total: totalVAT,
      detailed: {
        revenue: vatFromRevenue,
        refundsDelivery: vatFromOwnDelivery,
        refundsOrders: vatFromRefundsOnOrders,
        orderVAT,
      },
    };
  });

  protected readonly payout = computed(() => {
    return this.creditNote() - this.productOrderCost() + this.owedVAT().total;
  });
  // startDate: `2023-08-01T22:00:00.000Z`,
  // endDate: `2023-08-31T21:59:59.999Z`,

  ngOnInit(): void {
    const startDate = dayjs(this.dateSelection.selectedTimePeriod().from)
      .startOf('day')
      .format('YYYYMMDD');

    const endDate = dayjs(
      this.dateSelection.selectedTimePeriod().to.toISOString()
    )
      .endOf('day')
      .format('YYYYMMDD');

    const startDateOrders = dayjs(this.dateSelection.selectedTimePeriod().from)
      .startOf('day')
      .toISOString();
    const endDateOrders = dayjs(this.dateSelection.selectedTimePeriod().to)
      .endOf('day')
      .toISOString();

    // const startDateOrders = dayjs(this.dateSelection.selectedTimePeriod().from)
    //   .date(17)
    //   .month(8)
    //   .startOf('day')
    //   .toISOString();
    // const endDateOrders = dayjs(this.dateSelection.selectedTimePeriod().to)
    //   .date(17)
    //   .month(8)
    //   .endOf('day')
    //   .toISOString();

    this.dataAccess
      .fetchOrders({
        startDate: startDateOrders,
        endDate: endDateOrders,
      })
      .subscribe((res) => {
        const { _items: orders } = res;

        const data: {
          revenue: InvoiceData['revenue']['foods'];
          discount: InvoiceData['discounts'];
        } = orders.reduce(
          (acc, value) => {
            const price =
              (Number(value.payment.amount) - Number(value.deliveryCost)) / 100;
            const discount = (Number(value.discountTotal) / 100) * -1;

            const totalRevenue = acc.revenue.total + price;
            const totalDiscount = acc.discount.total + discount;

            const serviceMatch = acc.revenue.detailed.find(
              (service) => service.serviceNo === value.channel
            );

            const discountMatch = acc.discount.detailed.find(
              (service) => service.serviceNo === value.channel
            );

            const serviceRevenvue: ServiceDetail =
              serviceMatch !== undefined
                ? {
                    ...serviceMatch,
                    amount: serviceMatch.amount + price,
                    orderAmount: serviceMatch.orderAmount + 1,
                    orders: [...(serviceMatch.orders || []), value],
                  }
                : {
                    service: this.couries[value.channel],
                    serviceNo: value.channel,
                    amount: price,
                    orderAmount: 1,
                    orders: [value],
                  };

            const detailedRevenue: InvoiceData['revenue']['foods']['detailed'] =
              [
                ...acc.revenue.detailed.filter(
                  (service) => service.serviceNo !== value.channel
                ),
                serviceRevenvue,
              ];

            const serviceDiscount: ServiceDetail =
              discountMatch !== undefined
                ? {
                    ...discountMatch,
                    amount: discountMatch.amount + discount,
                    orderAmount:
                      discountMatch.orderAmount + discount !== 0 ? 1 : 0,
                    orders: [...(discountMatch.orders || []), value],
                  }
                : {
                    service: this.couries[value.channel],
                    serviceNo: value.channel,
                    amount: discount,
                    orderAmount: 1,
                    orders: [value],
                  };

            const detailedDiscount: InvoiceData['discounts']['detailed'] = [
              ...acc.discount.detailed.filter(
                (service) => service.serviceNo !== value.channel
              ),
              serviceDiscount,
            ];

            return {
              revenue: {
                ...acc.revenue,
                total: totalRevenue,
                detailed: detailedRevenue,
              },
              discount: { total: totalDiscount, detailed: detailedDiscount },
            };
          },
          {
            revenue: {
              total: 0,
              detailed: [],
            } as InvoiceData['revenue']['foods'],
            discount: {
              total: 0,
              detailed: [],
            } as InvoiceData['discounts'],
          }
        );
        this.revenue.update((value) => ({
          ...value,
          foods: data.revenue,
        }));

        this.discounts.update((value) => ({
          ...value,
          total: data.discount.total,
          detailed: data.discount.detailed,
        }));
      });

    this.dataAccess
      .fetchChannels({
        startDate,
        endDate,
      })
      .subscribe((data) => {
        const revenues = {
          lieferando:
            data.reduce((acc, value) => {
              return acc + (value.channel === 103 ? value.revenue : 0);
            }, 0) / 100,
          wolt:
            data.reduce((acc, value) => {
              return acc + (value.channel === 7 ? value.revenue : 0);
            }, 0) / 100,
          ubereats:
            data.reduce((acc, value) => {
              return acc + (value.channel === 16 ? value.revenue : 0);
            }, 0) / 100,
        };

        const totalRevenue = Object.values(revenues).reduce(
          (acc, value) => acc + value,
          0
        );

        const discounts = {
          lieferando:
            data.reduce((acc, value) => {
              return (
                acc + (value.channel === 103 ? value.discountTotal * -1 : 0)
              );
            }, 0) / 100,
          wolt:
            data.reduce((acc, value) => {
              return acc + (value.channel === 7 ? value.discountTotal * -1 : 0);
            }, 0) / 100,
          ubereats:
            data.reduce((acc, value) => {
              return (
                acc + (value.channel === 16 ? value.discountTotal * -1 : 0)
              );
            }, 0) / 100,
        };

        const discountTotal =
          discounts.lieferando + discounts.wolt + discounts.ubereats;

        // this.revenue.update(() => ({
        //   foods: {
        //     total: totalRevenue,
        //     detailed: [
        //       {
        //         service: 'Lieferando',
        //         amount: revenues.lieferando,
        //         orderAmount: 0,
        //       },
        //       {
        //         service: 'UberEats',
        //         amount: revenues.ubereats,
        //         orderAmount: 0,
        //       },
        //       { service: 'Wolt', amount: revenues.wolt, orderAmount: 0 },
        //     ],
        //   },
        //   drinks: {
        //     total: 0,
        //     detailed: [
        //       { service: 'Lieferando', amount: 0, orderAmount: 0 },
        //       { service: 'UberEats', amount: 0, orderAmount: 0 },
        //       { service: 'Wolt', amount: 0, orderAmount: 0 },
        //     ],
        //   },
        // }));

        // this.discounts.update(() => ({
        //   total: discountTotal,
        //   detailed: [
        //     {
        //       service: 'Lieferando',
        //       amount: discounts.lieferando,
        //       orderAmount: 0,
        //     },
        //     { service: 'UberEats', amount: discounts.ubereats, orderAmount: 0 },
        //     { service: 'Wolt', amount: discounts.wolt, orderAmount: 0 },
        //   ],
        // }));
      });
  }

  ngAfterViewInit(): void {
    console.log('innitted');
  }

  openAll(): void {
    this.accordion.forEach((acc) => acc.openAll());
  }

  closeAll(): void {
    this.accordion.forEach((acc) => acc.closeAll());
  }
}
