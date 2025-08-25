const newProducts = [
  { id: 1, name: "Smartwatch", price: 250, img: "/p1.jpg" },
  { id: 2, name: "Gaming Chair", price: 500, img: "/p2.jpg" },
  { id: 3, name: "Bluetooth Speaker", price: 150, img: "/p3.jpg" },
  { id: 4, name: "Desk Lamp", price: 40, img: "/p4.jpg" },
];

export default function NewProducts() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Newly Available</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {newProducts.map((p) => (
          <div
            key={p.id}
            className="border rounded-lg p-4 hover:shadow-lg cursor-pointer"
          >
            <img
              src={p.img}
              alt={p.name}
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="mt-2 font-semibold">{p.name}</h3>
            <p className="text-gray-600">${p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
