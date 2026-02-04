import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../data';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { ProductCard } from '../components/ProductCard';

export const ShopPage = () => {
  const { addToCart } = useCart();
  const { showToast } = useToast();

  const handleQuickAdd = useCallback((e: React.MouseEvent, product: any) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    showToast(`${product.name} added to cart`);
  }, [addToCart, showToast]);

  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="bg-surface-dark border-b border-[#2f3231] pt-8 pb-8">
        <div className="px-4 md:px-10 lg:px-20 max-w-[1400px] mx-auto w-full">
          <nav aria-label="Breadcrumb" className="flex text-sm font-body text-text-muted mb-4">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="material-symbols-outlined text-sm mx-1">chevron_right</span>
                  <span className="text-primary font-medium">Shop</span>
                </div>
              </li>
            </ol>
          </nav>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Outdoor Specimens</h1>
              <p className="text-text-muted font-body text-sm max-w-2xl">Hardy trees cultivated to thrive in natural seasonal cycles. Perfect for gardens, patios, and balconies.</p>
            </div>
            <div className="relative group min-w-[180px]">
              <button className="w-full flex items-center justify-between gap-2 px-4 py-2.5 bg-background-dark border border-[#3f4241] rounded-lg text-sm text-white hover:border-primary transition-colors">
                <span>Sort by: Featured</span>
                <span className="material-symbols-outlined text-lg">expand_more</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-10 lg:px-20 max-w-[1400px] mx-auto w-full py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 flex-shrink-0 space-y-8">
            <div className="lg:hidden">
              <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-surface-dark border border-[#3f4241] rounded-lg text-white font-medium">
                <span className="material-symbols-outlined">filter_list</span>
                Show Filters
              </button>
            </div>
            <div className="hidden lg:block space-y-8 pr-4 border-r border-[#2f3231]/0 lg:border-[#2f3231]/50">
              {/* Species Filter */}
              <div>
                <h3 className="text-white font-bold mb-4 flex items-center justify-between">
                  Species
                  <span className="material-symbols-outlined text-text-muted text-sm">remove</span>
                </h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative flex items-center">
                      <input type="checkbox" className="peer size-4 appearance-none rounded border border-text-muted/40 bg-transparent checked:bg-primary checked:border-primary focus:ring-0 focus:ring-offset-0 transition-all" />
                      <span className="material-symbols-outlined absolute text-white text-[12px] opacity-0 peer-checked:opacity-100 pointer-events-none left-0.5 top-0.5">check</span>
                    </div>
                    <span className="text-sm text-text-muted group-hover:text-white font-body transition-colors">Evergreen</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative flex items-center">
                      <input type="checkbox" defaultChecked className="peer size-4 appearance-none rounded border border-text-muted/40 bg-transparent checked:bg-primary checked:border-primary focus:ring-0 focus:ring-offset-0 transition-all" />
                      <span className="material-symbols-outlined absolute text-white text-[12px] opacity-0 peer-checked:opacity-100 pointer-events-none left-0.5 top-0.5">check</span>
                    </div>
                    <span className="text-sm text-white font-body transition-colors">Deciduous</span>
                  </label>
                </div>
              </div>
              <hr className="border-[#2f3231]" />
              {/* Price Filter */}
              <div>
                <h3 className="text-white font-bold mb-4 flex items-center justify-between">
                  Price Range
                </h3>
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-surface-dark border border-[#3f4241] rounded px-3 py-2 flex-1">
                    <span className="text-xs text-text-muted block mb-0.5">Min</span>
                    <div className="flex items-center text-sm text-white"><span className="mr-1">$</span>50</div>
                  </div>
                  <span className="text-text-muted">-</span>
                  <div className="bg-surface-dark border border-[#3f4241] rounded px-3 py-2 flex-1">
                    <span className="text-xs text-text-muted block mb-0.5">Max</span>
                    <div className="flex items-center text-sm text-white"><span className="mr-1">$</span>2500</div>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {PRODUCTS.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onQuickAdd={handleQuickAdd}
                />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-16">
              <button className="size-10 flex items-center justify-center rounded-lg border border-[#3f4241] text-text-muted hover:border-primary hover:text-white transition-colors">
                <span className="material-symbols-outlined text-sm">chevron_left</span>
              </button>
              <button className="size-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold">1</button>
              <button className="size-10 flex items-center justify-center rounded-lg border border-[#3f4241] text-text-muted hover:border-primary hover:text-white transition-colors">2</button>
              <button className="size-10 flex items-center justify-center rounded-lg border border-[#3f4241] text-text-muted hover:border-primary hover:text-white transition-colors">3</button>
              <span className="text-text-muted px-2">...</span>
              <button className="size-10 flex items-center justify-center rounded-lg border border-[#3f4241] text-text-muted hover:border-primary hover:text-white transition-colors">
                <span className="material-symbols-outlined text-sm">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
