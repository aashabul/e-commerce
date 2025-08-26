"use client";

import Image from "next/image";

export default function DiscountBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12 px-6 md:px-12 rounded-2xl shadow-lg my-10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-8">
        {/* Text Section */}
        <div className="z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mega Sale is On 🎉
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Get up to <span className="font-bold">50% OFF</span> on selected products. 
            Hurry, offer valid for a limited time only!
          </p>
          <button className="bg-white text-indigo-600 font-semibold py-3 px-6 rounded-xl shadow-md hover:bg-gray-100 transition">
            Shop Now
          </button>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-end relative">
          <Image
            src="/sale-banner.png"
            alt="Discount"
            width={400}
            height={400}
            className="rounded-xl drop-shadow-lg"
          />
        </div>
      </div>

      {/* Decorative Gradient Circle */}
      <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/20 rounded-full blur-3xl" />
    </div>
  );
}
