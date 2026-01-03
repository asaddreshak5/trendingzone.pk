
export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  isTrending?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export enum View {
  HOME = 'home',
  SHOP = 'shop',
  ABOUT = 'about',
  CONTACT = 'contact',
  CART = 'cart'
}
