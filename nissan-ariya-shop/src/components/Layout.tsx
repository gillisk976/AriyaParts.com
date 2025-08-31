import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type LayoutProps = { children: ReactNode };

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen w-full bg-stone-600 font-sans">
      {/* Header (stretches full width, background white) */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/img/spreadlogo.png" alt="Logo" className="h-20 w-auto" />
          </Link>
          <nav className="flex items-center space-x-6 text-xl font-semibold">
            <Link to="/" className="text-gray-700 hover:text-blue-200">Home</Link>
            {/* <Link to="/products/accessories" className="hover:underline">Accessories</Link>
            <Link to="/products/maintenance" className="hover:underline">Maintenance Parts</Link> */}
            <Link to="/about" className="hover:underline">About</Link>
          </nav>
        </div>
      </header>

      {/* Main content (centered, but background stretches full width) */}
      <main className="w-full flex justify-center">
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
}
