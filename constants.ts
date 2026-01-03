
import { Product } from './types';

export const BRAND_NAME = 'TrendingZone.pk';
export const OWNER_NAME = 'Ali Asad';
export const CONTACT_PHONE = '03366441941';
export const WHATSAPP_LINK = `https://wa.me/923366441941`;
export const FB_IG_HANDLE = 'trendingzone.pk';
export const STORE_URL = 'https://trendingzone.pk';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Ultra Pro Smartwatch Series 8",
    price: 4500,
    category: "Electronics",
    description: "Latest generation smart watch with heart rate monitoring, SPO2, and sleep tracking.",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=800",
    isTrending: true
  },
  {
    id: 2,
    name: "Noise Cancelling Wireless Earbuds",
    price: 3200,
    category: "Audio",
    description: "Premium sound quality with active noise cancellation and 24-hour battery life.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800",
    isTrending: true
  },
  {
    id: 3,
    name: "Sleek Minimalist Leather Wallet",
    price: 1500,
    category: "Fashion",
    description: "Genuine leather bifold wallet with RFID protection and slim design.",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=800",
    isTrending: false
  },
  {
    id: 4,
    name: "RGB Gaming Mouse G502",
    price: 2800,
    category: "Gaming",
    description: "High-precision optical sensor with customizable RGB lighting and 8 programmable buttons.",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=800",
    isTrending: true
  },
  {
    id: 5,
    name: "MagSafe Fast Charging Power Bank",
    price: 3800,
    category: "Mobile",
    description: "10000mAh portable charger with wireless magnetic charging for latest smartphones.",
    image: "https://images.unsplash.com/photo-1619441207978-3d326c46e2c9?auto=format&fit=crop&q=80&w=800",
    isTrending: false
  },
  {
    id: 6,
    name: "Premium Oversized Cotton T-Shirt",
    price: 1800,
    category: "Apparel",
    description: "Heavyweight 100% cotton tee for ultimate comfort and streetwear style.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800",
    isTrending: true
  }
];
