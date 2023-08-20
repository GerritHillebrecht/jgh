/* eslint-disable @nx/enforce-module-boundaries */
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { QueryParams, StrapiCollectionQuery } from './strapi.model';

interface StrapiFetchDataOptions {
  path: string;
  query: Partial<QueryParams>;
  server?: string;
}

@Injectable({
  providedIn: 'root',
})
export class StrapiService {
  private readonly http = inject(HttpClient);

  fetchData<T>({
    path,
    query: { sortBy, sortOrder, populate, page, pageSize, slug },
    server = 'http://localhost:1337',
  }: StrapiFetchDataOptions) {
    const slugString = slug ? `filters[slug][$eq]=${slug}` : null;
    const sortString = sortBy
      ? `sort[0]=${sortBy}:${sortOrder ?? 'desc'}`
      : null;
    const populateString = populate ? `populate=${populate}` : null;
    const pageString = page ? `pagination[page]=${page}` : null;
    const pageSizeString = pageSize ? `pagination[pageSize]=${pageSize}` : null;

    const query = `?${[
      slugString,
      sortString,
      populateString,
      pageString,
      pageSizeString,
    ]
      .filter((string) => string !== null)
      .join('&')}`;

    return this.http.get<StrapiCollectionQuery<T>>(
      `${server}/api/${path}${query}`
    );
  }
}
