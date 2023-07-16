import { toppings } from '../constants';

export interface FoodCategory {
  name: 'Breakfast' | 'Pizza' | 'Bowl' | 'Vegan' | 'Pinsa';
  navDescription: string;
  headline: string;
  description?: string;
  image: string;
}

export interface Food {
  name: string;
  category: FoodCategory['name'];
  description: string;
  price: number;
  image: string;
  image_rect?: boolean;
  contains: Partial<Contains>;
  tags: Partial<Tags>;
  order: number;
  toppings: Name<typeof toppings>[];
  show_frontend?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Pizza extends Food {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Bowl extends Food {}

interface Contains {
  vegan: boolean;
  gluten: boolean;
  fish: boolean;
  shrimp: boolean;
  beef: boolean;
  pork: boolean;
  chicken: boolean;
  nuts: boolean;
  heat: boolean;
  egg: boolean;
  hot: boolean;
  cheese: boolean;
}

interface Tags {
  new: boolean;
  recommendation: boolean;
  deal: boolean;
  vegan: boolean;
}

type Name<T extends { name: string }[]> = T[number]['name'];
