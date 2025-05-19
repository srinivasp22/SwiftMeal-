
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-l from-orange-600 to-yellow-400 px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-4xl font-extrabold italic drop-shadow-lg">
        <Link to="/" className="inline-block transition-transform duration-300 hover:scale-110" style={{ fontFamily: 'Lobster, cursive' }}>
          <span className="bg-gradient-to-r from-yellow-300 via-orange-500 to-red-500 bg-clip-text text-transparent">Swift</span>
          <span className="text-white ml-1">Meal</span>
        </Link>
      </h1>

      <ul className="flex gap-6 text-white font-medium">
        <li className="hover:text-gray-200">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-gray-200">
          <Link to="/menu">Menu</Link>
        </li>
        <li className="hover:text-gray-200">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="hover:text-gray-200">
          <Link to="/login" style={{ margin: '0 1rem' }}>Login</Link>
        </li>
      </ul>
    </nav>
  );
}
