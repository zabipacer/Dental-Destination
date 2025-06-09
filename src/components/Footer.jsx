import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#323232] text-white pt-12 pb-6">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Clinic Info */}
        <div>
          <h4 className="text-xl font-semibold mb-4">The Dental Destination</h4>
          <p className="text-sm mb-2 flex items-center gap-2">
            <FaMapMarkerAlt />
            580 Street 19, Chaklala Scheme 3, Chaklala Housing Scheme 3, Rawalpindi, 46000
          </p>
          <p className="text-sm flex items-center gap-2">
            <FaPhone />
            <a href="tel:03350531591" className="hover:underline">0335 0531591</a>
          </p>
        </div>

        {/* Navigation */}
        <nav aria-label="Quick Links">
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="text-sm space-y-2">
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/services" className="hover:underline">Dental Services</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            <li><a href="/blog" className="hover:underline">Blog</a></li>
          </ul>
        </nav>

        {/* Services */}
        <nav aria-label="Top Services">
          <h4 className="text-xl font-semibold mb-4">Top Services</h4>
          <ul className="text-sm space-y-2">
            <li><a href="/dental-implants-rawalpindi" className="hover:underline">Dental Implants Rawalpindi</a></li>
            <li><a href="/braces-rawalpindi" className="hover:underline">Braces Treatment</a></li>
            <li><a href="/root-canal-rawalpindi" className="hover:underline">Root Canal Treatment</a></li>
            <li><a href="/teeth-whitening-rawalpindi" className="hover:underline">Teeth Whitening</a></li>
          </ul>
        </nav>

        {/* Social & SEO */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Connect With Us</h4>
          <div className="flex space-x-4 mb-4">
            <a href="https://instagram.com/thedentaldestination" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="text-lg hover:text-pink-300" />
            </a>
          </div>
          <p className="text-sm">
            Looking for top-notch dental care in Rawalpindi? Visit The Dental Destination for expert, pain-free treatment.
          </p>
        </div>

      </div>

      <div className="text-center mt-10 text-xs text-gray-300 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} The Dental Destination. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
