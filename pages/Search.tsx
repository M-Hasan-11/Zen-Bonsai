import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { PRODUCTS } from '../data';

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const results = PRODUCTS.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.latinName.toLowerCase().includes(query.toLowerCase()) ||
    product.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="flex flex-col w-full min-h-screen pt-12 pb-24">
      <div className="px-4 md:px-10 lg:px-20 max-w-[1400px] mx-auto w-full">
        <div className="mb-10">
          <nav aria-label="Breadcrumb" className="flex text-sm font-body text-text-muted mb-4">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="material-symbols-outlined text-sm mx-1">chevron_right</span>
                  <span className="text-primary font-medium">Search</span>
                </div>
              </li>
            </ol>
          </nav>
          <span className="text-primary font-bold tracking-wider uppercase text-xs mb-2 block">Search Results</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            {query ? `"${query}"` : 'All Products'}
          </h1>
          <p className="text-text-muted mt-2">{results.length} result{results.length !== 1 && 's'} found</p>
        </div>

        {results.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {results.map((product) => (
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

                  <button className="absolute bottom-4 right-4 size-10 bg-primary text-white rounded-full flex items-center justify-center translate-y-14 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-lg hover:bg-white hover:text-primary z-10">
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
        ) : (
          <div className="bg-surface-dark border border-[#2f3231] rounded-xl p-12 text-center flex flex-col items-center max-w-2xl mx-auto">
            <span className="material-symbols-outlined text-6xl text-text-muted mb-4">search_off</span>
            <h3 className="text-xl font-bold text-white mb-2">No results found</h3>
            <p className="text-text-muted mb-8">We couldn't find any items matching your search. Try adjusting your terms or browse our collections.</p>
            <Link to="/shop" className="px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-hover transition-colors">View All Products</Link>
          </div>
        )}
      </div>
    </div>
  );
};