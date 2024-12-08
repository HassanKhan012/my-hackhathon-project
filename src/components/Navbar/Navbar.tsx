'use client';

import Link from "next/link";
import { useState } from "react";
// Importing icons from react-icons
import { FiHome, FiShoppingCart, FiHeart } from 'react-icons/fi';
import { RiSearchLine } from 'react-icons/ri';
// import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  const [searchText, setSearchText] = useState("");
  const [showSearch, setShowSearch] = useState(false);  // State to control search visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for Home dropdown
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false); // State for Shop dropdown
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false); // State for Pages dropdown

  const toggleSearch = () => {
    setShowSearch(!showSearch);  // Toggle the search visibility when search icon is clicked
  };

  const toggleDropdown = () => {
    // Close the Shop and Pages dropdowns when the Home dropdown is toggled
    setIsDropdownOpen(!isDropdownOpen);
    setIsShopDropdownOpen(false);
    setIsPagesDropdownOpen(false);
  };

  const toggleShopDropdown = () => {
    // Close the Home and Pages dropdowns when the Shop dropdown is toggled
    setIsShopDropdownOpen(!isShopDropdownOpen);
    setIsDropdownOpen(false);
    setIsPagesDropdownOpen(false);
  };

  const togglePagesDropdown = () => {
    // Close the Home and Shop dropdowns when the Pages dropdown is toggled
    setIsPagesDropdownOpen(!isPagesDropdownOpen);
    setIsDropdownOpen(false);
    setIsShopDropdownOpen(false);
  };

  return (
    <nav className="bg-white shadow-md px-4 py-2 relative z-20"> {/* Set z-index higher than banner */}
      <div className="container flex justify-between items-center mx-auto">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Bandage
        </Link>

        {/* Navbar Links */}
        <div className="hidden md:flex space-x-6">
          {/* Home Dropdown */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="hover:text-blue-500 focus:outline-none"
            >
             Home
            </button>
            {isDropdownOpen && (
              <div className="absolute bg-white shadow-lg rounded-md mt-2 w-40 z-30"> {/* z-index for dropdown */}
                <Link href="/" className="block px-4 py-2 hover:text-blue-500">Home Page</Link>
                <Link href="/shop" className="block px-4 py-2 hover:text-blue-500">Shop</Link>
                <Link href="/offers" className="block px-4 py-2 hover:text-blue-500">Special Offers</Link>
              </div>
            )}
          </div>

{/* Shop Dropdown with Down Arrow */}
<div className="relative">
  <button
    onClick={toggleShopDropdown}
    className="flex items-center hover:text-blue-500 focus:outline-none"
  >
    Shop<FiShoppingCart className="w-5 h-5" />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-4 h-4 ml-1"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </button>
  {isShopDropdownOpen && (
    <div className="absolute bg-white shadow-lg rounded-md mt-2 w-40 z-30"> {/* z-index for dropdown */}
      <Link href="/productlist" className="block px-4 py-2 hover:text-blue-500">All Products</Link>
      <Link href="/shop/new-arrivals" className="block px-4 py-2 hover:text-blue-500">New Arrivals</Link>
      <Link href="/shop/sale" className="block px-4 py-2 hover:text-blue-500">Sale</Link>
    </div>
  )}
</div>


          {/* Other Pages */}
          <Link href="/ProductListPage" className="hover:text-blue-500">About</Link>
          <Link href="/blog" className="hover:text-blue-500">Blog</Link>
          <Link href="/contact" className="hover:text-blue-500">Contact</Link>

          {/* Pages Dropdown */}
          <div className="relative">
            <button
              onClick={togglePagesDropdown}
              className="flex items-center hover:text-blue-500 focus:outline-none"
            >
              Pages
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isPagesDropdownOpen && (
              <div className="absolute bg-white shadow-lg rounded-md mt-2 w-40 z-30"> {/* z-index for dropdown */}
                <Link href="/faq" className="block px-4 py-2 hover:text-blue-500">FAQ</Link>
                <Link href="/terms" className="block px-4 py-2 hover:text-blue-500">Terms & Conditions</Link>
                <Link href="/privacy-policy" className="block px-4 py-2 hover:text-blue-500">Privacy Policy</Link>
              </div>
            )}
          </div>
        </div>

        {/* Search and Login/Register Section */}
        <div className="flex items-center space-x-4">
          {/* Search Icon */}
          <button onClick={toggleSearch} className="text-gray-800 hover:text-blue-500 focus:outline-none">
            <RiSearchLine className="w-6 h-6" />
          </button>

          {/* Conditional Search Input */}
          {showSearch && (
            <input
              type="text"
              placeholder="Search..."
              className="border rounded-md px-4 py-2 w-48"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          )}

          {/* Login/Register Links */}
          <div className="flex space-x-4">
            <Link href="/login" className="text-gray-800 hover:text-blue-500">
              Login
            </Link>
            <Link href="/register" className="text-gray-800 hover:text-blue-500">
              Register
            </Link>
          </div>

          {/* Like Icon */}
          <Link href="/like" className="text-gray-800 hover:text-blue-500">
            <FiHeart className="w-6 h-6" />
          </Link>

          {/* Shopping Cart Icon */}
          <Link href="/cart" className="text-gray-800 hover:text-blue-500">
            <FiShoppingCart className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
