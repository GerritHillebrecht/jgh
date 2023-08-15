/* eslint-disable @nx/enforce-module-boundaries */
import { Component, ViewEncapsulation, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, switchMap } from 'rxjs';
import { StrapiService } from '@jgh/ui-angular/data-access';
import {
  AvatarComponent,
  AvatarOptions,
} from '@jgh/ui-angular/ui/avatar/avatar.component';
import { MarkdownModule } from 'ngx-markdown';
import {
  BlogPost,
  BlogService,
} from 'apps/immobilien/src/app/shared/data-access/blog';

@Component({
  selector: 'im-blog-post',
  standalone: true,
  imports: [CommonModule, RouterModule, AvatarComponent, MarkdownModule],
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export default class BlogPostComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly strapi = inject(StrapiService);
  private readonly blogService = inject(BlogService);

  protected readonly blogPost = toSignal(
    this.route.params.pipe(
      map(({ slug }) => slug),
      switchMap((slug) => {
        return this.blogService.blogPost(slug);
      })
    )
  );

  // protected readonly blogPost = toSignal(
  //   this.route.params.pipe(
  //     map(({ slug }) => slug),
  //     switchMap((slug) => {
  //       return this.strapi
  //         .fetchData<BlogPost>({
  //           path: 'blogs',
  //           query: `?filters[slug][$eq]=${slug}&populate=image`,
  //         })
  //         .pipe(map((posts) => posts.data[0]));
  //     })
  //   )
  // );

  protected readonly avatarOptions: AvatarOptions = {
    size: '3rem',
    borderWidth: '1px',
    borderColor: '#ccc',
    imageSize: '100%',
    imagePosition: 'cover',
  };
}
