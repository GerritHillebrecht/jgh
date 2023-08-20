import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterModule } from '@angular/router';
import { BlogService } from '../../data-access/blog';
import { ProjectsService } from '../../data-access/projects';

@Component({
  selector: 'im-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  private blogService = inject(BlogService);
  private readonly projectService = inject(ProjectsService);

  protected readonly blogPosts = this.blogService.blogPosts({ pageSize: 4 });
  protected readonly references = toSignal(
    this.projectService.projects({ pageSize: 4 })
  );
}
