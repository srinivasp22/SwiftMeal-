
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function Card({ food }) {
  const { addToCart } = useCart();
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleAdd = () => {
    addToCart(food);
    setShowPopup(true);

  
    setTimeout(() => setShowPopup(false), 3000);
  };

  const goToCart = () => {
    navigate('/cart');
  };

  return (
    <div className="relative w-72 bg-white shadow-md rounded-2xl overflow-hidden border border-gray-200 transition-transform duration-300 hover:shadow-xl hover:scale-105">
      <div className="overflow-hidden h-44">
        <img
          src={food.image}
          alt={food.name}
          className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
        />
      </div>

      <div className="p-4 flex flex-col justify-between gap-2">
        <h3 className="text-xl font-semibold text-gray-800">{food.name}</h3>
        <p className="text-lg font-medium text-amber-600">₹{food.price}</p>

        <button
          onClick={handleAdd}
          className="mt-2 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-full transition-colors duration-300 shadow"
        >
          Add to Cart
        </button>
      </div>

      {showPopup && (
        <div className="absolute top-3 right-3 z-20 bg-white border border-amber-300 shadow-lg rounded-xl p-3 animate-fade-in text-center">
          <p className="text-sm text-gray-800 mb-2 font-medium">✅ Added to Cart</p>
          <button
            onClick={goToCart}
            className="text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-full transition duration-300 shadow"
          >
            Go to Cart →
          </button>
        </div>
      )}
    </div>
  );
}
