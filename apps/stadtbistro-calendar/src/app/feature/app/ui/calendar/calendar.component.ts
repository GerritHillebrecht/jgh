/* eslint-disable @nx/enforce-module-boundaries */
import {
  AfterViewInit,
  Component,
  ViewChild,
  effect,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FullCalendarComponent,
  FullCalendarModule,
} from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';

import { NavigationService } from 'apps/stadtbistro-calendar/src/app/shared/services/navigation/navigation.service';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { CalendarService } from 'apps/stadtbistro-calendar/src/app/shared/services/calendar/calendar.service';

@Component({
  selector: 'sbc-calendar',
  standalone: true,
  imports: [
    CommonModule,
    FullCalendarModule,
    MatButtonModule,
    FontAwesomeModule,
  ],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent {
  @ViewChild('calendar')
  private readonly calendar?: FullCalendarComponent;

  private readonly calendarService = inject(CalendarService);
  private navigationService = inject(NavigationService);

  protected plus = faPlus;

  private calendarEventEffect = effect(() => {
    const events = this.calendarService.calendarEvents();
    if (this.calendar) {
      this.calendar.events = events;
    }
  });

  private calendarResizeEffect = effect(() => {
    this.navigationService.sidenavOpened();
    if (this.calendar) {
      const calendarApi = this.calendar?.getApi();
      setTimeout(() => {
        calendarApi.updateSize();
      }, 500);
    }
  });

  protected readonly calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    height: '100%',
    headerToolbar: false,
    locale: 'de',
    firstDay: 1,
    dateClick: (info) => {
      this.addEvent(info);
    },
    events: this.calendarService.calendarEvents(),
    plugins: [dayGridPlugin, interactionPlugin],
  };

  addEvent({ date }: DateClickArg): void {
    this.calendarService.calendarEvents.update((events) => {
      return [...events, { start: date, title: 'Neuer Termin' }];
    });
  }
}
