
import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    navigate('/checkout');
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center border p-2 rounded mb-2">
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p>₹{item.price} × {item.qty}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button onClick={() => updateQuantity(item.id, item.qty - 1)} className="px-2 bg-gray-300">-</button>
                <span>{item.qty}</span>
                <button onClick={() => updateQuantity(item.id, item.qty + 1)} className="px-2 bg-gray-300">+</button>
                <button onClick={() => removeFromCart(item.id)} className="text-red-500">Remove</button>
              </div>
            </div>
          ))}

          <div className="text-right font-bold text-lg mt-4">Total: ₹{total}</div>

          <button
            onClick={handleCheckout}
            className="mt-4 w-full bg-amber-500 hover:bg-amber-600 text-white py-2 rounded"
          >
            Purchase
          </button>
        </>
      )}
    </div>
  );
}
