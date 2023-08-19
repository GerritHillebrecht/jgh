/* eslint-disable @nx/enforce-module-boundaries */
import { Injectable, inject } from '@angular/core';
import { StrapiService } from '@jgh/ui-angular/data-access/strapi.service';
import { map } from 'rxjs/operators';
import { BlogPost } from './blog.model';
import { QueryParams } from '@jgh/ui-angular/data-access/strapi.model';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private readonly strapi = inject(StrapiService);

  blogPosts({ page, pageSize }: Partial<QueryParams> = {}) {
    return toSignal(
      this.strapi
        .fetchData<BlogPost>({
          path: 'blogentries',
          query: {
            populate: ['Vorschaubild'],
            sortBy: 'publishedAt',
            sortOrder: 'desc',
            page,
            pageSize,
          },
        })
        .pipe(map((data) => data.data))
    );
  }

  blogPost(slug: string) {
    return this.strapi
      .fetchData<BlogPost>({
        path: `blogentries`,
        query: {
          populate: ['Vorschaubild'],
          slug,
        },
      })
      .pipe(map((data) => data.data[0]));
  }
}

// `?populate=Vorschaubild&sort[0]=publishedAt:desc${
//   pageSize ?? `pageSize=${pageSize}`
// }`,
