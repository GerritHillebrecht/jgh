import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from '../../ui/calendar/calendar.component';

@Component({
  selector: 'sbc-landing-app',
  standalone: true,
  imports: [CommonModule, CalendarComponent],
  templateUrl: './landing-app.component.html',
  styleUrls: ['./landing-app.component.scss'],
})
export default class LandingAppComponent {}
