import { toppings } from '../../feature/menu/constants';

export type FoodCategory = 'Pizza' | 'Bowl';

export interface Food {
  name: string;
  category: FoodCategory;
  description: string;
  price: number;
  image: string;
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
  heat: boolean;
  egg: boolean;
  hot: boolean;
  cheese: boolean;
}

interface Tags {
  new: boolean;
  recommendation: boolean;
  deal: boolean;
}

type Name<T extends { name: string }[]> = T[number]['name'];
