import {
  AfterViewInit,
  Component,
  Input,
  QueryList,
  ViewChildren,
  computed,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionElementComponent } from './ui/accordion-element/accordion-element.component';
import { ScreenSizeService } from '../../service/screen-size/screen-size.service';

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export interface AccordionOptions {
  firstOpenend: boolean;
  backgroundColor: RGB;
  textColor: RGB | RGBA | HEX;
  image: string;
  smallImage?: string;
}

export interface AccordionElement {
  title: string;
  body: string;
}

@Component({
  selector: 'jgh-accordion-section',
  standalone: true,
  imports: [CommonModule, AccordionElementComponent],
  templateUrl: './accordion-section.component.html',
  styleUrls: ['./accordion-section.component.scss'],
})
export class AccordionSectionComponent implements AfterViewInit {
  @Input({ required: true })
  title!: string;

  @Input({ required: true })
  subtitle!: string;

  @Input({ required: true })
  accordionElements!: AccordionElement[];

  @Input()
  set options(value: Partial<AccordionOptions>) {
    this.accordionOptions.set({ ...this.accordionOptions(), ...value });
  }

  @ViewChildren(AccordionElementComponent)
  elements?: QueryList<AccordionElementComponent>;

  private readonly screenSizeService = inject(ScreenSizeService);
  protected readonly small = signal<boolean>(true);

  protected readonly accordionOptions = signal<AccordionOptions>({
    firstOpenend: true,
    backgroundColor: 'rgb(243, 210, 197)',
    textColor: 'rgb(68, 64, 60)',
    image: 'assets/images/landing/accordion/accordion-1.jpg',
  });

  protected readonly translucentBackgroundColor = computed(() => {
    return this.accordionOptions().backgroundColor.replace(')', ', 0.7)');
  });

  constructor() {
    this.small = this.screenSizeService.small;
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.elements && this.accordionOptions().firstOpenend) {
        this.elements.toArray()[0].opened = true;
      }
    }, 1);
  }

  handleElementOpened(index: number) {
    if (this.elements) {
      this.elements.toArray().forEach((e, i) => {
        if (i !== index) {
          e.opened = false;
        }
      });
    }
  }
}
