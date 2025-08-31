import { Link } from "react-router-dom";
import { products } from "../data/products";

function Home() {
  return (
    <div className="flex flex-col gap-6">
      {/* Banner */}
      <div>
        <img
          src="/img/AriyaBannerBoulderNissan4.png"
          alt="Nissan Ariya Banner"
          className="w-full rounded shadow-md"
        />
      </div>

      {/* Product Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md p-4 hover:shadow-lg transition-shadow"
          >
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h2 className="text-xl font-semibold">{product.title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
