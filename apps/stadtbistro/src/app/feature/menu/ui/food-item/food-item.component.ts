import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sb-topping-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.scss'],
})
export class ToppingComponent {
  @Input({ required: true })
  topping!: string;
}
