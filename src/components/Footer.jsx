import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-amber-400 py-8 px-4">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm md:text-base">
    
    {/* Useful Links */}
    <div className="flex flex-col">
      <h3 className="font-bold text-lg mb-2">Useful Links</h3>
      <ul className="space-y-1">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to="/menu" className="hover:underline">Menu</Link></li>
        <li><Link to="/cart" className="hover:underline">Cart</Link></li>
        <li><Link to="/checkout" className="hover:underline">Checkout</Link></li>
      </ul>
    </div>

    {/* Contact Info */}
    <div className="flex flex-col">
      <h3 className="font-bold text-lg mb-2">Contact Us</h3>
      <p>Email: support@foodieapp.com</p>
      <p>Phone: +91 98765 43210</p>
      <p>Address: 123 Foodie Street, Bengaluru, IN</p>
    </div>

    {/* About Us */}
    <div className="flex flex-col">
      <h3 className="font-bold text-lg mb-2">About Us</h3>
      <p>
        SwiftMeal is your go-to platform for fast and delicious food delivery.
        We connect foodies with their favorite restaurants quickly and reliably.
      </p>
    </div>

    {/* Social Media */}
    <div className="flex flex-col items-start md:items-end pr-2">
      <h3 className="font-bold text-lg mb-2">Follow Us</h3>
      <div className="flex space-x-4 mt-2">
        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-amber-300"><FaFacebookF /></a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-amber-300"><FaInstagram /></a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-amber-300"><FaTwitter /></a>
      </div>
    </div>

  </div>
</footer>

  );
};

export default Footer;
