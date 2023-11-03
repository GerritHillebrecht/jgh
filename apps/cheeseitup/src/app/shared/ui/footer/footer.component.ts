import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusIndicatorComponent } from '../status/status-indicator/status-indicator.component';

@Component({
  selector: 'ciu-footer',
  standalone: true,
  imports: [CommonModule, StatusIndicatorComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {}
