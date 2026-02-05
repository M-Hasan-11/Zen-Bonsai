import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../data';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';

export const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // In a real app, find by id. For demo, we just use the first product if id doesn't match or specific one.
  const product = PRODUCTS.find(p => p.id === id) || PRODUCTS[1];
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, quantity);
    // Optional: Show toast or feedback
    navigate('/cart');
  };

  return (
    <div className="flex flex-col w-full">
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-10 py-6">
        <nav className="flex text-sm text-text-muted font-body">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-white transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-primary font-medium">{product.name}</span>
        </nav>
      </div>
      <section className="w-full max-w-[1400px] mx-auto px-4 md:px-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20">
          <div className="flex flex-col gap-6">
            <div className="relative w-full aspect-[4/5] md:aspect-square bg-surface-dark rounded-xl overflow-hidden group cursor-zoom-in">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url("${product.image}")` }}></div>
              <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Premium Collection</div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <button key={i} className={`relative aspect-square rounded-lg overflow-hidden border-2 ${i === 0 ? 'border-primary' : 'border-transparent hover:border-white/50 opacity-70 hover:opacity-100'} transition-all`}>
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url("${product.image}")` }}></div>
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col py-2">
            <div className="mb-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 font-display">{product.name}</h1>
              <p className="text-xl text-text-muted italic font-display">{product.latinName}</p>
            </div>
            <div className="flex items-center flex-wrap gap-6 mb-8 border-b border-white/10 pb-8">
              <p className="text-3xl font-bold text-primary">${product.price.toFixed(2)}</p>
              <div className="flex items-center gap-2">
                <span className="bg-surface-dark border border-white/10 text-white text-sm px-3 py-1 rounded-full">Age: {product.age} Years</span>
                <span className="bg-surface-dark border border-white/10 text-green-400 text-sm px-3 py-1 rounded-full flex items-center gap-1">
                  <span className="size-2 bg-green-500 rounded-full animate-pulse"></span> In Stock
                </span>
              </div>
              <div className="flex items-center gap-1 ml-auto md:ml-0">
                <span className="material-symbols-outlined text-yellow-500 text-[20px] filled">star</span>
                <span className="material-symbols-outlined text-yellow-500 text-[20px] filled">star</span>
                <span className="material-symbols-outlined text-yellow-500 text-[20px] filled">star</span>
                <span className="material-symbols-outlined text-yellow-500 text-[20px] filled">star</span>
                <span className="material-symbols-outlined text-yellow-500 text-[20px] filled">star_half</span>
                <span className="text-text-muted text-sm ml-1 underline cursor-pointer hover:text-white">(24 Reviews)</span>
              </div>
            </div>
            <div className="mb-8">
              <h3 className="text-white font-bold mb-3">Description</h3>
              <p className="text-text-muted font-body leading-relaxed">
                This exquisite {product.age}-year-old {product.name} features a graceful trunk movement and vibrant foliage that transforms through the seasons. Currently displaying deep color that will evolve beautifully. The tree is planted in a handmade Tokoname pot that complements its elegant stature.
              </p>
            </div>
            <div className="mb-10">
              <h3 className="text-white font-bold mb-4">Care Requirements</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-surface-dark border border-white/5 rounded-xl p-4 text-center group hover:border-primary/50 transition-colors">
                  <span className="material-symbols-outlined text-primary text-3xl mb-2">wb_twilight</span>
                  <p className="text-white text-sm font-bold">Light</p>
                  <p className="text-text-muted text-xs mt-1">Partial Shade</p>
                </div>
                <div className="bg-surface-dark border border-white/5 rounded-xl p-4 text-center group hover:border-primary/50 transition-colors">
                  <span className="material-symbols-outlined text-primary text-3xl mb-2">water_drop</span>
                  <p className="text-white text-sm font-bold">Water</p>
                  <p className="text-text-muted text-xs mt-1">Keep Moist</p>
                </div>
                <div className="bg-surface-dark border border-white/5 rounded-xl p-4 text-center group hover:border-primary/50 transition-colors">
                  <span className="material-symbols-outlined text-primary text-3xl mb-2">potted_plant</span>
                  <p className="text-white text-sm font-bold">Soil</p>
                  <p className="text-text-muted text-xs mt-1">Well-draining</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center h-14 bg-surface-dark rounded-lg border border-white/10 w-full sm:w-auto">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 text-text-muted hover:text-white transition-colors h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-l-lg"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <input
                  className="w-12 bg-transparent text-center text-white border-none focus:ring-0 font-bold p-0"
                  readOnly
                  type="text"
                  value={quantity}
                  aria-label="Quantity"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 text-text-muted hover:text-white transition-colors h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-r-lg"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
              <button onClick={handleAddToCart} className="flex-1 h-14 bg-primary hover:bg-primary-hover text-white font-bold text-lg rounded-lg shadow-lg shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">shopping_cart</span>
                Add to Cart
              </button>
            </div>
            <div className="border-t border-white/10">
              <button className="w-full flex items-center justify-between py-4 text-left group">
                <span className="text-white font-bold group-hover:text-primary transition-colors">Shipping Information</span>
                <span className="material-symbols-outlined text-text-muted group-hover:text-primary">add</span>
              </button>
              <button className="w-full flex items-center justify-between py-4 text-left border-t border-white/10 group">
                <span className="text-white font-bold group-hover:text-primary transition-colors">Satisfaction Guarantee</span>
                <span className="material-symbols-outlined text-text-muted group-hover:text-primary">add</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Section */}
      <section className="py-20 bg-background-dark">
        <div className="max-w-[1400px] mx-auto px-4 md:px-10">
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-3xl font-bold text-white">Related Specimens</h2>
            <Link to="/shop" className="hidden md:flex items-center gap-1 text-primary hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">
              View All <span className="material-symbols-outlined text-lg">arrow_right_alt</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.slice(3, 7).map((p) => (
              <Link to={`/product/${p.id}`} key={p.id} className="flex flex-col group cursor-pointer">
                <div className="relative aspect-square rounded-xl overflow-hidden bg-surface-dark mb-4">
                  <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url("${p.image}")` }}></div>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{p.name}</h3>
                <p className="text-white font-bold text-lg">${p.price.toFixed(2)}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    if (!user) {
      navigate('/auth');
      return;
    }
    setLoading(true);
    try {
      await addDoc(collection(db, "orders"), {
        userId: user.uid,
        items: cart,
        total: cartTotal,
        status: 'Processing',
        createdAt: new Date().toISOString()
      });
      clearCart();
      alert('Order placed successfully! (This is a simplified checkout)');
      navigate('/dashboard');
    } catch (error) {
      console.error("Error placing order: ", error);
      alert("Failed to place order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full min-h-screen pt-12 pb-24">
      <div className="px-4 md:px-10 lg:px-20 max-w-[1400px] mx-auto w-full">
        <h1 className="text-3xl font-bold text-white mb-8">Shopping Cart</h1>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1">
            {cart.length === 0 ? (
              <div className="bg-surface-dark border border-[#2f3231] rounded-xl p-12 text-center flex flex-col items-center">
                <span className="material-symbols-outlined text-6xl text-text-muted mb-4">shopping_basket</span>
                <h3 className="text-xl font-bold text-white mb-2">Your cart is empty</h3>
                <p className="text-text-muted mb-8">Looks like you haven't added any trees yet.</p>
                <Link to="/shop" className="px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-hover transition-colors">Start Shopping</Link>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4 p-4 bg-surface-dark border border-[#2f3231] rounded-xl">
                    <div className="size-24 rounded-lg bg-cover bg-center" style={{ backgroundImage: `url("${item.image}")` }}></div>
                    <div className="flex-1 flex justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-white">{item.name}</h3>
                        <p className="text-sm text-text-muted">{item.latinName}</p>
                        <p className="text-primary font-bold mt-2">${item.price.toFixed(2)}</p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-text-muted hover:text-red-400 focus:text-red-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background-dark rounded"
                          aria-label={`Remove ${item.name} from cart`}
                        >
                          <span className="material-symbols-outlined">delete</span>
                        </button>
                        <div className="flex items-center h-8 bg-background-dark rounded border border-white/10">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-2 text-text-muted hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-l"
                            aria-label={`Decrease quantity of ${item.name}`}
                          >
                            -
                          </button>
                          <span className="w-8 text-center text-white text-sm" aria-label="Quantity" role="status">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-2 text-text-muted hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-r"
                            aria-label={`Increase quantity of ${item.name}`}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="w-full lg:w-96">
            <div className="bg-surface-dark border border-[#2f3231] rounded-xl p-6">
              <h3 className="text-white font-bold mb-4">Order Summary</h3>
              <div className="flex justify-between text-text-muted mb-2 text-sm"><span>Subtotal</span><span>${cartTotal.toFixed(2)}</span></div>
              <div className="flex justify-between text-text-muted mb-4 text-sm"><span>Shipping</span><span>Free</span></div>
              <div className="border-t border-[#2f3231] pt-4 flex justify-between text-white font-bold text-lg mb-6"><span>Total</span><span>${cartTotal.toFixed(2)}</span></div>
              <button onClick={handleCheckout} disabled={cart.length === 0 || loading} className="w-full py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                {loading ? 'Processing...' : (user ? 'Checkout' : 'Sign in to Checkout')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}