"use client";

import Link from "next/link";
import { useState } from "react";
import { ShoppingCart, User, ChevronDown, Menu, X } from "lucide-react";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "T-Shirts", href: "#", dropdown: ["Casual", "Formal", "V-Neck"] },
  { name: "Shirts", href: "#", dropdown: ["Slim Fit", "Regular Fit"] },
  { name: "Polo Shirts", href: "/products/polo" },
  { name: "Accessories", href: "#", dropdown: ["Watches", "Bags"] },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full shadow bg-white sticky top-0 z-50">
      {/* Top Row */}
      <div className="w-full md:w-4/5 mx-auto px-4 md:px-6 flex items-center justify-between py-3">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
          </Link>
        </div>

        {/* Desktop Search Bar */}
        <div className="flex-1 justify-center hidden md:flex mx-6">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full max-w-md border border-gray-300 rounded-full px-4 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Desktop Icons / Mobile Burger */}
        <div className="flex items-center space-x-4">
          {/* Desktop icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/cart">
              <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-blue-600" />
            </Link>
            <Link href="/account">
              <User className="w-6 h-6 text-gray-700 hover:text-blue-600" />
            </Link>
          </div>
          {/* Mobile hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Bottom Menu - Desktop */}
      <nav className="hidden md:block bg-gray-100">
        <ul className="flex justify-center px-4 py-2 space-x-6">
          {menuItems.map((item) => (
            <li key={item.name} className="relative group">
              <Link
                href={item.href}
                className="flex items-center font-medium hover:text-blue-600 space-x-1"
              >
                <span>{item.name}</span>
                {item.dropdown && <ChevronDown className="w-4 h-4" />}
              </Link>

              {/* Dropdown */}
              {item.dropdown && (
                <ul className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-white shadow-lg rounded-lg py-2 w-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {item.dropdown.map((sub) => (
                    <li key={sub}>
                      <Link
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        {sub}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu */}
<div
  className={`fixed top-0 right-0 h-full w-4/5 max-w-xs bg-gray-100 shadow-lg transform transition-transform duration-300 z-50 ${
    mobileMenuOpen ? "translate-x-0" : "translate-x-full"
  }`}
>
  {/* Close button inside mobile menu */}
  <div className="flex justify-end p-4">
    <button onClick={() => setMobileMenuOpen(false)}>
      <X className="w-6 h-6 text-gray-700" />
    </button>
  </div>

  {/* Search bar at the top */}
  <div className="p-4">
    <input
      type="text"
      placeholder="Search for products..."
      className="w-full border border-gray-300 rounded-full px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  <ul className="px-4 space-y-2">
    {menuItems.map((item) => (
      <li key={item.name} className="border-b border-gray-200 pb-2">
        <div className="flex justify-between items-center py-2">
          <Link
            href={item.href}
            className="font-medium text-gray-700 hover:text-blue-600"
          >
            {item.name}
          </Link>
          {item.dropdown && <ChevronDown className="w-4 h-4" />}
        </div>
        {/* Mobile dropdown */}
        {item.dropdown && (
          <ul className="mt-1 ml-4 space-y-1">
            {item.dropdown.map((sub) => (
              <li key={sub}>
                <Link
                  href="#"
                  className="block text-gray-600 hover:text-blue-600 py-1"
                >
                  {sub}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    ))}

    {/* Cart row */}
    <li className="py-2 flex items-center space-x-2">
      <ShoppingCart className="w-6 h-6 text-gray-700" />
      <span className="text-gray-700 font-medium">Cart</span>
    </li>

    {/* User row */}
    <li className="py-2 flex items-center space-x-2">
      <User className="w-6 h-6 text-gray-700" />
      <span className="text-gray-700 font-medium">Aashab</span>
    </li>
  </ul>
</div>



      {/* Overlay when mobile menu is open */}
      {mobileMenuOpen && (
        <div
  className="fixed inset-0 z-40"
  style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}
  onClick={() => setMobileMenuOpen(false)}
/>

      )}
    </header>
  );
}
