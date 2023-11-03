import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProductBackgroundComponent } from '../../shared/ui/cards/card-product-background';
import { MenuGroup } from '../../shared/model/product';

@Component({
  selector: 'ciu-menu',
  standalone: true,
  imports: [CommonModule, CardProductBackgroundComponent],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export default class MenuComponent {
  protected readonly menuItemList = signal<MenuGroup[]>([
    {
      name: 'Pizza',
      items: [
        {
          name: 'Cheese <span class="text-2xl">🧀</span> (Margherita)',
          description: 'Tomato sauce, Cheese-Mix, Basil',
          price: 8,
          image: 'pizza-king-cheese.png',
        },
        {
          name: 'Very Cheesey 🧀🧀',
          description: 'Tomato sauce, Cheese-Mix, Pesto, Parmesan, Basil',
          price: 8,
          image: 'pizza-king-cheese.png',
        },
        {
          name: 'King Cheese 🧀🧀🧀',
          description: 'Tomato sauce, Cheese-Mix, Burato, Pepper, Basil',
          price: 8,
          image: 'pizza-king-cheese.png',
        },
        {
          name: 'Prosciutto',
          description: 'Tomato sauce, Cheese-Mix, Ham, Pepper, Basil',
          price: 8,
          image: 'pizza-prosciutto.png',
        },
        {
          name: 'Prosciutto e Funghi',
          description:
            'Tomato sauce, Cheese-Mix, Ham, Mushrooms, Truffel-Oil, Basil',
          price: 8,
          image: 'pizza-prosciutto.png',
        },
        {
          name: 'Hawaii',
          description:
            'Tomato sauce, Cheese-Mix, Ham, Ananas, Basil',
          price: 8,
          image: 'pizza-king-cheese.png',
        },
      ],
    },
  ]);
}
