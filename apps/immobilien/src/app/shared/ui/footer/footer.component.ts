import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StrapiService } from '@jgh/ui-angular/data-access';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterModule } from '@angular/router';
import { map } from 'rxjs';
import { BlogService } from '../../data-access/blog';
import { BlogPost } from '../../data-access/blog/blog.model';
import { Reference } from '../../data-access/projects/project.model';

@Component({
  selector: 'im-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  private readonly strapi = inject(StrapiService);
  private blogService = inject(BlogService);

  protected readonly blogPosts = toSignal(
    this.strapi
      .fetchData<BlogPost>({
        path: 'blogentries',
        query:
          '?populate=Vorschaubild&sort[0]=publishedAt:desc&pagination[pageSize]=4',
      })
      .pipe(map((blogentries) => blogentries.data))
  );

  protected readonly references = toSignal(
    this.strapi
      .fetchData<Reference>({
        path: 'references',
        query:
          '?populate=images&sort[0]=publishedAt:desc&pagination[pageSize]=4',
      })
      .pipe(map((references) => references.data))
  );
}
