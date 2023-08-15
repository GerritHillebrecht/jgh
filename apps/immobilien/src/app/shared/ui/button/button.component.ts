import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  IconDefinition,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'im-button',
  standalone: true,
  imports: [CommonModule, MatRippleModule, FontAwesomeModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  iconRight = faArrowRight;

  @Input()
  icon?: IconDefinition;

  @Input()
  size?: 'small' | 'medium' | 'large' = 'medium';

  @Input()
  cta = false;

  @Input()
  disabled = false;

  @Input()
  showArrow = true;
}
