import { Topping } from '../model/topping.model';
import { Bowl, FoodCategory, Pizza } from '../model/food.model';

export const foodCategories: FoodCategory[] = [
  {
    name: 'Breakfast',
    navDescription: 'Frühstück',
    headline: 'Warm & tasty',
    image: 'assets/images/menu/items/breakfast-croissant_600.png',
  },
  {
    name: 'Bowl',
    navDescription: 'Bowls',
    headline: 'Fresh & healthy',
    image: 'assets/images/menu/items/bowl-default.png',
  },
  {
    name: 'Pizza',
    navDescription: 'Pizza',
    headline: 'Hot & steamy',
    image: 'assets/images/menu/items/pizza-default.png',
  },
  {
    name: 'Pinsa',
    navDescription: 'Pinsa',
    headline: 'Hot & steamy',
    image: 'assets/images/menu/items/pizza-default.png',
  },
  {
    name: 'Vegan',
    navDescription: 'Vegane Gerichte',
    headline: 'Hot & steamy',
    image: 'assets/images/menu/items/pizza-default.png',
  },
];

export const pizzas: Array<Pizza> = [
  {
    name: 'Margherita',
    category: 'Pizza',
    description:
      'Die klassische Margherita-Pizza ist ein kulinarisches Meisterwerk aus dünnem Teig, reifen Tomaten, cremigem Mozzarella und frischem Basilikum – einfach köstlich!',
    price: 12,
    image: 'assets/images/menu/items/Pizza-margherita.png',
    contains: {
      vegan: true,
      gluten: true,
      heat: true,
      cheese: true,
    },
    tags: {},
    order: 1,
    toppings: [],
  },
  {
    name: 'Salami',
    category: 'Pizza',
    description:
      'Die herzhafte Pizza Salami verwöhnt den Gaumen mit großzügig belegter knuspriger Kruste, deftiger Salami und schmelzendem Mozzarella - ein wahrer Genuss für Salami-Liebhaber!',
    price: 14.9,
    image: 'assets/images/menu/items/Pizza-salami.png',
    contains: {
      gluten: true,
      beef: true,
      heat: true,
      cheese: true,
    },
    tags: {
      recommendation: true,
    },
    order: 2,
    toppings: [],
  },
  {
    name: 'Diavolo',
    category: 'Pizza',
    description:
      'Die pikante Pizza Diavolo ist ein scharfer Genuss mit würziger Salami, feuriger Peperoni und einer perfekten Mischung aus Aromen.',
    price: 14.9,
    image: 'assets/images/menu/items/Pizza-diavolo.png',
    contains: {
      gluten: true,
      beef: true,
      heat: true,
      hot: true,
      cheese: true,
    },
    tags: {},
    order: 3,
    toppings: [],
  },
  {
    name: 'Diavolo Picante',
    category: 'Pizza',
    description:
      'Die pikante Pizza Diavolo ist ein scharfer Genuss mit würziger Salami, feuriger Peperoni und einer perfekten Mischung aus Aromen.',
    price: 14.9,
    image: 'assets/images/menu/items/Pizza-diavolo-picante.png',
    contains: {
      gluten: true,
      beef: true,
      heat: true,
      hot: true,
      cheese: true,
    },
    tags: {},
    order: 4,
    toppings: [],
  },
  {
    name: 'Italian Delight',
    category: 'Pizza',
    description:
      'Die herzhafte Pizza Salami verwöhnt den Gaumen mit großzügig belegter knuspriger Kruste, deftiger Salami und schmelzendem Mozzarella - ein wahrer Genuss für Salami-Liebhaber!',
    price: 14.9,
    image: 'assets/images/menu/items/Pizza-italian-delight.png',
    contains: {
      gluten: true,
      heat: true,
      cheese: true,
    },
    tags: {
      deal: true,
    },
    order: 5,
    toppings: [],
  },
  {
    name: 'Haram Deluxe',
    category: 'Pizza',
    description:
      'Authentische Zutaten, gewürzt mit orientalischen Aromen, machen die "Haram"-Pizza zu einem geschmackvollen Gaumenschmaus.',
    price: 14.9,
    image: 'assets/images/menu/items/Pizza-haram-deluxe.png',
    contains: {
      gluten: true,
      heat: true,
      pork: true,
      cheese: true,
    },
    tags: {},
    order: 6,
    toppings: [],
  },
  {
    name: 'Thelicious',
    category: 'Pizza',
    description:
      'Diese köstliche Pizza ist mit einer knusprigen Kruste, saftigen Tomaten, würzigem Mozzarella, frischem Basilikum und herzhafter Salami belegt, was zu einer perfekten Kombination von Aromen und Texturen führt, die jeden Bissen zu einem Geschmackserlebnis macht.',
    price: 13.9,
    image: 'assets/images/menu/items/Pizza-default.png',
    contains: {
      gluten: true,
      heat: true,
      cheese: true,
    },
    tags: {
      new: true,
    },
    order: 7,
    toppings: [],
  },
];

export const bowls: Array<Bowl> = [
  {
    name: 'Tikki spicy beef',
    category: 'Bowl',
    description:
      'Unsere "Rind"-Bowl vereint zartes Rindfleisch, knackiges Gemüse und aromatische Gewürze zu einer schmackhaften und nahrhaften Mahlzeit voller Genuss.',
    price: 15.9,
    image: 'assets/images/menu/items/Bowl-tikki-spicy-beef.png',
    contains: {
      beef: true,
      egg: true,
      cheese: true,
    },
    tags: { recommendation: true },
    order: 1,
    toppings: [],
  },
  {
    name: 'Shaka spicy Tuna',
    category: 'Bowl',
    description:
      'Unsere "Scharfer Thunfisch"-Bowl ist eine kraftvolle Kombination aus feurigem Thunfisch, frischem Gemüse und exotischen Gewürzen, die eine unvergessliche Geschmacksexplosion liefert.',
    price: 13.9,
    image: 'assets/images/menu/items/Bowl-shaka-spicy-tuna.png',
    contains: {
      fish: true,
      egg: true,
      cheese: true,
    },
    tags: {},
    order: 2,
    toppings: [],
  },
  {
    name: 'Aloha spicy shrimp',
    category: 'Bowl',
    description:
      'Unsere "Garnelen"-Bowl begeistert mit saftigen Garnelen, knusprigem Gemüse und einer verlockenden Mischung aus exotischen Gewürzen für einen unvergleichlichen Genussmoment.',
    price: 14.9,
    image: 'assets/images/menu/items/Bowl-aloha-spicy-shrimp.png',
    contains: {
      shrimp: true,
      egg: true,
      cheese: true,
    },
    tags: { deal: true },
    order: 3,
    toppings: [],
  },
  {
    name: 'BALI BEACH Bowl',
    category: 'Bowl',
    description:
      'Unsere "Garnelen"-Bowl begeistert mit saftigen Garnelen, knusprigem Gemüse und einer verlockenden Mischung aus exotischen Gewürzen für einen unvergleichlichen Genussmoment.',
    price: 14.9,
    image: 'assets/images/menu/items/Bowl-chicken.png',
    contains: {
      beef: true,
      egg: true,
      cheese: true,
    },
    tags: { new: true },
    order: 4,
    toppings: [],
  },
];

export const toppingCategories: Topping['toppingCategory'][] = [
  'Vegetable',
  'Meat',
  'Fish',
  'Fruit',
  'Cheese',
  'Sauce',
  'Other',
];
