import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99,
    image: "https://via.placeholder.com/300x200.png?text=Headphones",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 149,
    image: "https://via.placeholder.com/300x200.png?text=Smart+Watch",
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: 49,
    image: "https://via.placeholder.com/300x200.png?text=Mouse",
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    price: 89,
    image: "https://via.placeholder.com/300x200.png?text=Keyboard",
  },
];

export default function ProductsPage() {
  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-gray-600">${product.price}</p>
              <Link
                href={`/products/${product.id}`}
                className="mt-4 inline-block bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
