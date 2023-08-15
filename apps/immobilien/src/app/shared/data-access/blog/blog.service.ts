/* eslint-disable @nx/enforce-module-boundaries */
import { Injectable, inject } from '@angular/core';
import { StrapiService } from '@jgh/ui-angular/data-access/strapi.service';
import { map } from 'rxjs/operators';
import { BlogPost } from './blog.model';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private readonly strapi = inject(StrapiService);

  blogPosts() {
    return this.strapi
      .fetchData<BlogPost>({
        path: 'blogentries',
        query: '?populate=Vorschaubild&sort[0]=publishedAt:desc',
      })
      .pipe(map((data) => data.data));
  }

  blogPost(slug: string) {
    return this.strapi
      .fetchData<BlogPost>({
        path: `blogentries`,
        query: `?populate=Vorschaubild&filter[slug][$eq]=${slug}`,
      })
      .pipe(map((data) => data.data[0]));
  }
}
