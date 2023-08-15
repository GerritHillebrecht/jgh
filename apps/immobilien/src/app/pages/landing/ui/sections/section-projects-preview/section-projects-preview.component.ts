/* eslint-disable @nx/enforce-module-boundaries */
import {
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { StrapiService } from '@jgh/ui-angular/data-access';
import { toSignal } from '@angular/core/rxjs-interop';
import { ButtonComponent } from 'apps/immobilien/src/app/shared/ui/button/button.component';
import { RouterModule } from '@angular/router';
import { ObserverService } from '@jgh/ui-angular/service/observer';
import { map, tap } from 'rxjs';
import { Reference } from 'apps/immobilien/src/app/shared/data-access/projects/project.model';

@Component({
  selector: 'im-section-projects-preview',
  standalone: true,
  imports: [CommonModule, ButtonComponent, RouterModule],
  templateUrl: './section-projects-preview.component.html',
  styleUrls: ['./section-projects-preview.component.scss'],
})
export class SectionProjectsPreviewComponent {
  @ViewChildren('project')
  projectsRef?: QueryList<ElementRef<HTMLDivElement>>;

  private readonly observer = inject(ObserverService).observer;

  private readonly strapi = inject(StrapiService);
  protected readonly projects = toSignal(
    this.strapi
      .fetchData<Reference>({
        path: 'references',
        query:
          '?populate=images&sort[0]=publishedAt:desc&pagination[pageSize]=4',
      })
      .pipe(
        map((projects) => projects.data),
        tap(() => {
          setTimeout(() => {
            this.projectsRef?.forEach((project) => {
              this.observer.observe(project.nativeElement);
            });
          }, 1);
        })
      )
  );
}
