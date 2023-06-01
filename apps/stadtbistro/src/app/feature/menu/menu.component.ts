import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodCardComponent } from './ui/food-card/food-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import { LogoComponent } from '../../shared/ui/logo/logo.component';
import { Bowl, Food, Pizza } from '../../shared/model/food.model';
import { HeroSliderComponent } from './ui/hero-slider/hero-slider.component';
import { bowls, pizzas } from './constants';

@Component({
  selector: 'sb-menu',
  standalone: true,
  imports: [
    CommonModule,
    LogoComponent,
    FoodCardComponent,
    FontAwesomeModule,
    HeroSliderComponent,
  ],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export default class MenuComponent {
  protected readonly expandCircleIcon = faAnglesDown;
  protected readonly pizzas: Array<Pizza> = pizzas;
  protected readonly bowls: Array<Bowl> = bowls;
}
