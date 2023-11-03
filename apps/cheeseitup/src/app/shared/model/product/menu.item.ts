export interface MenuGroup {
  name: string;
  items: MenuItem[];
}

export interface MenuItem {
  name: string;
  description: string;
  price: number;
  image: string;
}
