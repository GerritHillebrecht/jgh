/* eslint-disable @nx/enforce-module-boundaries */
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StrapiService } from '@jgh/ui-angular/data-access';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  AvatarComponent,
  AvatarOptions,
} from '@jgh/ui-angular/ui/avatar/avatar.component';
import { map, switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Reference } from 'apps/immobilien/src/app/shared/data-access/projects/project.model';

@Component({
  selector: 'im-reference',
  standalone: true,
  imports: [CommonModule, AvatarComponent],
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.scss'],
})
export default class ReferenceComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly strapi = inject(StrapiService);

  protected readonly project = toSignal(
    this.route.params.pipe(
      map(({ slug }) => slug),
      switchMap((slug) => {
        return this.strapi
          .fetchData<Reference>({
            path: 'referencess',
            query: `?populate=images&filters[slug][$eq]=${slug}&populate=image`,
          })
          .pipe(map((posts) => posts.data[0]));
      })
    )
  );

  protected admin_url = 'https://admin.chatera-gross.de';

  protected readonly avatarOptions: AvatarOptions = {
    size: '3rem',
    borderWidth: '1px',
    borderColor: '#ccc',
    imageSize: '100%',
    imagePosition: 'cover',
  };
}
