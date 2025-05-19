import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Checkout from './pages/checkout';

import { CartProvider } from './context/CartContext';

function App() {
  const location = useLocation();
  const hideFooter = ['/login', '/menu'].includes(location.pathname);

  return (
    <CartProvider>
      <div className="w-screen min-h-screen bg-yellow-50 px-4 text-yellow-500">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        {!hideFooter && <Footer />}
      </div>
    </CartProvider>
  );
}

export default App;
