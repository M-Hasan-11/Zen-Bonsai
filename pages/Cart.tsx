import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';

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
                        <button onClick={() => removeFromCart(item.id)} className="text-text-muted hover:text-red-400"><span className="material-symbols-outlined">delete</span></button>
                        <div className="flex items-center h-8 bg-background-dark rounded border border-white/10">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 text-text-muted hover:text-white">-</button>
                          <span className="w-8 text-center text-white text-sm">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 text-text-muted hover:text-white">+</button>
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
