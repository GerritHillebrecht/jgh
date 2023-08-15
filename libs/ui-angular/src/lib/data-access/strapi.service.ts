/* eslint-disable @nx/enforce-module-boundaries */
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { StrapiCollectionQuery } from './strapi.model';

@Injectable({
  providedIn: 'root',
})
export class StrapiService {
  private readonly http = inject(HttpClient);

  fetchData<T>({
    path,
    query,
    server = 'http://localhost:1337/api',
  }: {
    path: string;
    query?: string;
    server?: string;
  }) {
    return this.http.get<StrapiCollectionQuery<T>>(`${server}/${path}${query}`);
  }
}
