import {
  Component,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../../shared/ui/navigation/navbar/navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavigationService } from '../../../shared/services/navigation/navigation.service';

@Component({
  selector: 'sbc-template-app',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, MatSidenavModule],
  templateUrl: './template-app.component.html',
  styleUrls: ['./template-app.component.scss'],
})
export default class TemplateAppComponent {
  protected readonly navigationService = inject(NavigationService);
}
