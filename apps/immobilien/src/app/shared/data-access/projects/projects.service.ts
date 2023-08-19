import { Injectable, inject } from '@angular/core';
import { StrapiService } from '@jgh/ui-angular/data-access';
import { map } from 'rxjs/operators';
import { Reference } from './project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private readonly strapi = inject(StrapiService);

  projects() {
    return this.strapi
      .fetchData<Reference>({
        path: 'references',
        query: {
          populate: ['Bilder'],
          sortBy: 'publishedAt',
          sortOrder: 'desc',
        },
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
      })
      .pipe(map((data) => data.data[0]));
  }
}

// query: '?populate=Bilder&sort[0]=publishedAt:desc',
// query: `?populate=Bilder&filters[slug][$eq]=${slug}&populate=Bilder`,
