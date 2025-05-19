
import React, { useState } from 'react';
import Card from '../components/Card';
import { useCart } from '../context/CartContext';
import Hero from '../components/Hero';


export default function Home() {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const popularItems = [
    { id: 1, name: 'Veg Burger', price: 89, image: 'hamburger.webp' },
    { id: 2, name: 'Chicken biryani', category: 'Biryani', price: 180, image: '/68b1e-bangalore-biryani.webp' },
    { id: 3, name: 'Mutton biryani', category: 'Biryani', price: 249, image: '/360_F_415974134_fUfie2ITvn4LkBpBXb7vfOKPg0Yqyr2U.webp' },
    { id: 4, name: 'Peppy Paneer Pizza', category: 'Pizzas', price: 199, image: '/indian-paneer-pizza.webp' },
    { id: 5, name: 'Coca Cola', category: 'Drinks', price: 49, image: '/classical-coca-cola-bottle.webp' },
    { id: 6, name: 'Pepsi', category: 'Drinks', price: 59, image: '/360_F_464207692_L91FrHNbeXyT8ZD1WIXMNe08jsJKJ1Kq.jpg' },
    { id: 7, name: 'Sprite', category: 'Drinks', price: 59, image: '/sprite-soda.webp' },
    { id: 8, name: 'BBQ Chicken Pizza', category: 'Pizzas', price: 249, image: '/360_F_43305716_HHkHdb36J6GB9XcturECuWDxVHdRgNsn.webp' },
    { id: 9, name: 'Chocolate Brownie', category: 'Desserts', price: 69, image: '/brownie.webp' },
    { id: 10, name: 'Chicken Burger', category: 'Burgers', price: 159, image: '/chicken-burger.webp' },
    { id: 11, name: 'Chocolate Lava Cake', category: 'Desserts', price: 69, image: '/360_F_1423532362_gy9T4rjrBPUxsB5t925HoLQY3aAKceOY.webp' },
    { id: 12, name: 'Fanta', category: 'Drinks', price: 59, image: '/fanta.webp' },
    { id: 13, name: 'Veg biryani', price: 100, image: '/indian-vegetable-pulav-biryani-made-using-basmati-rice-served-terracotta-bowl-selective-focus_466689-55615.webp' },
     { id: 14, name: 'Burger Meals', category: 'Burgers', price: 199, image: '360_F_698470208_RRblsEDsd1VWqwRsMu9SQ6Xq2CAa3wyR.webp' },
     { id: 15, name: 'French fries', category: 'Snacks', price: 59, image: '/French fries.webp' },
     { id: 16, name: 'Samosa (2 pcs)', category: 'Snacks', price: 35, image: '/Samosa.webp' },
      { id: 17, name: 'Golden brown fried chicken drumsticks(1 pcs)', category: 'Snacks', price: 79, image: '/Golden brown fried chicken drumsticks.jpg' },
  ];

  const filteredItems = selectedCategory
    ? popularItems.filter(item => item.category === selectedCategory)
    : popularItems;

  return (
    <div className="p-4 space-y-6">
      
      <Hero />

      <div className="bg-red-500 text-white text-center py-3 px-4 shadow-md">
        <p className="text-lg font-bold tracking-wide">
          🔥 <span className="underline underline-offset-4">20% Off on All Orders Today!</span>
        </p>
        <p className="text-md mt-1">
          Use code: <span className="font-extrabold text-yellow-300">FOODIE20</span>
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Food Categories</h2>
        <div className="flex gap-2 flex-wrap">
          {['Burgers', 'Biryani', 'Pizzas', 'Drinks', 'Desserts','Snacks'].map(cat => (
            <span
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`cursor-pointer bg-white text-black px-3 py-1 rounded-full shadow-sm transition duration-200 ${
                selectedCategory === cat ? 'bg-yellow-300 font-semibold' : ''
              }`}
            >
              {cat}
            </span>
          ))}
        </div>

        {selectedCategory && (
          <button
            onClick={() => setSelectedCategory(null)}
            className="text-sm text-blue-600 underline mt-2"
          >
            Show All Items
          </button>
        )}
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Popular Items</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {filteredItems.map(item => (
            <Card key={item.id} food={item} onAdd={addToCart} />
          ))}
        </div>
      </div>
    </div>
  );
}
