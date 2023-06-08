import { FoodCategory } from "./food.model";

export interface Topping {
  name: string;
  description: string;
  price: number;
  image: string;
  category: FoodCategory;
}
