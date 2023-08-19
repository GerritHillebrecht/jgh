/* eslint-disable @nx/enforce-module-boundaries */
import {
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
  effect,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { StrapiService } from '@jgh/ui-angular/data-access';
import { ButtonComponent } from 'apps/immobilien/src/app/shared/ui/button/button.component';
import { RouterModule } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { ObserverService } from '@jgh/ui-angular/service/observer';
import { map, tap } from 'rxjs';
import {
  BlogPost,
  BlogService,
} from 'apps/immobilien/src/app/shared/data-access/blog';

@Component({
  selector: 'im-section-blog-preview',
  standalone: true,
  imports: [CommonModule, ButtonComponent, RouterModule],
  templateUrl: './section-blog-preview.component.html',
  styleUrls: ['./section-blog-preview.component.scss'],
})
export class SectionBlogPreviewComponent {
  @ViewChildren('post')
  posts?: QueryList<ElementRef<HTMLAnchorElement>>;

  private readonly observer = inject(ObserverService).observer;

  private readonly strapi = inject(StrapiService);

  private readonly blogServerice = inject(BlogService);

  protected readonly blogPosts = this.blogServerice.blogPosts();

  private observeEffect = effect(() => {
    const blogPosts = this.blogPosts();
    setTimeout(() => {
      this.posts?.forEach((post) => {
        this.observer.observe(post.nativeElement);
      });
    });
  });

  // protected readonly blogPosts = toSignal(
  //   this.strapi
  //     .fetchData<BlogPost>({
  //       path: 'blogentries',
  //       query:
  //         '?populate=Vorschaubild&sort[0]=publishedAt:desc&pagination[pageSize]=4',
  //     })
  //     .pipe(
  //       map((blogposts) => blogposts.data),
  //       tap(() => {
  //         setTimeout(() => {
  //           this.posts?.forEach((post) => {
  //             this.observer.observe(post.nativeElement);
  //           });
  //         }, 1);
  //       })
  //     )
  // );
}
