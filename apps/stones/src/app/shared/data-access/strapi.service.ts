/* eslint-disable @nx/enforce-module-boundaries */
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'apps/stones/src/environments/environment.development';
import { map } from 'rxjs/operators';

interface StrapiCollectionQuery<T> {
  data: {
    id: number;
    attributes: T;
    meta: {
      availableLocales: string[];
      [key: string]: unknown;
    };
  }[];
  meta: {
    [key: string]: unknown;
  };
  error?: unknown;
}

interface StrapiSingleQuery<T> {
  data: {
    id: number;
    attributes: T;
    meta: {
      availableLocales: string[];
      [key: string]: unknown;
    };
  };
  meta: {
    [key: string]: unknown;
  };
  error?: unknown;
}

@Injectable({
  providedIn: 'root',
})
export class StrapiService {
  private readonly http = inject(HttpClient);

  fetchData<T>(path: string, query?: string) {
    return this.http
      .get<StrapiCollectionQuery<T>>(
        `${environment.backend_server}/${path}${query}`
      )
      .pipe(map((data) => data.data));
  }

  fetchSingle<T>({ path, query }: { path: string; query: string }) {
    return this.http
      .get<StrapiSingleQuery<T>>(
        `${environment.backend_server}/${path}${query ?? ''}`
      )
      .pipe(map((data) => data.data));
  }
}
