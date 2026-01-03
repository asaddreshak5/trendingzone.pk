
import React from 'react';
import { CartItem } from '../types';
import { CONTACT_PHONE } from '../constants';

interface CartProps {
  items: CartItem[];
  onRemove: (id: number) => void;
  onUpdateQty: (id: number, qty: number) => void;
  onClose: () => void;
}

export const Cart: React.FC<CartProps> = ({ items, onRemove, onUpdateQty, onClose }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    const itemStr = items.map(i => `${i.name} (x${i.quantity}) - Rs. ${i.price * i.quantity}`).join('\n');
    const message = encodeURIComponent(`Assalam o Alaikum! I want to order from TrendingZone.pk:\n\n${itemStr}\n\nTotal: Rs. ${total}\n\nPlease confirm my order.`);
    window.open(`https://wa.me/923366441941?text=${message}`, '_blank');
  };

  return (
    <div className="p-4 sm:p-8 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900">Your Shopping Cart</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-900"><i className="fas fa-times text-xl"></i></button>
      </div>

      {items.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
          <i className="fas fa-shopping-basket text-6xl text-gray-300 mb-4"></i>
          <p className="text-xl text-gray-500 font-medium">Your cart is empty!</p>
          <button 
            onClick={onClose}
            className="mt-6 px-8 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all"
          >
            Start Shopping
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map(item => (
              <div key={item.id} className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                <img src={item.image} alt={item.name} className="w-20 h-20 rounded-xl object-cover" />
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900">{item.name}</h4>
                  <p className="text-indigo-600 font-semibold">Rs. {item.price}</p>
                </div>
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => onUpdateQty(item.id, Math.max(1, item.quantity - 1))}
                    className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200"
                  >
                    <i className="fas fa-minus text-xs"></i>
                  </button>
                  <span className="font-bold w-4 text-center">{item.quantity}</span>
                  <button 
                    onClick={() => onUpdateQty(item.id, item.quantity + 1)}
                    className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200"
                  >
                    <i className="fas fa-plus text-xs"></i>
                  </button>
                </div>
                <button 
                  onClick={() => onRemove(item.id)}
                  className="p-2 text-red-400 hover:text-red-600"
                >
                  <i className="fas fa-trash-alt"></i>
                </button>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 text-white p-8 rounded-3xl h-fit">
            <h3 className="text-xl font-bold mb-6">Order Summary</h3>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-gray-400">
                <span>Subtotal</span>
                <span>Rs. {total}</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Delivery</span>
                <span className="text-green-400">FREE</span>
              </div>
              <div className="pt-4 border-t border-gray-800 flex justify-between font-bold text-xl">
                <span>Total</span>
                <span>Rs. {total}</span>
              </div>
            </div>
            <button 
              onClick={handleCheckout}
              className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95 mb-4"
            >
              <i className="fab fa-whatsapp text-xl"></i>
              Checkout via WhatsApp
            </button>
            <p className="text-[10px] text-gray-500 text-center">
              Secure payments & Direct communication with Ali Asad.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
