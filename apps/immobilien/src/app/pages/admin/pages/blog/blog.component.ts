/* eslint-disable @nx/enforce-module-boundaries */
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Firestore, collection } from '@angular/fire/firestore';
import {
  AvatarComponent,
  AvatarOptions,
} from '@jgh/ui-angular/ui/avatar/avatar.component';
import { ButtonComponent } from 'apps/immobilien/src/app/shared/ui/button/button.component';

@Component({
  selector: 'im-blog',
  standalone: true,
  imports: [CommonModule, AvatarComponent, ButtonComponent],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export default class BlogComponent {
  private readonly store = inject(Firestore);
  private readonly ref = collection(this.store, 'blog');

  // protected readonly blogPosts = toSignal(
  //   collectionData(this.ref).pipe(
  //     map((posts) =>
  //       posts.map((post) => ({ ...post, date: post.date.toDate() } as BlogPost))
  //     ),
  //     map((posts) => [...posts, ...posts, ...posts])
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
