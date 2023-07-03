import { FoodCategory } from './food.model';

export interface Topping {
  name: string;
  description?: string;
  price?: number;
  image?: string;
  availableAsExtra?: boolean;
  category: FoodCategory['name'][];
  toppingCategory: ToppingCategory;
}

type ToppingCategory = 'Vegetable' | 'Fruit' | 'Meat' | 'Fish' | 'Cheese' | 'Sauce' | 'Other';
