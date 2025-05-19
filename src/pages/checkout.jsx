import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function Checkout() {
  const { cart } = useCart();
  const [form, setForm] = useState({
    name: '',
    number: '',
    location: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.number || !form.location) {
      alert('Please fill in all fields.');
      return;
    }

    alert(`Order placed!\nName: ${form.name}\nNumber: ${form.number}\nLocation: ${form.location}`);
    
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full border p-2 rounded"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="number"
          placeholder="Phone Number"
          className="w-full border p-2 rounded"
          value={form.number}
          onChange={handleChange}
        />
        <textarea
          name="location"
          placeholder="Delivery Address"
          className="w-full border p-2 rounded"
          value={form.location}
          onChange={handleChange}
        />

        <button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-white py-2 rounded">
          Place Order
        </button>
      </form>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Cart Summary</h3>
        {cart.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          <ul className="space-y-2">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between border p-2 rounded">
                <span>{item.name} × {item.qty}</span>
                <span>₹{item.price * item.qty}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
