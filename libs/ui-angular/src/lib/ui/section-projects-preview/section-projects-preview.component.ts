/* eslint-disable @nx/enforce-module-boundaries */
import {
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { ButtonComponent } from 'apps/immobilien/src/app/shared/ui/button/button.component';
import { RouterModule } from '@angular/router';
import { ObserverService } from '@jgh/ui-angular/service/observer';
import { tap } from 'rxjs';
import { ProjectsService } from 'apps/immobilien/src/app/shared/data-access/projects';

@Component({
  selector: 'jgh-section-projects-preview',
  standalone: true,
  imports: [CommonModule, ButtonComponent, RouterModule],
  templateUrl: './section-projects-preview.component.html',
  styleUrls: ['./section-projects-preview.component.scss'],
})
export class SectionProjectsPreviewComponent {
  @ViewChildren('project')
  projectsRef?: QueryList<ElementRef<HTMLDivElement>>;

  private readonly observer = inject(ObserverService).observer;

  private readonly projectsService = inject(ProjectsService);

  protected readonly projects = toSignal(
    this.projectsService.projects({ pageSize: 4 }).pipe(
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
