import {
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageGalleryComponent } from '@jgh/ui-angular/ui/image-gallery';

import { toSignal } from '@angular/core/rxjs-interop';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { StrapiImage, StrapiService } from '@jgh/ui-angular/data-access';
import { ObserverService } from '@jgh/ui-angular/service/observer';
import { RouterModule } from '@angular/router';
import { map, tap } from 'rxjs';
import { ProjectsService } from '../../shared/data-access/projects';

@Component({
  selector: 'im-reference',
  standalone: true,
  imports: [
    CommonModule,
    ImageGalleryComponent,
    MatProgressSpinnerModule,
    RouterModule,
  ],
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.scss'],
})
export default class ReferenceComponent {
  @ViewChildren('project')
  projectsRef?: QueryList<ElementRef<HTMLAnchorElement>>;

  private readonly projectService = inject(ProjectsService);

  private readonly observer = inject(ObserverService).observer;
  private readonly strapi = inject(StrapiService);

  protected readonly references = toSignal(
    this.projectService.projects().pipe(
      tap(() => {
        setTimeout(() => {
          this.projectsRef?.forEach((project) => {
            this.observer.observe(project.nativeElement);
          });
        }, 1);
      })
    )
  );

  // protected readonly references = toSignal(
  //   this.strapi
  //     .fetchData<Reference>({
  //       path: 'referenzens',
  //       query: '?populate=images&sort[0]=publishedAt:desc',
  //     })
  //     .pipe(
  //       map((references) => references.data),
  //       tap(() => {
  //         setTimeout(() => {
  //           this.projectsRef?.forEach((project) => {
  //             this.observer.observe(project.nativeElement);
  //           });
  //         }, 1);
  //       })
  //     )
  // );
}
