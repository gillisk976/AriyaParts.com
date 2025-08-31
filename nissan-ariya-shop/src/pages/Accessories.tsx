import { products } from "../data/products";
import { Link } from "react-router-dom";

export default function Accessories() {
  const accessories = products.filter(p => p.category === "accessories");

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Accessories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {accessories.map(product => (
          <div key={product.id} className="border rounded p-4 shadow">
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4" />
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-gray-600">${product.price}</p>
            <Link to={`/product/${product.id}`} className="text-blue-500 underline">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
