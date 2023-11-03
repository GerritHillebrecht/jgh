import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition, faCheese, faPizzaSlice, faWheatAwn } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'ciu-animation-icons-background',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './animation-icons-background.component.html',
  styleUrls: ['./animation-icons-background.component.scss'],
})
export class AnimationIconsBackgroundComponent {
  protected readonly rows = Array.from({ length: 30 }).fill((_: any, i: any) => i);
  protected readonly icons = Array.from({ length: 40 }).fill((_: any, i: any) => i);
  protected readonly pizzaIcon = signal<IconDefinition>(faPizzaSlice);
  protected readonly cheeseIcon = signal<IconDefinition>(faCheese);
  protected readonly wheatIcon = signal<IconDefinition>(faWheatAwn);
}
