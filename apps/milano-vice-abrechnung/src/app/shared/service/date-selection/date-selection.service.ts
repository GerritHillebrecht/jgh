import { Injectable, computed, signal } from '@angular/core';

import * as dayjs from 'dayjs';
import 'dayjs/locale/de';
dayjs.locale('de');

export type Dayjs = dayjs.Dayjs;
export type TimePeriod = { label: string; from: Date; to: Date };

@Injectable({
  providedIn: 'root',
})
export class DateSelectionService {
  readonly currentDate = signal<Dayjs>(dayjs());

  readonly timeperiods = computed<TimePeriod[]>(() => {
    const today = this.currentDate().date();
    const firstFromDate = today <= 15 ? 1 : 16;
    const firstToDate = today <= 15 ? 15 : this.currentDate().daysInMonth();

    const secondFromDate = today <= 15 ? 16 : 1;
    const secondToDate = today <= 15 ? this.currentDate().daysInMonth() : 15;

    const firstTimeperiod = {
      label: this.currentDate().format('MMMM'),
      from: dayjs().date(firstFromDate).startOf('day').toDate(),
      to: dayjs().date(firstToDate).endOf('day').toDate(),
    };

    const secondTimePeriod = {
      label: this.currentDate().format('MMMM'),
      from: dayjs().date(secondFromDate).toDate(),
      to: dayjs().date(secondToDate).toDate(),
    };

    return [
      firstTimeperiod,
      secondTimePeriod,
      ...Array.from({ length: 12 }, (_, i) => {
        return {
          label: this.currentDate()
            .subtract(Math.floor(i / 2) + 1, 'month')
            .format('MMMM'),
          from: dayjs(
            i % 2 === 0 ? firstTimeperiod.from : secondTimePeriod.from
          )
            .subtract(Math.floor(i / 2) + 1, 'month')
            .toDate(),
          to: dayjs(i % 2 === 0 ? firstTimeperiod.to : secondTimePeriod.to)
            .subtract(Math.floor(i / 2) + 1, 'month')
            .toDate(),
        };
      }),
    ]
      .filter(
        (period) =>
          period.from.getTime() <= this.currentDate().toDate().getTime()
      )
      .sort((a, b) => b.from.getTime() - a.from.getTime());
  });

  readonly selectedTimePeriod = signal<TimePeriod>(this.timeperiods()[1]);

  readonly currentMonth = computed<string>(() =>
    this.currentDate().format('MMMM')
  );

  readonly startOfMonth = computed<Dayjs>(() =>
    this.currentDate().startOf('month')
  );
  readonly endOfMonth = computed<Dayjs>(() =>
    this.currentDate().endOf('month')
  );

  updateCurrentDate(date: Dayjs): void {
    this.currentDate.update(() => date);
  }

  updateCurrentDatePeriod(period: TimePeriod): void {
    this.selectedTimePeriod.update(() => period);
  }
}
