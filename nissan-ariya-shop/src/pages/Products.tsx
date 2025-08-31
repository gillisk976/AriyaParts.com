import { useState } from "react";
import { products } from "../data/products";
import { Link } from "react-router-dom";

export default function Products() {
  const [activeTab, setActiveTab] = useState<"accessories" | "maintenance">("accessories");

  const filteredProducts = products.filter(p => p.category === activeTab);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Products</h1>

      {/* Tabs */}
      <div className="flex gap-4 border-b mb-6">
        <button
          onClick={() => setActiveTab("accessories")}
          className={`pb-2 ${
            activeTab === "accessories" ? "border-b-2 border-blue-500 font-bold" : "text-gray-500"
          }`}
        >
          Accessories
        </button>
        <button
          onClick={() => setActiveTab("maintenance")}
          className={`pb-2 ${
            activeTab === "maintenance" ? "border-b-2 border-blue-500 font-bold" : "text-gray-500"
          }`}
        >
          Maintenance
        </button>
      </div>

      {/* Products grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <div key={product.id} className="border rounded p-4 shadow hover:shadow-lg transition">
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4" />
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-gray-600 mb-2">${product.price}</p>
            <Link to={`/product/${product.id}`} className="text-blue-500 underline">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
