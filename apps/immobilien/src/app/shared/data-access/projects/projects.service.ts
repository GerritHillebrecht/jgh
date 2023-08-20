/* eslint-disable @nx/enforce-module-boundaries */
import { Injectable, inject } from '@angular/core';
import { StrapiService } from '@jgh/ui-angular/data-access';
import { map } from 'rxjs/operators';
import { Reference } from './project.model';
import { QueryParams } from '@jgh/ui-angular/data-access/strapi.model';
import { environment } from 'apps/immobilien/src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private readonly strapi = inject(StrapiService);

  projects({ page, pageSize }: Partial<QueryParams> = {}) {
    return this.strapi
      .fetchData<Reference>({
        path: 'references',
        query: {
          populate: ['Bilder'],
          sortBy: 'publishedAt',
          sortOrder: 'desc',
          page,
          pageSize,
        },
        server: environment.backend_server,
      })
      .pipe(map((data) => data.data));
  }

  project(slug: string) {
    return this.strapi
      .fetchData<Reference>({
        path: 'references',
        query: {
          populate: ['Bilder'],
          slug,
        },
        server: environment.backend_server,
      })
      .pipe(map((data) => data.data[0]));
  }
}

// query: '?populate=Bilder&sort[0]=publishedAt:desc',
// query: `?populate=Bilder&filters[slug][$eq]=${slug}&populate=Bilder`,
