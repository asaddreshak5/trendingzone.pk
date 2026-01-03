
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { Cart } from './components/Cart';
import { AIShopAssistant } from './components/AIShopAssistant';
import { View, Product, CartItem } from './types';
import { PRODUCTS, BRAND_NAME, CONTACT_PHONE, OWNER_NAME, FB_IG_HANDLE } from './constants';

const App: React.FC = () => {
  const [currentView, setView] = useState<View>(View.HOME);
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    // Visual feedback
    alert(`${product.name} added to cart!`);
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCart(prev => prev.map(item => 
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const renderContent = () => {
    switch (currentView) {
      case View.HOME:
        return (
          <main>
            <Hero onShopClick={() => setView(View.SHOP)} />
            <section className="py-20 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4 text-center md:text-left">
                  <div>
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Trending Now 🔥</h2>
                    <p className="text-gray-500">Discover our most popular products this week.</p>
                  </div>
                  <button 
                    onClick={() => setView(View.SHOP)}
                    className="text-indigo-600 font-bold hover:underline flex items-center gap-1"
                  >
                    View All Products <i className="fas fa-arrow-right text-xs"></i>
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {PRODUCTS.filter(p => p.isTrending).map(product => (
                    <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
                  ))}
                </div>
              </div>
            </section>
          </main>
        );
      case View.SHOP:
        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-8">Full Catalog</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PRODUCTS.map(product => (
                <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
              ))}
            </div>
          </div>
        );
      case View.CART:
        return (
          <Cart 
            items={cart} 
            onRemove={removeFromCart} 
            onUpdateQty={updateQuantity} 
            onClose={() => setView(View.HOME)} 
          />
        );
      case View.ABOUT:
        return (
          <div className="max-w-4xl mx-auto px-4 py-20 text-center">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-8">About {BRAND_NAME}</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              Owned and managed by <strong>{OWNER_NAME}</strong>, {BRAND_NAME} started with a vision to bring 
              genuine, high-quality, and trending products to the people of Pakistan. 
              We believe in honesty, transparency, and superior customer service.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100">
                <i className="fas fa-award text-4xl text-indigo-600 mb-4"></i>
                <h4 className="font-bold mb-2">Authentic</h4>
                <p className="text-sm text-gray-500">100% Original products sourced from top brands.</p>
              </div>
              <div className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100">
                <i className="fas fa-truck-fast text-4xl text-indigo-600 mb-4"></i>
                <h4 className="font-bold mb-2">Speedy</h4>
                <p className="text-sm text-gray-500">Fast shipping across all major cities of Pakistan.</p>
              </div>
              <div className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100">
                <i className="fas fa-heart text-4xl text-indigo-600 mb-4"></i>
                <h4 className="font-bold mb-2">Friendly</h4>
                <p className="text-sm text-gray-500">Direct WhatsApp support for every order.</p>
              </div>
            </div>
          </div>
        );
      case View.CONTACT:
        return (
          <div className="max-w-7xl mx-auto px-4 py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-[40px] p-8 sm:p-16 shadow-2xl shadow-indigo-100">
              <div>
                <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Let's Connect</h2>
                <p className="text-gray-600 mb-8 text-lg">
                  Have a question about a product or your order? Ali Asad is personally here to help you.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all">
                      <i className="fab fa-whatsapp text-xl"></i>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">WhatsApp / Call</p>
                      <p className="font-bold text-lg">{CONTACT_PHONE}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-pink-50 text-pink-600 rounded-2xl flex items-center justify-center group-hover:bg-pink-600 group-hover:text-white transition-all">
                      <i className="fab fa-instagram text-xl"></i>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Instagram / Facebook</p>
                      <p className="font-bold text-lg">@{FB_IG_HANDLE}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-6">Quick Enquiry</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <input type="text" placeholder="Your Name" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  <input type="email" placeholder="Email Address" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  <textarea placeholder="Message" rows={4} className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
                  <button className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        currentView={currentView} 
        setView={setView} 
        cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} 
      />
      
      <div className="flex-grow">
        {renderContent()}
      </div>

      <AIShopAssistant />

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                 <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">T</div>
                 <span className="text-2xl font-bold">{BRAND_NAME}</span>
              </div>
              <p className="text-gray-400 max-w-sm">
                Your one-stop shop for everything trending. Owned by {OWNER_NAME}, delivering excellence across Pakistan.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><button onClick={() => setView(View.HOME)}>Home</button></li>
                <li><button onClick={() => setView(View.SHOP)}>Products</button></li>
                <li><button onClick={() => setView(View.ABOUT)}>About Us</button></li>
                <li><button onClick={() => setView(View.CONTACT)}>Contact</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href={`https://facebook.com/${FB_IG_HANDLE}`} target="_blank" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors"><i className="fab fa-facebook-f"></i></a>
                <a href={`https://instagram.com/${FB_IG_HANDLE}`} target="_blank" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors"><i className="fab fa-instagram"></i></a>
                <a href={`https://wa.me/923366441941`} target="_blank" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"><i className="fab fa-whatsapp"></i></a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-xs">
            © {new Date().getFullYear()} {BRAND_NAME} Official. Managed by {OWNER_NAME}. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
