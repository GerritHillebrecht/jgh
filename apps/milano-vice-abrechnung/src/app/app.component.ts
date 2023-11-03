import {
  AfterViewInit,
  Component,
  ViewChild,
  computed,
  inject,
  signal,
} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'mva-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  http = inject(HttpClient);

  protected readonly tableHeaders = signal<string[]>([]);
  protected readonly tableRows = signal<any[]>([]);
  protected readonly totalDiscounts = signal<number>(
    77.92 + 131.66 + 113.95 + 143.05 + 79.08
  );
  protected readonly totalRevenue = computed(() =>
    this.tableRows().reduce((acc, value) => {
      return acc + Number(value.Totalamount);
    }, 0)
  );

  protected readonly totalRevenuePlusDiscounts = computed(
    () => this.totalRevenue() + this.totalDiscounts()
  );

  protected readonly amountOrders = computed(() => {
    return this.tableRows().length;
  });
  protected dataSource = new MatTableDataSource();

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    const startDate = `2023-08-01T22:00:00.000Z`;
    const endDate = `2023-08-31T21:59:59.999Z`;
    const where = `{%22channel%22:{%22$in%22:[103]},%22account%22:{%22$in%22:[%2261605a08fd8070d72f202e21%22]},%22pickupTime%22:{%22$gt%22:%22${startDate}%22,%22$lt%22:%22${endDate}%22},%22_created%22:{%22$gt%22:%22${startDate}%22,%22$lt%22:%22${endDate}%22}}`;
    const where2 = `{%22channel%22:{%22$in%22:[16,7,103]},%22account%22:{%22$in%22:[%2261605a08fd8070d72f202e21%22]},%22pickupTime%22:{%22$gt%22:%222023-07-31T22:00:00.000Z%22,%22$lt%22:%222023-08-31T21:59:59.999Z%22}`;
    const page = `1`;
    const max_results = 1000;

    this.http
      .get(
        `https://api.deliverect.com/orders?page=${page}&cursor=new&where=${where}&&max_results=${500}&useFastCount=true`,
        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlJUWkVNakV5TVVZeVJqazJPRGs1TkRjMVF6QXpNMFE1UTBFek1UazNPRFZGTkVJeFF6YzFRZyJ9.eyJpc3MiOiJodHRwczovL2xvZ2luLmRlbGl2ZXJlY3QuY29tLyIsInN1YiI6ImF1dGgwfDY0Y2I4ZDhiYTY1NDEyMzFjZTkwYTc0YSIsImF1ZCI6WyJodHRwczovL2FwaS5kZWxpdmVyZWN0LmNvbSIsImh0dHBzOi8vZGVsaXZlcmVjdC5ldS5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjk1MTk4MTM1LCJleHAiOjE2OTUyODQ1MzUsImF6cCI6ImdteG5aSFRVdkdUTzk3U2dLbXJSRTdPYl9jQnJjYWk0Iiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCBvZmZsaW5lX2FjY2VzcyJ9.KdDDKRyrhlgQUCNaRmhlUoAP3AlaqlJCY8r57yHp_Nl6uULyJThc5dLQZl5FiDAmGNGCRE0C0s2kz_4JN3usKvlu_poiSUuCwPbjD6ZX5eiSsCO0_pOM13leLBogtTaWKZI4aN7t70VO9pkNTtmWzgGyihDwTM8QdMv-c90UbuVugOmGhkN5kbIb8ozawbxHFHhott14qaDVkbdWYV8NiDiF05PyA5Y4a3LSjqFnyxK3broVBfu_Awm4t2mwd9fjN0DtMGuJoNwOl88e2cuJIFg-SKD21jSwKSeo_u1d9EmwTPObQKY6Pox-XxiVej8AvGiflCXHtDq_Jr8dhzuNIg',
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
          },
        }
      )
      // .subscribe((data) => {
      //   console.log('response', data);
      //   const orders = (data as any)._items;
      //   const updatedOrders = orders.map((order: any) => {
      //     return {
      //       // ...order,
      //       Order: order.channelOrderDisplayId,
      //       Date: new Date(order.pickupTime),
      //       Postcode: order.deliveryAddress.postalCode,
      //       Paidonline: order.orderIsAlreadyPaid,
      //       Pickup: 'no',
      //       Totalamount: (order.payment.amount / 100).toFixed(
      //         order.decimalDigits
      //       ),
      //     };
      //   });
      //   this.tableHeaders.update(() => Object.keys(updatedOrders[0]));
      //   this.tableRows.update(() => updatedOrders);
      //   this.dataSource.data = updatedOrders;
      // });
  }

  inputChange(event: Event) {
    const csvSeparator = ';';
    const files = (event.target as HTMLInputElement).files;

    if (files && files.length > 0) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target?.result as string;
        const lines = text.split('\n').filter((line) => line.length > 0);
        const header = lines.shift();
        const headerColumns = header
          ?.split(csvSeparator)
          .map((item) =>
            item.replace('"', '').replace('"', '').replace(' ', '').trim()
          );

        if (!headerColumns) return;
        this.tableHeaders.update(() => headerColumns);

        if (headerColumns && headerColumns.length > 0) {
          const updatedLines = lines.map((line) => {
            const lineItems = line.split(csvSeparator);
            const updatedLineItem = lineItems
              .map((item, index) => ({
                [headerColumns[index]]: item.replace('"', '').replace('"', ''),
              }))
              .reduce((item, acc) => ({ ...acc, ...item }), {});
            return updatedLineItem;
          });
          this.tableRows.update(() => updatedLines);
          this.dataSource.data = updatedLines;
        }
      };
      reader.readAsText(files[0]);
    }
  }
}
