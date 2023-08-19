/* eslint-disable @nx/enforce-module-boundaries */
import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { toSignal } from '@angular/core/rxjs-interop';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import {
  AccordionElement,
  AccordionOptions,
  AccordionSectionComponent,
} from '@jgh/ui-angular/ui/accordion-section/accordion-section.component';
import { AccordionElementComponent } from '@jgh/ui-angular/ui/accordion-section/ui/accordion-element/accordion-element.component';
import { StrapiService } from '@jgh/ui-angular/data-access';

interface FaqElement {
  Frage: string;
  Antwort: string;
  slug: string;
}

@Component({
  selector: 'im-contact',
  standalone: true,
  imports: [
    CommonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ButtonComponent,
    AccordionSectionComponent,
    AccordionElementComponent,
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export default class ContactComponent {
  protected readonly contactForm: FormGroup;

  private readonly breakpointObserver = inject(BreakpointObserver);

  private strapi = inject(StrapiService);
  private readonly faqElements = toSignal(
    this.strapi
      .fetchData<FaqElement>({
        path: 'faqs',
        query: { sortBy: 'createdAt', sortOrder: 'asc' },
      })
      .pipe(map((faqs) => faqs.data))
  );

  protected readonly faqAccordionElements = computed(() => {
    return this.faqElements()?.map((faq) => {
      return {
        title: faq.attributes.Frage,
        body: faq.attributes.Antwort,
      } as AccordionElement;
    });
  });

  protected readonly isLandscape = toSignal(
    this.breakpointObserver
      .observe(['(orientation: landscape)'])
      .pipe(map((result) => result.matches))
  );

  get personalData() {
    return this.contactForm.get('personalData') as FormGroup;
  }

  get contactData() {
    return this.contactForm.get('contactData') as FormGroup;
  }

  protected readonly backArrow = faArrowLeft;

  constructor() {
    this.contactForm = new FormGroup({
      personalData: new FormGroup({
        firstname: new FormControl('', [Validators.required]),
        lastname: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        phone: new FormControl(''),
      }),
      contactData: new FormGroup({
        message: new FormControl('', [Validators.required]),
      }),
    });
  }

  protected readonly contactBlockData = signal([
    {
      title: 'Schreiben Sie uns!',
      description: 'Der schnellste Weg für einen Termin.',
      mail: 'Zum Formular',
      path: '#contact-form',
    },
    {
      title: 'Chat to sales',
      description: 'Speak to our friendly team.',
      mail: 'sales@chatera-gross.de',
      path: 'mailto:sales@chatera-gross.de',
    },
    {
      title: 'Chat to support',
      description: "We're here to help.",
      mail: 'support@chatera-gross.de',
      path: 'mailto:support@chatera-gross.de',
    },
    {
      title: 'Call us',
      description: 'Mo - Fr 9:00 - 18:00',
      mail: '+49 123 456 789',
      path: 'tel:+49123456789',
    },
  ]);

  protected readonly faqData: Partial<AccordionOptions> = {
    firstOpenend: true,
    // backgroundColor: 'rgb(255, 255, 255)',
    textColor: '#333',
    image: 'assets/images/about/faq.jpg',
  };

  protected readonly title = 'Freqently Asked Questions';
  protected readonly subtitle = 'Das wichtigste auf einen Blick';

  protected readonly accordionElements: AccordionElement[] = [
    {
      title: 'Wie lange dauert der Home Staging Prozess?',
      body: 'Abhängig von der Größe der Immobilie und dem Umfang der Maßnahmen dauert der Prozess zwischen 1 und 3 Tagen.',
    },
    {
      title: 'Wie viel kostet Home Staging?',
      body: 'Die Kosten für Home Staging sind abhängig von der Größe der Immobilie und dem Umfang der Maßnahmen. Wir erstellen Ihnen gerne ein individuelles Angebot.',
    },
    {
      title: 'Wie lange bleibt das Home Staging in der Immobilie?',
      body: 'Das Home Staging bleibt in der Immobilie bis zum Verkauf. Die Mietdauer beträgt 3 Monate. Sollte die Immobilie nicht innerhalb dieser Zeit verkauft werden, kann das Home Staging verlängert werden.',
    },
    {
      title: 'Wie viel kostet die Verlängerung des Home Stagings?',
      body: 'Die Kosten für die Verlängerung des Home Stagings sind abhängig von der Größe der Immobilie und dem Umfang der Maßnahmen. Wir erstellen Ihnen gerne ein individuelles Angebot.',
    },
    {
      title: 'Wie viel kostet die Einlagerung der Möbel?',
      body: 'Die Kosten für die Einlagerung der Möbel sind abhängig von der Größe der Immobilie und dem Umfang der Maßnahmen. Wir erstellen Ihnen gerne ein individuelles Angebot.',
    },
  ];
}
