import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLightbulb, faPhone } from '@fortawesome/free-solid-svg-icons';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'rab-hero-section',
  standalone: true,
  imports: [CommonModule, MatButtonModule, FontAwesomeModule, RouterModule],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
})
export class HeroSectionComponent {
  protected readonly phoneIcon = faPhone;
  protected readonly philosophyIcon = faLightbulb;
}
