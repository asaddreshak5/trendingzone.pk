
import React from 'react';
import { View } from '../types';
import { BRAND_NAME } from '../constants';

interface NavbarProps {
  currentView: View;
  setView: (view: View) => void;
  cartCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, setView, cartCount }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setView(View.HOME)}>
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              T
            </div>
            <span className="text-xl font-extrabold tracking-tight text-gray-900 hidden sm:block">
              {BRAND_NAME}
            </span>
          </div>

          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => setView(View.HOME)}
              className={`${currentView === View.HOME ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-600 hover:text-indigo-600'} px-1 py-2 text-sm font-medium transition-colors`}
            >
              Home
            </button>
            <button 
              onClick={() => setView(View.SHOP)}
              className={`${currentView === View.SHOP ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-600 hover:text-indigo-600'} px-1 py-2 text-sm font-medium transition-colors`}
            >
              Shop
            </button>
            <button 
              onClick={() => setView(View.ABOUT)}
              className={`${currentView === View.ABOUT ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-600 hover:text-indigo-600'} px-1 py-2 text-sm font-medium transition-colors`}
            >
              About
            </button>
          </div>

          <div className="flex items-center space-x-4">
             <button 
              onClick={() => setView(View.CART)}
              className="relative p-2 text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <i className="fas fa-shopping-cart text-xl"></i>
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full ring-2 ring-white">
                  {cartCount}
                </span>
              )}
            </button>
            <button 
              onClick={() => setView(View.CONTACT)}
              className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-colors hidden sm:block shadow-lg shadow-indigo-200"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
