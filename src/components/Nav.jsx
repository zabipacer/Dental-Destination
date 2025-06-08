import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToContact = () => {
    const element = document.getElementById('contact-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <nav className="w-full z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo + Clinic Name */}
        <Link to="/" className="flex items-center gap-4">
          <img
            src="/logo.jpg"
            alt="Dental destination Logo"
            className="w-12 h-12 rounded-full object-cover"
          />
          <span className="text-xl sm:text-2xl  text-blue-800 font-extrabold ">
            Dental Destination
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 text-gray-700 text-sm font-medium">
          <a href="/#services" className="hover:text-blue-700 transition">
            Services
          </a>
          <a href="/#testimonials" className="hover:text-blue-700 transition">
            Testimonials
          </a>
          <a href="/#about" className="hover:text-blue-700 transition">
            About
          </a>
        
         
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-blue-900 focus:outline-none"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white text-blue-900 px-6 py-4 space-y-3 text-center shadow-inner border-t border-gray-200">
          <a href="#services" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">
            Services
          </a>
          <a href="#testimonials" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">
            Testimonials
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">
            About
          </a>
    <a href="/blogs" className="hover:text-blue-700 transition">
            Blogs
          </a>        
        </div>
      )}
    </nav>
  );
};
