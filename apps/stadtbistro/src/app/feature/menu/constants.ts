import { Bowl, Pizza } from '../../shared/model/food.model';

export const pizzas: Array<Pizza> = [
  {
    name: 'Margherita',
    description:
      'Die klassische Margherita-Pizza ist ein kulinarisches Meisterwerk aus dünnem Teig, reifen Tomaten, cremigem Mozzarella und frischem Basilikum – einfach köstlich!',
    price: 12,
    image: 'assets/images/menu/items/pizza-margherita.png',
    contains: {
      vegan: true,
      gluten: true,
      heat: true,
      cheese: true,
    },
    tags: {},
  },
  {
    name: 'Salami',
    description:
      'Die herzhafte Pizza Salami verwöhnt den Gaumen mit großzügig belegter knuspriger Kruste, deftiger Salami und schmelzendem Mozzarella - ein wahrer Genuss für Salami-Liebhaber!',
    price: 14.9,
    image: 'assets/images/menu/items/pizza-salami.png',
    contains: {
      gluten: true,
      meat: true,
      heat: true,
      cheese: true,
    },
    tags: {
      recommendation: true,
    },
  },
  {
    name: 'Diavolo',
    description:
      'Die pikante Pizza Diavolo ist ein scharfer Genuss mit würziger Salami, feuriger Peperoni und einer perfekten Mischung aus Aromen.',
    price: 14.9,
    image: 'assets/images/menu/items/pizza-diavolo.png',
    contains: {
      gluten: true,
      meat: true,
      heat: true,
      hot: true,
      cheese: true,
    },
    tags: {},
  },
  {
    name: 'Diavolo Picante',
    description:
      'Die pikante Pizza Diavolo ist ein scharfer Genuss mit würziger Salami, feuriger Peperoni und einer perfekten Mischung aus Aromen.',
    price: 14.9,
    image: 'assets/images/menu/items/pizza-diavolo-picante.png',
    contains: {
      gluten: true,
      meat: true,
      heat: true,
      hot: true,
      cheese: true,
    },
    tags: {},
  },
  {
    name: 'Italian Delight',
    description:
      'Die herzhafte Pizza Salami verwöhnt den Gaumen mit großzügig belegter knuspriger Kruste, deftiger Salami und schmelzendem Mozzarella - ein wahrer Genuss für Salami-Liebhaber!',
    price: 14.9,
    image: 'assets/images/menu/items/pizza-italian-delight.png',
    contains: {
      gluten: true,
      heat: true,
      cheese: true,
    },
    tags: {
      deal: true,
    },
  },
  {
    name: 'Haram Deluxe',
    description:
      'Authentische Zutaten, gewürzt mit orientalischen Aromen, machen die "Haram"-Pizza zu einem geschmackvollen Gaumenschmaus.',
    price: 14.9,
    image: 'assets/images/menu/items/pizza-haram-deluxe.png',
    contains: {
      gluten: true,
      heat: true,
      cheese: true,
    },
    tags: {},
  },
  {
    name: 'Thelicious',
    description:
      'Diese köstliche Pizza ist mit einer knusprigen Kruste, saftigen Tomaten, würzigem Mozzarella, frischem Basilikum und herzhafter Salami belegt, was zu einer perfekten Kombination von Aromen und Texturen führt, die jeden Bissen zu einem Geschmackserlebnis macht.',
    price: 13.9,
    image: 'assets/images/menu/items/pizza-default.png',
    contains: {
      gluten: true,
      heat: true,
      cheese: true,
    },
    tags: {
      new: true,
    },
  },
];

export const bowls: Array<Bowl> = [
  {
    name: 'Tikki spicy beef',
    description:
      'Unsere "Rind"-Bowl vereint zartes Rindfleisch, knackiges Gemüse und aromatische Gewürze zu einer schmackhaften und nahrhaften Mahlzeit voller Genuss.',
    price: 15.9,
    image: 'assets/images/menu/items/bowl-tikki-spicy-beef.png',
    contains: {
      meat: true,
      egg: true,
      cheese: true,
    },
    tags: { recommendation: true },
  },
  {
    name: 'Shaka spicy Tuna',
    description:
      'Unsere "Scharfer Thunfisch"-Bowl ist eine kraftvolle Kombination aus feurigem Thunfisch, frischem Gemüse und exotischen Gewürzen, die eine unvergessliche Geschmacksexplosion liefert.',
    price: 13.9,
    image: 'assets/images/menu/items/bowl-shaka-spicy-tuna.png',
    contains: {
      fish: true,
      egg: true,
      cheese: true,
    },
    tags: {},
  },
  {
    name: 'Aloha spicy shrimp',
    description:
      'Unsere "Garnelen"-Bowl begeistert mit saftigen Garnelen, knusprigem Gemüse und einer verlockenden Mischung aus exotischen Gewürzen für einen unvergleichlichen Genussmoment.',
    price: 14.9,
    image: 'assets/images/menu/items/bowl-aloha-spicy-shrimp.png',
    contains: {
      shrimp: true,
      egg: true,
      cheese: true,
    },
    tags: { deal: true },
  },
  {
    name: 'BALI BEACH BOWL',
    description:
      'Unsere "Garnelen"-Bowl begeistert mit saftigen Garnelen, knusprigem Gemüse und einer verlockenden Mischung aus exotischen Gewürzen für einen unvergleichlichen Genussmoment.',
    price: 14.9,
    image: 'assets/images/menu/items/bowl-chicken.png',
    contains: {
      meat: true,
      egg: true,
      cheese: true,
    },
    tags: { new: true },
  },
];
