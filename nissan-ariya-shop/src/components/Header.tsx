import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow-md w-full">
      {/* Full width header, but inner content centered */}
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/img/spreadlogo.png"
            alt="Logo"
            className="h-20 w-auto"
          />
        </Link>

        {/* Navigation */}
        <nav className="flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-500">Home</Link>
{/*           <Link to="/products/accessories" className="hover:underline">Accessories</Link>
          <Link to="/products/maintenance" className="hover:underline">Maintenance Parts</Link> */}
          <Link to="/about" className="hover:underline">About</Link>
        </nav>
      </div>
    </header>
  );
}
