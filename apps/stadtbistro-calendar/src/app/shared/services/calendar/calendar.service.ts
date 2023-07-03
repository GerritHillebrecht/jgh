import { Injectable, signal } from '@angular/core';
import { Calendar } from '@fullcalendar/core';
import { CalendarEvent } from '../../model/calendar.event.model';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  readonly calendarView = signal<Calendar['view']['title']>('dayGridMonth');
  readonly calendarEvents = signal<CalendarEvent[]>([
    {
      title: 'Test',
      start: new Date(),
    },
  ]);
}
