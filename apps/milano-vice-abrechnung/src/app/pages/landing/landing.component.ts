import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  OnInit,
  effect,
  inject,
  signal,
} from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import {
  DeliverectService,
  InputOptions,
} from '../../shared/data-access/deliverect/deliverect.service';
import { StatsRevenueComponent } from '../../shared/ui/stats/stats-revenue/stats-revenue.component';
import {
  StatsSummaryComponent,
  StatsSummaryData,
} from '../../shared/ui/stats/stats-summary/stats-summary.component';
import {
  TableDeliverectComponent,
  TableRow,
} from '../../shared/ui/table/table-deliverect';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { combineLatest } from 'rxjs';
import { Keyboard, Navigation, Pagination, Swiper } from 'swiper';
import { CostService } from '../../shared/service/cost.service';
import { NavbarComponent } from '../../shared/ui/navigation/navbar/navbar.component';
import { SubbarLandingComponent } from '../../shared/ui/navigation/subbar-landing/subbar-landing.component';
import { InvoiceListComponent } from '../../shared/ui/list/invoice-list/invoice-list.component';
import { ProgressBoxesComponent } from '../../shared/ui/progress/progress-boxes/progress-boxes.component';
import { DateSelectionService } from '../../shared/service/date-selection/date-selection.service';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  collectionGroup,
  deleteDoc,
  getDocs,
} from '@angular/fire/firestore';
import { DeliverectDataService } from '../../shared/service/deliverect-data.service';

@Component({
  selector: 'mva-landing',
  standalone: true,
  imports: [
    CommonModule,
    TableDeliverectComponent,
    InvoiceListComponent,
    MatTabsModule,
    ProgressBoxesComponent,
    StatsRevenueComponent,
    StatsSummaryComponent,
    NavbarComponent,
    SubbarLandingComponent,
    FontAwesomeModule,
  ],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export default class LandingComponent implements OnInit, AfterViewInit {
  private readonly dataAccess = inject(DeliverectService);
  private readonly costService = inject(CostService);
  private readonly firestore = inject(Firestore);
  protected readonly dateSelectionService = inject(DateSelectionService);
  protected readonly deliverectDataService = inject(DeliverectDataService);

  private readonly orderEffect = effect(async () => {
    this.dataSource = await this.deliverectDataService.tableRows();
  });

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

  protected readonly revenue = signal<{ [key: string]: number }>({});
  protected readonly discount = signal<{ [key: string]: number }>({});
  protected readonly costs = signal(0);
  protected readonly statsSummary = signal<StatsSummaryData>({
    revenueTotal: 0,
    discountTotal: 0,
    earningsTotal: 0,
    ratingsTotal: 0,
    ratingsAmount: 0,
    ratingsEarnings: 0,
    costsChoco: 0,
  });

  protected readonly fetchOptions: InputOptions = {
    courier: ['Lieferando', 'UberEats', 'Wolt'],
  };

  protected dataSource: TableRow[] = [];
  protected readonly displayedColumns: string[] = [
    'courier',
    'orderNumber',
    'orderDate',
    'payment',
    'price',
    'discount',
    'discountDeliverect',
    'sum',
    'difference',
  ];

  private swiper = new Swiper('.swiper', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      enabled: true,
    },
    keyboard: {
      onlyInViewport: true,
      enabled: true,
    },
    modules: [Navigation, Pagination, Keyboard],
  });

  protected revenues: any = {};
  protected discounts: any = {};

  ngOnInit(): void {
    // (async () => {
    //   const ref = collection(this.firestore, 'food-items');
    //   const querySnapshot = await getDocs(ref);
    //   querySnapshot.forEach((doc) => {
    //     const subRef = collection(
    //       this.firestore,
    //       'food-items',
    //       doc.id,
    //       'prices'
    //     );
    //     addDoc(subRef, {
    //       validFrom: new Date('2023-10-26T00:00:00.000Z'),
    //       plu: doc.data()['plu'],
    //       prices: {
    //         ...doc.data()['price'],
    //         16: doc.data()['price']['16'],
    //         7: doc.data()['price']['7'],
    //       },
    //     });
    //   });
    // })();

    this.dataAccess.fetchChannels().subscribe((data) => {
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

      const discounts = {
        lieferando:
          data.reduce((acc, value) => {
            return acc + (value.channel === 103 ? value.discountTotal : 0);
          }, 0) / 100,
        wolt:
          data.reduce((acc, value) => {
            return acc + (value.channel === 7 ? value.discountTotal : 0);
          }, 0) / 100,
        ubereats:
          data.reduce((acc, value) => {
            return acc + (value.channel === 16 ? value.discountTotal : 0);
          }, 0) / 100,
      };

      this.revenue.set(revenues);
      this.discount.set(discounts);
      const discountTotal =
        discounts.lieferando + discounts.wolt + discounts.ubereats;
      const revenueTotal =
        revenues.lieferando + revenues.wolt + revenues.ubereats - discountTotal;
      const earningsTotal =
        revenueTotal -
        discountTotal -
        this.costService.calculateTotalCosts(revenueTotal);
      const ratingsEarnings = revenueTotal * 0.03;
      this.statsSummary.update((prev) => ({
        ...prev,
        revenueTotal,
        discountTotal,
        earningsTotal,
        ratingsEarnings,
      }));

      this.revenues = revenues;
      this.discounts = discounts;
    });
  }

  ngAfterViewInit(): void {
    this.swiper.init();
  }
}
