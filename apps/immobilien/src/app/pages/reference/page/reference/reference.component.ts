/* eslint-disable @nx/enforce-module-boundaries */
import { Component, ViewEncapsulation, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  AvatarComponent,
  AvatarOptions,
} from '@jgh/ui-angular/ui/avatar/avatar.component';
import { map, switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from 'apps/immobilien/src/app/shared/data-access/projects';
import { MarkdownModule } from 'ngx-markdown';
import {
  EquirectProjection,
  NgxView360Module,
  View360Options,
} from '@egjs/ngx-view360';
import { AvatarBlockComponent } from 'apps/immobilien/src/app/shared/ui/avatar-block/avatar-block.component';
import { Section360ViewComponent } from '@jgh/ui-angular/ui/section-360-view';
import { GlasBorderComponent } from '@jgh/ui-angular/ui/glas-border';

@Component({
  selector: 'im-reference',
  standalone: true,
  imports: [
    CommonModule,
    AvatarComponent,
    MarkdownModule,
    NgxView360Module,
    AvatarBlockComponent,
    Section360ViewComponent,
    GlasBorderComponent,
  ],
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export default class ReferenceComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly projectsService = inject(ProjectsService);

  protected readonly project = toSignal(
    this.route.params.pipe(
      map(({ slug }) => slug),
      switchMap((slug) => {
        return this.projectsService.project(slug);
      })
    )
  );

  protected readonly avatarOptions: AvatarOptions = {
    size: '3rem',
    borderWidth: '1px',
    borderColor: '#ccc',
    imageSize: '100%',
    imagePosition: 'cover',
  };

  protected readonly options: Partial<View360Options> = {
    projection: new EquirectProjection({
      src: 'assets/images/tiles/004.jpg',
    }),
    scrollable: true,
    wheelScrollable: true,
    // initialZoom: 0,
    // autoplay: {
    //   speed: 0.25,
    //   pauseOnHover: false,
    // },
  };
}
