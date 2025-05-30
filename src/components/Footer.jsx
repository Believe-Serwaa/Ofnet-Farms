import React from "react";
const Footer = () => {
  return (
    <footer className="bg-green-800 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              {/* Logo */}
              <div className="h-10 w-10 rounded-full bg-white text-green-800 flex items-center justify-center font-bold mr-3">
                OF
              </div>
              <h3 className="text-xl font-bold">OfNet Farms</h3>
            </div>
            <p className="mb-4">
              Promoting sustainable agriculture in Ghana by producing organic fertilizer from agricultural waste.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-white hover:text-yellow-300">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="mailto:ofnetfarms@gmail.com" className="text-white hover:text-yellow-300">
                <span className="sr-only">Email</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-yellow-300">About Us</a></li>
              <li><a href="/products" className="hover:text-yellow-300">Our Product</a></li>
              <li><a href="/impact" className="hover:text-yellow-300">Our Impact</a></li>
              <li><a href="/blog" className="hover:text-yellow-300">Blog</a></li>
              <li><a href="/gallery" className="hover:text-yellow-300">Gallery</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic">
              <p className="mb-2">Gyamase, Ashanti Region</p>
              <p className="mb-2">Sekyere South District, Ghana</p>
              <p className="mb-2">
                <a href="tel:+233541166900" className="hover:text-yellow-300">0541166900</a>
              </p>
              <p className="mb-2">
                <a href="tel:+233503968414" className="hover:text-yellow-300">0503968414</a>
              </p>
              <p>
                <a href="mailto:ofnetfarms@gmail.com" className="hover:text-yellow-300">ofnetfarms@gmail.com</a>
              </p>
            </address>
          </div>

          {/* Newsletter Signup */}
          <div className="md:col-span-2 md:col-start-3 mt-8 md:mt-0">
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="mb-4">Subscribe to our newsletter for updates on sustainable farming practices.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full rounded-l-md text-gray-800 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="bg-yellow-500 text-green-800 px-4 py-2 rounded-r-md font-medium hover:bg-yellow-400 focus:outline-none"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-green-700 text-center">
          <p>&copy; {new Date().getFullYear()} OfNet Farms. All rights reserved.</p>
          <p className="mt-2 text-sm text-green-300">
            Promoting sustainable agriculture and environmental stewardship in Ghana.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;