import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo and brand */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              {/* Replace with actual logo */}
              <div className="h-10 w-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">
                OF
              </div>
              <span className="ml-3 text-xl font-semibold text-green-800">
                OfNet Farms
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/about" 
              className="text-green-700 hover:text-yellow-500 px-3 py-2 text-sm font-medium"
            >
              About Us
            </Link>
            <Link 
              to="/products" 
              className="text-green-700 hover:text-yellow-500 px-3 py-2 text-sm font-medium"
            >
              Our Product
            </Link>
            <Link 
              to="/impact" 
              className="text-green-700 hover:text-yellow-500 px-3 py-2 text-sm font-medium"
            >
              Our Impact
            </Link>
            <Link 
              to="/blog" 
              className="text-green-700 hover:text-yellow-500 px-3 py-2 text-sm font-medium"
            >
              Blog
            </Link>
            <Link 
              to="/gallery" 
              className="text-green-700 hover:text-yellow-500 px-3 py-2 text-sm font-medium"
            >
              Gallery
            </Link>
            <Link 
              to="/contact" 
              className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-green-700 hover:text-yellow-500 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
          <Link
            to="/about"
            className="block px-3 py-2 rounded-md text-base font-medium text-green-700 hover:text-yellow-500"
          >
            About Us
          </Link>
          <Link
            to="/products"
            className="block px-3 py-2 rounded-md text-base font-medium text-green-700 hover:text-yellow-500"
          >
            Our Product
          </Link>
          <Link
            to="/impact"
            className="block px-3 py-2 rounded-md text-base font-medium text-green-700 hover:text-yellow-500"
          >
            Our Impact
          </Link>
          <Link
            to="/blog"
            className="block px-3 py-2 rounded-md text-base font-medium text-green-700 hover:text-yellow-500"
          >
            Blog
          </Link>
          <Link
            to="/gallery"
            className="block px-3 py-2 rounded-md text-base font-medium text-green-700 hover:text-yellow-500"
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-white bg-green-600 hover:bg-green-700"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;