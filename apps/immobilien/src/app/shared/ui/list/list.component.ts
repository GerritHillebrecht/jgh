import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  QueryList,
  ViewChildren,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObserverService } from '@jgh/ui-angular/service/observer';

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
export class ListComponent implements AfterViewInit {
  @ViewChildren('listItem')
  listItemsRef?: QueryList<ElementRef<HTMLElement>>;

  @Input({ required: true })
  list!: List;

  private observer = inject(ObserverService).observer;

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.listItemsRef) {
        this.listItemsRef.forEach((listItem) => {
          this.observer.observe(listItem.nativeElement);
        });
      }
    }, 1);
  }
}
