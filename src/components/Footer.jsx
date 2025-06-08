import React from 'react';
import {
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#323232] text-white pt-12 pb-6 ">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Clinic Info */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Doctor Teeth Clinic</h4>
          <p className="text-sm mb-2 flex items-center gap-2">
            <FaMapMarkerAlt />
            Ajmal Center, near Nadra Executive Office, opp. Gourmet Bakers, Batala Colony Faisalabad
          </p>
          <p className="text-sm mb-2 flex items-center gap-2">
            <FaPhone />
            <a href="tel:0321 6739504" className="hover:underline">0321 6739504</a>
          </p>
          <p className="text-sm flex items-center gap-2">
            <FaEnvelope />
            <a href="mailto:chocobeans008@gmail.com" className="hover:underline">chocobeans008@gmail.com</a>
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
            <li><a href="/dental-implants-faisalabad" className="hover:underline">Dental Implants Faisalabad</a></li>
            <li><a href="/braces-faisalabad" className="hover:underline">Braces Treatment</a></li>
            <li><a href="/root-canal-faisalabad" className="hover:underline">Root Canal Treatment</a></li>
            <li><a href="/teeth-whitening-faisalabad" className="hover:underline">Teeth Whitening</a></li>
          </ul>
        </nav>

        {/* Social & SEO */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Connect With Us</h4>
          <div className="flex space-x-4 mb-4">
            <a href="https://www.facebook.com/doctorteethdental" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF className="text-lg hover:text-blue-300" />
            </a>
            
            <a href="https://wa.me/923216739504" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp className="text-lg hover:text-green-300" />
            </a>
          </div>
          <p className="text-sm">
            Looking for a <strong>dentist near Eden Valley or Peoples Colony Faisalabad</strong>? Visit Doctor Teeth for pain-free dental care.
          </p>
        </div>

      </div>

      <div className="text-center mt-10 text-xs text-gray-300 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Doctor Teeth Clinic Faisalabad. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
