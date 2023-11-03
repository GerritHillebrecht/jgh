import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import {
  DeliverectChannelResponse,
  DeliverectResponse,
} from './deliverect.fetch.model';

interface DeliverectFetchOptions {
  bearer: string;
  page: number;
  max_results: number;
  startDate: string;
  endDate: string;
  courier: ('Lieferando' | 'UberEats' | 'Wolt')[];
}

export type InputOptions = Partial<
  Omit<DeliverectFetchOptions, 'path' | 'where'>
>;

@Injectable({
  providedIn: 'root',
})
export class DeliverectService {
  private readonly httpClient = inject(HttpClient);
  private readonly couries: { [x: string]: number } = {
    Lieferando: 103,
    Wolt: 16,
    UberEats: 7,
  };

  private readonly defaults: DeliverectFetchOptions = {
    bearer:
      'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlJUWkVNakV5TVVZeVJqazJPRGs1TkRjMVF6QXpNMFE1UTBFek1UazNPRFZGTkVJeFF6YzFRZyJ9.eyJpc3MiOiJodHRwczovL2xvZ2luLmRlbGl2ZXJlY3QuY29tLyIsInN1YiI6ImF1dGgwfDY0Y2I4ZDhiYTY1NDEyMzFjZTkwYTc0YSIsImF1ZCI6WyJodHRwczovL2FwaS5kZWxpdmVyZWN0LmNvbSIsImh0dHBzOi8vZGVsaXZlcmVjdC5ldS5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjk4MzM3OTMzLCJleHAiOjE2OTg0MjQzMzMsImF6cCI6ImdteG5aSFRVdkdUTzk3U2dLbXJSRTdPYl9jQnJjYWk0Iiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCBvZmZsaW5lX2FjY2VzcyJ9.VcgujF_lCyIhuZa6wLbMA7sdaW-tE8K7qcYjhq1JL0qDqfh-TFwf7e_OsMIL1lrxWqEUxOqJ57keOjT9Fb0gOesBIneMsNxomGFmIJFBqOrm5B2oGCFJlKsE60g-qaY5oLWacFJX_mwTmyedll5CrLzz-SbMAEE6NDFaK-ni0smTbUyVKffsgrGS5jpCkI-gdaUF1z_F9HtWAlTZboWI2CDsiroLWY_TPqV58YjjRl6IwdvsqiZO7aB0kinN1XvaZGMDJSwRbm4zaPqH10C05i05utWbjLR0ggkCyG_qH7imKY1K8ZuwOXfeUA1PGIfhnzRZwvUgwvHNK1str1GXhg',
    startDate: `2023-08-01T22:00:00.000Z`,
    endDate: `2023-08-31T21:59:59.999Z`,
    page: 1,
    max_results: 500,
    courier: ['Lieferando', 'Wolt', 'UberEats'],
  };

  async fetchOrdersForTimespan(options?: InputOptions) {
    const queryOptions = {
      ...this.defaults,
      ...options,
    };

    const couriers = queryOptions.courier.map((courier) => {
      return this.couries[courier];
    });

    const where = `{%22channel%22:{%22$in%22:[${couriers}]},%22account%22:{%22$in%22:[%2261605a08fd8070d72f202e21%22]},%22pickupTime%22:{%22$gt%22:%22${queryOptions.startDate}%22,%22$lt%22:%22${queryOptions.endDate}%22},%22_created%22:{%22$gt%22:%22${queryOptions.startDate}%22,%22$lt%22:%22${queryOptions.endDate}%22}}`;
    const path = `https://api.deliverect.com/orders?page=${queryOptions.page}&cursor=new&where=${where}&&max_results=${queryOptions.max_results}&useFastCount=true`;
  }

  fetchReviews(options?: InputOptions) {
    const queryOptions = {
      ...this.defaults,
      ...options,
    };

    const path = `
https://api.deliverect.com/v1/feedback/reviews?account=[%2261605a08fd8070d72f202e21%22]&begin=20230801&end=20230831&locations=[]&channels=[]`;

    return this.httpClient.get(path, {
      headers: {
        Authorization: `${queryOptions.bearer}`,
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
    });
  }

  fetchOrders(options?: InputOptions) {
    const queryOptions = {
      ...this.defaults,
      ...options,
    };

    const couriers = queryOptions.courier.map((courier) => {
      return this.couries[courier];
    });

    const where = `{%22channel%22:{%22$in%22:[${couriers}]},%22account%22:{%22$in%22:[%2261605a08fd8070d72f202e21%22]},%22pickupTime%22:{%22$gt%22:%22${queryOptions.startDate}%22,%22$lt%22:%22${queryOptions.endDate}%22}}`;

    const path = `https://api.deliverect.com/orders?page=${queryOptions.page}&cursor=new&where=${where}&&max_results=${queryOptions.max_results}&useFastCount=true`;

    return this.httpClient.get<DeliverectResponse>(path, {
      headers: {
        Authorization: `${queryOptions.bearer}`,
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
    });
  }

  fetchChannels(options?: InputOptions) {
    const queryOptions: DeliverectFetchOptions = {
      ...this.defaults,
      startDate: `20230801`,
      endDate: `20230831`,
      ...options,
    };

    return this.httpClient.get<DeliverectChannelResponse>(
      `https://api.deliverect.com/v2/report/billing/61605a08fd8070d72f202e21?period=day&by=channel&locations=[%2263ce5aff7558637d082dfd52%22]&brands=[]&channels=[]&from=${queryOptions.startDate}&to=${queryOptions.endDate}`,
      {
        headers: {
          Authorization: `${queryOptions.bearer}`,
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
