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
    <div className="w-full md:w-4/5 mx-auto px-4 py-6">
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
            <div className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md">
              {/* Image */}
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-40 sm:h-48 md:h-56 object-cover transform group-hover:scale-105 transition duration-300"
              />
              {/* Overlay text */}
              <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white text-center py-2 backdrop-blur-sm">
                <p className="font-semibold text-sm sm:text-base">{cat.name}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
