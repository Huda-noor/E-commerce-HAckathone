import Link from "next/link";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaRegUserCircle, FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header className="wrapper bg-white px-6 py-4 md:px-16">
      <div className="flex items-center justify-between">
        {/* Logo Section */}
        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            <Link href="/">SOfFAeE</Link>
          </h1>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            <li>
              <Link
                className="text-base text-gray-700 hover:text-gray-900 transition"
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-base text-gray-700 hover:text-gray-900 transition"
                href="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="text-base text-gray-700 hover:text-gray-900 transition"
                href="/shop"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                className="text-base text-gray-700 hover:text-gray-900 transition"
                href="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Icons Section */}
        <div className="flex gap-4 text-gray-800">
          {/* Search Icon */}
          <Link href="/search">
            <span className="w-6 h-6 cursor-pointer hover:text-gray-900">
              <FaSearch />
            </span>
          </Link>

          {/* Wishlist Icon */}
          <Link href="/wishlist">
            <span className="w-6 h-6 cursor-pointer hover:text-gray-900">
              <CiHeart />
            </span>
          </Link>

          {/* Cart Icon */}
          <Link href="/cart">
            <span className="w-6 h-6 cursor-pointer hover:text-gray-900">
              <IoCartOutline />
            </span>
          </Link>

          {/* Account Icon */}
          <Link href="/my-account">
            <span className="w-6 h-6 cursor-pointer hover:text-gray-900">
              <FaRegUserCircle />
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
