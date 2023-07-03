export interface CalendarEvent {
  id?: string;
  groupId?: string;
  allDay?: boolean;
  start: Date;
  end?: Date;
  startStr?: string;
  endStr?: string;
  title: string;
  url?: string;
  classNames?: string[];
  editable?: boolean;
  startEditable?: boolean;
  durationEditable?: boolean;
  resourceEditable?: boolean;
  display?: 'auto' | 'block' | 'list-item' | 'background';
  overlap?: boolean;
  constraint?: string | object;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  extendedProps?: object;
  source?: object;
}
