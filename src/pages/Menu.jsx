// src/pages/Menu.jsx
import React from 'react';
import Card from '../components/Card';
import { useCart } from '../context/CartContext';


const menuItems = [
  { id: 1, name: 'Veg Burger', price: 89, image: 'hamburger.webp' },
  { id: 2, name: 'Chicken biryani', price: 180, image: '68b1e-bangalore-biryani.webp' },
  { id: 3, name: 'Mutton biryani', price: 249, image: '360_F_415974134_fUfie2ITvn4LkBpBXb7vfOKPg0Yqyr2U.webp' },
  { id: 4, name: 'Margherita Pizza', price: 159, image: 'indian-paneer-pizza.webp' },
  { id: 5, name: 'Coka Cola', price: 39, image: 'classical-coca-cola-bottle.webp' },
  { id: 6, name: 'Pepsi', price: 59, image: '360_F_464207692_L91FrHNbeXyT8ZD1WIXMNe08jsJKJ1Kq.jpg' },
  { id: 7, name: 'Sprite', price: 59, image: 'sprite-soda.webp' },
  { id: 8, name: 'BBQ Chicken Pizza', price: 249, image: '360_F_43305716_HHkHdb36J6GB9XcturECuWDxVHdRgNsn.webp' },
  { id: 9, name: 'chocolate brownie', price: 69, image: 'brownie.webp' },
   { id: 10, name: 'Chicken Burger', category: 'Burgers', price: 159, image: '/chicken-burger.webp' },
    { id: 11, name: 'Chocolate Lava Cake', category: 'Desserts', price: 69, image: '/360_F_1423532362_gy9T4rjrBPUxsB5t925HoLQY3aAKceOY.webp' },
    { id: 12, name: 'Fanta', category: 'Drinks', price: 59, image: '/fanta.webp' },
      { id: 13, name: 'Veg biryani', price: 100, image: '/indian-vegetable-pulav-biryani-made-using-basmati-rice-served-terracotta-bowl-selective-focus_466689-55615.webp' },
       { id: 14, name: 'Burger Meals', category: 'Burgers', price: 159, image: '/360_F_698470208_RRblsEDsd1VWqwRsMu9SQ6Xq2CAa3wyR.webp' },
         { id: 15, name: 'French fries', category: 'Snacks', price: 59, image: '/French fries.webp' },
     { id: 16, name: 'Samosa (2 pcs)', category: 'Snacks', price: 35, image: '/Samosa.webp' },
      { id: 17, name: 'Golden brown fried chicken drumsticks(1 pcs)', category: 'Snacks', price: 79, image: '/Golden brown fried chicken drumsticks.jpg' },
  
];

export default function Menu() {
  const { addToCart } = useCart();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Menu</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {menuItems.map((item) => (
          <Card key={item.id} food={item} onAdd={addToCart} />
        ))}
      </div>
      
    </div>
  );
}
