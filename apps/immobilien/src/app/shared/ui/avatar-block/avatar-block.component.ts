/* eslint-disable @nx/enforce-module-boundaries */
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AvatarComponent,
  AvatarOptions,
} from '@jgh/ui-angular/ui/avatar/avatar.component';

@Component({
  selector: 'im-avatar-block',
  standalone: true,
  imports: [CommonModule, AvatarComponent],
  templateUrl: './avatar-block.component.html',
  styleUrls: ['./avatar-block.component.scss'],
})
export class AvatarBlockComponent {
  @Input()
  image =
    'https://res.cloudinary.com/khatera-gross/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1692270311/avatar_tigu6b.jpg?_s=public-apps';

  @Input()
  title?: string;

  @Input()
  subtitle?: string;

  protected readonly avatarOptions: AvatarOptions = {
    size: '3rem',
    borderWidth: '1px',
    borderColor: '#ccc',
    imageSize: '100%',
    imagePosition: 'cover',
  };
}
