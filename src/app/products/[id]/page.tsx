interface ProductPageProps {
  params: { id: string };
}

const products = [
  { id: "1", name: "Laptop", price: 1200, description: "High-performance laptop for work & play." },
  { id: "2", name: "Headphones", price: 200, description: "Noise-cancelling wireless headphones." },
  { id: "3", name: "Keyboard", price: 100, description: "Mechanical keyboard with RGB lighting." },
  { id: "4", name: "Mouse", price: 50, description: "Wireless mouse with ergonomic design." },
  { id: "5", name: "Monitor", price: 300, description: "27-inch 4K monitor for productivity." },
];

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return <p className="p-6">Product not found.</p>;
  }

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-lg text-gray-700 mb-2">${product.price}</p>
      <p className="text-gray-600">{product.description}</p>
    </main>
  );
}
