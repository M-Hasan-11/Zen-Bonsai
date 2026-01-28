import React from 'react';
import { Link } from 'react-router-dom';
import { HERO_IMAGE, CATEGORIES, PRODUCTS, ARTICLES } from '../data';

export const HomePage = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-[85vh] grid grid-cols-1 lg:grid-cols-2">
        <div className="order-2 lg:order-1 flex flex-col justify-center px-6 py-12 lg:px-20 xl:px-32 bg-background-dark">
          <div className="max-w-xl">
            <span className="text-primary font-bold tracking-wider uppercase text-xs mb-4 block">Est. 1984 — Kyoto Inspired</span>
            <h2 className="text-5xl md:text-6xl xl:text-7xl font-light text-white leading-[1.1] mb-6">
              Cultivate <br /> <span className="font-bold italic">Serenity.</span>
            </h2>
            <p className="text-text-muted text-lg md:text-xl leading-relaxed mb-10 font-body font-light max-w-md">
              Discover the ancient art of Bonsai. From beginner-friendly saplings to master-level specimen trees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/shop" className="h-14 px-8 rounded-lg bg-primary hover:bg-primary-hover text-white text-base font-bold transition-all duration-300 flex items-center justify-center gap-2 group">
                Start Your Journey
                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
              <Link to="/about" className="h-14 px-8 rounded-lg border border-[#2f3231] hover:border-primary/50 text-white text-base font-medium transition-all duration-300 flex items-center justify-center">
                View Gallery
              </Link>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2 relative h-[50vh] lg:h-auto w-full overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] hover:scale-105" style={{ backgroundImage: `url("${HERO_IMAGE}")` }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent lg:hidden"></div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="px-4 py-20 md:px-10 lg:px-20 max-w-[1400px] mx-auto w-full">
        <div className="flex items-end justify-between mb-10">
          <h3 className="text-3xl font-bold text-white">Explore Categories</h3>
          <Link to="/shop" className="hidden md:flex items-center gap-1 text-primary hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">
            All Collections <span className="material-symbols-outlined text-lg">arrow_right_alt</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {CATEGORIES.map((cat, idx) => (
            <Link key={idx} to={cat.link} className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url("${cat.image}")` }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8">
                <h4 className="text-2xl font-bold text-white mb-1 group-hover:translate-x-2 transition-transform">{cat.title}</h4>
                <p className="text-gray-300 text-sm font-body translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">{cat.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Trending Trees */}
      <section className="bg-surface-dark w-full py-24">
        <div className="px-4 md:px-10 lg:px-20 max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-4xl font-bold text-white mb-2">Trending Trees</h2>
              <p className="text-text-muted font-body">Curated selections from our master gardeners.</p>
            </div>
            <div className="flex gap-2">
               <button className="size-10 rounded-full border border-[#3f4241] flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-colors">
                  <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <button className="size-10 rounded-full border border-[#3f4241] flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-colors">
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.slice(0, 4).map((product) => (
              <Link to={`/product/${product.id}`} key={product.id} className="flex flex-col group cursor-pointer">
                <div className="relative aspect-square rounded-xl overflow-hidden bg-background-dark mb-4">
                  <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url("${product.image}")` }}></div>
                  <div className="absolute top-3 right-3 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white">
                    {product.age} Years
                  </div>
                  <button className="absolute bottom-4 right-4 size-10 bg-primary text-white rounded-full flex items-center justify-center translate-y-14 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-lg">
                    <span className="material-symbols-outlined text-[20px]">add</span>
                  </button>
                </div>
                <h3 className="text-lg font-bold text-white">{product.name}</h3>
                <p className="text-text-muted text-sm font-body mb-2">{product.latinName}</p>
                <p className="text-primary font-bold text-lg">${product.price.toFixed(2)}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="px-4 py-24 md:px-10 lg:px-20 max-w-[1400px] mx-auto w-full">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-primary font-bold tracking-wider uppercase text-xs mb-3 block">Expert Advice</span>
          <h2 className="text-4xl font-bold text-white mb-4">Bonsai Care</h2>
          <p className="text-text-muted font-body">Master the delicate balance of sunlight, water, and patience with our expert guides.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES.map((article) => (
            <Link to="/care" key={article.id} className="flex flex-col gap-4 group cursor-pointer">
              <div className="w-full aspect-video rounded-xl overflow-hidden bg-surface-dark relative">
                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url("${article.image}")` }}></div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-primary text-xs font-bold uppercase tracking-wider">{article.category}</span>
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{article.title}</h3>
                <p className="text-text-muted text-sm font-body line-clamp-2">{article.description}</p>
                <div className="inline-flex items-center gap-1 text-white text-sm font-bold mt-2 hover:underline decoration-primary">
                  Read Article <span className="material-symbols-outlined text-sm">arrow_outward</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="w-full bg-primary py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Join the Community</h2>
          <p className="text-white/80 font-body mb-8 max-w-xl mx-auto">Subscribe for weekly care tips, new arrival alerts, and exclusive access to our masterclass workshops.</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input className="flex-1 h-12 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 px-4 focus:outline-none focus:ring-2 focus:ring-white/50 font-body text-sm" placeholder="Enter your email address" type="email" />
            <button className="h-12 px-6 rounded-lg bg-white text-primary font-bold hover:bg-white/90 transition-colors" type="submit">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
};
