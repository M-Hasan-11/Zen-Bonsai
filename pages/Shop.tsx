import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../data';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';

export const ShopPage = () => {
  const { addToCart } = useCart();
  const { showToast } = useToast();

  const handleQuickAdd = (e: React.MouseEvent, product: any) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    showToast(`${product.name} added to cart`);
  };

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
                <Link to={`/product/${product.id}`} key={product.id} className="flex flex-col group cursor-pointer">
                  <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-surface-dark mb-4">
                    <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700" style={{ backgroundImage: `url("${product.image}")` }}></div>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>

                    {product.age && (
                      <div className="absolute top-3 right-3 bg-surface-dark/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white border border-white/10">
                        {product.age} Years
                      </div>
                    )}
                    {product.isBestSeller && (
                      <div className="absolute top-3 left-3 bg-primary px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg">
                        Best Seller
                      </div>
                    )}
                    {product.isSale && (
                      <div className="absolute top-3 left-3 bg-red-800/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg">
                        Sale
                      </div>
                    )}

                    <button onClick={(e) => handleQuickAdd(e, product)} aria-label={`Quick add ${product.name} to cart`} className="absolute bottom-4 right-4 size-10 bg-primary text-white rounded-full flex items-center justify-center translate-y-14 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-lg hover:bg-white hover:text-primary z-10 focus:translate-y-0 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary">
                      <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                    </button>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{product.name}</h3>
                  <p className="text-text-muted text-sm font-body mb-2 italic">{product.latinName}</p>
                  <div className="flex items-center gap-2">
                    <p className="text-primary font-bold text-lg">${product.price.toFixed(2)}</p>
                    {product.originalPrice && <p className="text-text-muted text-sm line-through decoration-white/30">${product.originalPrice.toFixed(2)}</p>}
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-16">
              <button aria-label="Previous page" className="size-10 flex items-center justify-center rounded-lg border border-[#3f4241] text-text-muted hover:border-primary hover:text-white transition-colors">
                <span className="material-symbols-outlined text-sm">chevron_left</span>
              </button>
              <button aria-label="Page 1" className="size-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold">1</button>
              <button aria-label="Page 2" className="size-10 flex items-center justify-center rounded-lg border border-[#3f4241] text-text-muted hover:border-primary hover:text-white transition-colors">2</button>
              <button aria-label="Page 3" className="size-10 flex items-center justify-center rounded-lg border border-[#3f4241] text-text-muted hover:border-primary hover:text-white transition-colors">3</button>
              <span className="text-text-muted px-2">...</span>
              <button aria-label="Next page" className="size-10 flex items-center justify-center rounded-lg border border-[#3f4241] text-text-muted hover:border-primary hover:text-white transition-colors">
                <span className="material-symbols-outlined text-sm">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};