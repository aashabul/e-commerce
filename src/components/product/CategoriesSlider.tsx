"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const categories = [
  { id: 1, name: "Electronics", img: "/cat-electronics.jpg" },
  { id: 2, name: "Fashion", img: "/cat-fashion.jpg" },
  { id: 3, name: "Home", img: "/cat-home.jpg" },
  { id: 4, name: "Sports", img: "/cat-sports.jpg" },
  { id: 5, name: "Books", img: "/cat-books.jpg" },
];

export default function CategoriesSlider() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Shop by Category</h2>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        navigation
      >
        {categories.map((cat) => (
          <SwiperSlide key={cat.id}>
            <div className="border rounded-lg p-4 flex flex-col items-center hover:shadow-lg cursor-pointer">
              <img
                src={cat.img}
                alt={cat.name}
                className="w-32 h-32 object-cover rounded"
              />
              <p className="mt-2 font-semibold">{cat.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
