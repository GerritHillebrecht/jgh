import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface List {
  title: string;
  items: ListItem[];
}

export interface ListItem {
  title: string;
  text: string;
}

@Component({
  selector: 'im-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input({ required: true })
  list!: List;
}
