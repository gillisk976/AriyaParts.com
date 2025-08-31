import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import { useState } from "react";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  const [currentImage, setCurrentImage] = useState(0);

  if (!product) {
    return <div className="p-6">Product not found.</div>;
  }

  return (
    <div className="bg-white shadow rounded p-6">
      {/* Back link */}
      <Link to="/" className="text-blue-500 underline">
        ← Back to Products
      </Link>

      {/* Title */}
      <h1 className="text-3xl font-bold mt-4 mb-6">{product.title}</h1>

      {/* Layout: Image + Video side by side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Image carousel */}
        <div className="flex flex-col items-center">
          <img
            src={product.images?.[currentImage] || product.image}
            alt={product.title}
            className="w-full max-w-md rounded shadow"
          />

          {/* Thumbnail selector */}
          {product.images && product.images.length > 1 && (
            <div className="flex gap-2 mt-4">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${product.title} ${index + 1}`}
                  className={`w-16 h-16 object-cover cursor-pointer rounded border ${
                    currentImage === index
                      ? "border-blue-500"
                      : "border-transparent"
                  }`}
                  onClick={() => setCurrentImage(index)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Video */}
        {product.video && (
          <div className="aspect-video w-full max-w-lg mx-auto">
            <iframe
              src={product.video}
              title={product.title}
              frameBorder="0"
              allowFullScreen
              className="w-full h-full rounded"
            ></iframe>
          </div>
        )}
      </div>

      {/* Description + Price */}
      <p className="mt-6 mb-4">{product.description}</p>
      <p className="text-xl font-semibold mb-6">${product.price}</p>

      {/* Amazon link */}
      <a
        href={product.amazonLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600"
      >
        Buy on Amazon
      </a>
    </div>
  );
}