/* eslint-disable @nx/enforce-module-boundaries */
import {
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageGalleryComponent } from '@jgh/ui-angular/ui/image-gallery';
import { ObserverService } from '@jgh/ui-angular/service/observer';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterModule } from '@angular/router';
import { map, tap } from 'rxjs';
import { ProjectsService } from '../../shared/data-access/projects';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'im-reference',
  standalone: true,
  imports: [CommonModule, ImageGalleryComponent, RouterModule],
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.scss'],
})
export default class ReferenceComponent {
  @ViewChildren('project')
  projectsRef?: QueryList<ElementRef<HTMLAnchorElement>>;

  private readonly observer = inject(ObserverService).observer;
  private readonly breakpointObserver = inject(BreakpointObserver);
  protected readonly isSmall = toSignal(
    this.breakpointObserver
      .observe(['(max-width: 640px)'])
      .pipe(map((result) => result.matches))
  );

  private readonly projectService = inject(ProjectsService);

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
}
