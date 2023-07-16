import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  IconDefinition,
  faClock,
  faEnvelope,
  faHouseFire,
  faLocationDot,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'rab-information-section',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './information-section.component.html',
  styleUrls: ['./information-section.component.scss'],
})
export class InformationSectionComponent {
  protected readonly clockIcon = faClock;
  protected readonly pinIcon = faLocationDot;
  protected readonly phoneIcon = faPhone;
  protected readonly emergencyIcon = faHouseFire;
  protected readonly mailIcon = faEnvelope;

  information: {
    title: string;
    information: string;
    icon: IconDefinition;
  }[] = [
    {
      title: 'Sie erreichen mich zu den Öffnungszeiten unter',
      information: '040 38 65 44 66',
      icon: this.phoneIcon,
    },
    {
      title: 'In Notfällen erreichen Sie mich 24h unter',
      information: '0176 48 16 32 48',
      icon: this.emergencyIcon,
    },
    {
      title: 'Sie erreichen mich Montag bis Freitag von',
      information: '12-14Uhr',
      icon: this.clockIcon,
    },
    {
      title: 'Schreiben Sie mir gerne eine E-Mail an',
      information: 'info@kanzlei-bartels.org',
      icon: this.mailIcon,
    },
  ];
}
