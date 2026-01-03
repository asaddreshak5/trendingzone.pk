
import { Product } from './types';

export const BRAND_NAME = 'TrendingZone.pk';
export const OWNER_NAME = 'Ali Asad';
export const CONTACT_PHONE = '03366441941';
export const WHATSAPP_LINK = `https://wa.me/923366441941`;
export const FB_IG_HANDLE = 'trendingzone.pk';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Ultra Pro Smartwatch Series 8",
    price: 4500,
    category: "Electronics",
    description: "Latest generation smart watch with heart rate monitoring, SPO2, and sleep tracking.",
    image: "https://picsum.photos/seed/watch/600/600",
    isTrending: true
  },
  {
    id: 2,
    name: "Noise Cancelling Wireless Earbuds",
    price: 3200,
    category: "Audio",
    description: "Premium sound quality with active noise cancellation and 24-hour battery life.",
    image: "https://picsum.photos/seed/earbuds/600/600",
    isTrending: true
  },
  {
    id: 3,
    name: "Sleek Minimalist Leather Wallet",
    price: 1500,
    category: "Fashion",
    description: "Genuine leather bifold wallet with RFID protection and slim design.",
    image: "https://picsum.photos/seed/wallet/600/600",
    isTrending: false
  },
  {
    id: 4,
    name: "RGB Gaming Mouse G502",
    price: 2800,
    category: "Gaming",
    description: "High-precision optical sensor with customizable RGB lighting and 8 programmable buttons.",
    image: "https://picsum.photos/seed/mouse/600/600",
    isTrending: true
  },
  {
    id: 5,
    name: "MagSafe Fast Charging Power Bank",
    price: 3800,
    category: "Mobile",
    description: "10000mAh portable charger with wireless magnetic charging for latest smartphones.",
    image: "https://picsum.photos/seed/powerbank/600/600",
    isTrending: false
  },
  {
    id: 6,
    name: "Premium Oversized Cotton T-Shirt",
    price: 1800,
    category: "Apparel",
    description: "Heavyweight 100% cotton tee for ultimate comfort and streetwear style.",
    image: "https://picsum.photos/seed/shirt/600/600",
    isTrending: true
  }
];
