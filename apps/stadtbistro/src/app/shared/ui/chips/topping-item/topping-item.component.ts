import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sb-topping-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topping-item.component.html',
  styleUrls: ['./topping-item.component.scss'],
})
export class ToppingItemComponent {
  @Input({ required: true })
  topping!: string;

  @Input()
  backgroundColor = 'rgb(231 229 228)';

  @Input()
  textColor = 'rgb(87 83 78)';

  @Input()
  active = false;

  @Input()
  activeColor = 'rgb(250 250 249)';

  @Input()
  activeTextColor = '#333';
}
