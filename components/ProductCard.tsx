import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onQuickAdd: (e: React.MouseEvent, product: Product) => void;
}

export const ProductCard = memo(({ product, onQuickAdd }: ProductCardProps) => {
  return (
    <Link to={`/product/${product.id}`} className="flex flex-col group cursor-pointer">
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

        <button
          onClick={(e) => onQuickAdd(e, product)}
          className="absolute bottom-4 right-4 size-10 bg-primary text-white rounded-full flex items-center justify-center translate-y-14 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-lg hover:bg-white hover:text-primary z-10"
          aria-label={`Quick add ${product.name} to cart`}
        >
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
  );
});

ProductCard.displayName = 'ProductCard';
