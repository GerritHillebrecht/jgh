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
import { ButtonComponent } from 'apps/immobilien/src/app/shared/ui/button/button.component';
import { RouterModule } from '@angular/router';
import { ObserverService } from '@jgh/ui-angular/service/observer';
import { BlogService } from 'apps/immobilien/src/app/shared/data-access/blog';

@Component({
  selector: 'jgh-section-blog-preview',
  standalone: true,
  imports: [CommonModule, ButtonComponent, RouterModule],
  templateUrl: './section-blog-preview.component.html',
  styleUrls: ['./section-blog-preview.component.scss'],
})
export class SectionBlogPreviewComponent {
  @ViewChildren('post')
  postsRef?: QueryList<ElementRef<HTMLAnchorElement>>;

  private readonly observer = inject(ObserverService).observer;
  private readonly blogServerice = inject(BlogService);
  protected readonly blogPosts = this.blogServerice.blogPosts({ pageSize: 4 });

  private observeEffect = effect(() => {
    const blogPosts = this.blogPosts();
    setTimeout(() => {
      this.postsRef?.forEach((post) => {
        this.observer.observe(post.nativeElement);
      });
    });
  });
}
