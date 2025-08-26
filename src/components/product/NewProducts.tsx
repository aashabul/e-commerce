"use client";

import { Heart, ShoppingCart } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const newProducts = [
  { id: 1, name: "Smartwatch", price: 250, discount: 199, img: "/p1.jpg" },
  { id: 2, name: "Gaming Chair", price: 500, discount: 420, img: "/p2.jpg" },
  { id: 3, name: "Bluetooth Speaker", price: 150, discount: 120, img: "/p3.jpg" },
  { id: 4, name: "Desk Lamp", price: 40, discount: 30, img: "/p4.jpg" },
   { id: 5, name: "Desk Lamp", price: 40, discount: 30, img: "/p2.jpg" },
   { id: 6, name: "Desk Lamp", price: 40, discount: 30, img: "/p3.jpg" },
];

export default function NewProducts() {
  return (
    <div className="w-full md:w-4/5 mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Newly Available
      </h2>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        navigation
      >
        {newProducts.map((p) => (
          <SwiperSlide key={p.id}>
  <div className="h-full flex">
    <div className="bg-white rounded-xl overflow-hidden group flex flex-col w-full">
      {/* Image */}
      <div className="relative w-full h-40 sm:h-48 overflow-hidden">
        <img
          src={p.img}
          alt={p.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
        />

        {/* Wishlist Button */}
       <button className="absolute top-3 right-3 p-2 rounded-full bg-white hover:bg-[#DA2633] transition">
  <Heart className="w-5 h-5 text-[#DA2633] hover:text-white" />
</button>

      </div>

      {/* Info */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-semibold text-lg text-gray-800 group-hover:text-indigo-600 transition">
          {p.name}
        </h3>

        {/* Prices */}
        <div className="flex items-center gap-2 mt-1">
          <p className="text-gray-400 line-through text-sm">${p.price}</p>
          <p className="text-[#DA2633] font-bold text-base">${p.discount}</p>
        </div>

        {/* Add to Cart */}
        <button className="mt-auto w-full flex items-center justify-center gap-2 bg-[#DA2633] text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-red-700 transition">
  <ShoppingCart className="w-4 h-4" />
  Add to Cart
</button>
      </div>
    </div>
  </div>
</SwiperSlide>

        ))}
      </Swiper>
    </div>
  );
}
