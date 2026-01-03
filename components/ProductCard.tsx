
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (p: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="group bg-white rounded-2xl border border-gray-100 p-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative aspect-square mb-4 overflow-hidden rounded-xl bg-gray-50">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {product.isTrending && (
          <span className="absolute top-2 left-2 bg-indigo-600 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-widest">
            Trending
          </span>
        )}
      </div>
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold text-gray-900 line-clamp-1">{product.name}</h3>
        <span className="text-indigo-600 font-bold whitespace-nowrap">Rs. {product.price}</span>
      </div>
      <p className="text-sm text-gray-500 line-clamp-2 mb-4 h-10">
        {product.description}
      </p>
      <button 
        onClick={() => onAddToCart(product)}
        className="w-full py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 group-active:scale-95 transform"
      >
        <i className="fas fa-cart-plus"></i>
        Add to Cart
      </button>
    </div>
  );
};
