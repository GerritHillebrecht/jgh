/* eslint-disable @nx/enforce-module-boundaries */
import { Component, ViewEncapsulation, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, switchMap } from 'rxjs';
import { MarkdownModule } from 'ngx-markdown';
import { BlogService } from 'apps/immobilien/src/app/shared/data-access/blog';
import { AvatarBlockComponent } from 'apps/immobilien/src/app/shared/ui/avatar-block/avatar-block.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'im-blog-post',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MarkdownModule,
    AvatarBlockComponent,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule
  ],
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export default class BlogPostComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly blogService = inject(BlogService);

  protected readonly blogPost = toSignal(
    this.route.params.pipe(
      map(({ slug }) => slug),
      switchMap((slug) => this.blogService.blogPost(slug))
    )
  );
}
