import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'sb-dashboard-template',
  standalone: true,
  imports: [CommonModule, MatSidenavModule, RouterModule],
  templateUrl: './dashboard-template.component.html',
  styleUrls: ['./dashboard-template.component.scss'],
})
export default class DashboardTemplateComponent {}
