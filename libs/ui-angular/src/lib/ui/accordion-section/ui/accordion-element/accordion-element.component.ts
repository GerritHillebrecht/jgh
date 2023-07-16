import {
  Component,
  EventEmitter,
  Input,
  Output,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { AccordionElement } from '../../accordion-section.component';
import { ScreenSizeService } from '../../../../service/screen-size/screen-size.service';

@Component({
  selector: 'jgh-accordion-element',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './accordion-element.component.html',
  styleUrls: ['./accordion-element.component.scss'],
})
export class AccordionElementComponent {
  @Input({ required: true })
  accordionElement!: AccordionElement;

  @Input()
  set opened(value: boolean) {
    this.show.set(value);
  }

  @Input({ required: true })
  bgColors: string[] = [];

  @Output()
  elementOpened = new EventEmitter<void>();

  private readonly screenSizeService = inject(ScreenSizeService);
  protected readonly small = signal<boolean>(true);

  protected show = signal<boolean>(false);

  protected readonly iconDown = faChevronDown;

  constructor() {
    this.small = this.screenSizeService.small;
  }

  toggleOpen() {
    this.show.update((value) => !value);
    this.elementOpened.emit();
  }
}
