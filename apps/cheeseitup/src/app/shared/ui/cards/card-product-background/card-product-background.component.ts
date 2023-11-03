import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from '../../../model/product';

@Component({
  selector: 'ciu-card-product-background',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-product-background.component.html',
  styleUrls: ['./card-product-background.component.scss'],
})
export class CardProductBackgroundComponent {
  @Input()
  menuItem: MenuItem = {
    name: 'Cheese 🧀 (Margherita)',
    description: 'Tomato sauce, Cheese-Mix, Basil',
    price: 8,
    image: 'pizza-king-cheese.png',
  };
}
