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
        query: '?populate=Bilder&sort[0]=publishedAt:desc',
      })
      .pipe(map((data) => data.data));
  }
}
