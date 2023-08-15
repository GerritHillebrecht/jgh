import {
  Component,
  Input,
  ViewEncapsulation,
  computed,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { ScrollingService } from '@jgh/ui-angular/service/scrolling/scrolling.service';
import { Theme, ThemeService } from '../../../services/theme';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../button/button.component';

export interface NavLink {
  path: string;
  label: string;
}

@Component({
  selector: 'im-navbar',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatTabsModule,
    MatDividerModule,
    RouterModule,
    ButtonComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent {
  @Input()
  links: NavLink[] = [
    {
      path: 'preview',
      label: 'Home',
    },
    {
      path: 'preview/blog',
      label: 'Blog',
    },
    {
      path: 'preview/projects',
      label: 'Referenzen',
    },
    {
      path: 'preview/me',
      label: 'Über mich',
    },
    {
      path: 'preview/contact',
      label: 'Kontakt',
    },
  ];

  protected activeLink = this.links[0];

  protected readonly linkedIn = faLinkedin;
  private readonly scrollService = inject(ScrollingService);
  protected readonly scrolled = computed(
    () => this.scrollService.scrollDistance() > 0
  );

  private readonly themeService = inject(ThemeService);

  setTheme(theme: Theme) {
    this.themeService.setTheme(theme);
  }
}
