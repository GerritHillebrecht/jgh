import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AvatarComponent,
  AvatarOptions,
} from 'libs/ui-angular/src/lib/ui/avatar/avatar.component';
import { MatDividerModule } from '@angular/material/divider';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { RouterModule } from '@angular/router';
import { BlogService } from '../../shared/data-access/blog';
import { tap } from 'rxjs';

@Component({
  selector: 'im-blog',
  standalone: true,
  imports: [
    CommonModule,
    AvatarComponent,
    MatDividerModule,
    ButtonComponent,
    HttpClientModule,
    RouterModule,
    MarkdownModule,
  ],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export default class BlogComponent {
  private readonly blogService = inject(BlogService);

  protected readonly blogPosts = this.blogService.blogPosts();

  protected readonly avatarOptions: AvatarOptions = {
    size: '3rem',
    borderWidth: '1px',
    borderColor: '#ccc',
    imageSize: '100%',
    imagePosition: 'cover',
  };
}
