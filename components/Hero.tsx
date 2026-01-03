
import React from 'react';
import { View } from '../types';
import { BRAND_NAME } from '../constants';

interface HeroProps {
  onShopClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onShopClick }) => {
  return (
    <section className="relative bg-white overflow-hidden py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Upgrade Your Lifestyle with <span className="text-indigo-600">{BRAND_NAME}</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
            Pakistan's favorite zone for trending electronics, premium fashion, and unique gadgets. 
            Quality products delivered right to your doorstep.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button 
              onClick={onShopClick}
              className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl shadow-xl shadow-indigo-200 hover:bg-indigo-700 transform transition-all active:scale-95"
            >
              Explore Shop
            </button>
            <a 
              href="https://wa.me/923366441941"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-indigo-600 border-2 border-indigo-600 font-bold rounded-xl hover:bg-indigo-50 transition-all flex items-center justify-center gap-2"
            >
              <i className="fab fa-whatsapp text-xl"></i>
              Chat with Us
            </a>
          </div>
          <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1"><i className="fas fa-check-circle text-green-500"></i> Fast Delivery</span>
            <span className="flex items-center gap-1"><i className="fas fa-check-circle text-green-500"></i> Quality Assurance</span>
            <span className="flex items-center gap-1"><i className="fas fa-check-circle text-green-500"></i> 24/7 Support</span>
          </div>
        </div>
        <div className="lg:w-1/2 relative">
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
            <img 
              src="https://picsum.photos/seed/store/800/600" 
              alt="Trending Products" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-indigo-100 rounded-full blur-3xl -z-10 opacity-60"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-purple-100 rounded-full blur-3xl -z-10 opacity-60"></div>
        </div>
      </div>
    </section>
  );
};
