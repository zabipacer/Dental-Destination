import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";
import { useIsMobile } from "./IsMobile";
import { MapPin, Clock, Phone, Star } from "lucide-react";

// Animation variants for image
const imageVariant = {
  initial: { opacity: 0, scale: 1.1 },
  animate: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.8, ease: "easeIn" } }
};

// Hero slides with benefit-focused copy
const slides = [
  {
    title: "Smile with Confidence",
    text: "Experience painless cosmetic treatments that brighten your smile and boost your self-esteem.",
    image: "/h1.jpg",
    mobileImage: "/h1.jpg",
  },
  {
    title: "Emergency Dental Care",
    text: "Rapid, compassionate relief for tooth pain, chips, and dental emergencies—anytime you need it.",
    image: "/h2c.jpg",
    mobileImage: "/h2c.jpg",
  },
  {
    title: "Gentle Wisdom Tooth Removal",
    text: "Our expert team ensures a smooth extraction process with minimal discomfort and quick recovery.",
    image: "/h3.jpg",
    mobileImage: "/h3.jpg",
  },
];

// Structured schema for SEO and local relevance
const schemaData = { /* previous schema unchanged */ };

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const isMobile = useIsMobile();

  // Auto-advance slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => setCurrent(prev => (prev + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen bg-gray-50 flex items-center justify-center font-sans overflow-hidden">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      {/* Slide Background & Overlays */}
      <AnimatePresence mode="wait">
        <motion.img
          key={(isMobile ? slides[current].mobileImage : slides[current].image) + current}
          src={isMobile ? slides[current].mobileImage : slides[current].image}
          alt={slides[current].title}
          variants={imageVariant}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-black opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />

      {/* Main content container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-start md:items-center">
        {/* Left: Slide text & CTA (static to ensure visibility) */}
        <div className="col-span-2 text-center md:text-left space-y-6 pt-8 md:pt-0">
          <h1 className="text-4xl md:text-5xl mt-20 sm:mt-0 font-extrabold text-white leading-tight transition-opacity duration-500">
            {slides[current].title}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 transition-opacity duration-500">
            {slides[current].text}
          </p>
          <a
            href="https://wa.me/9230058031591"
            className="inline-block bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 text-white font-medium px-8 py-4 rounded-lg shadow-lg transition-all"
            role="button"
            aria-label="Book an appointment via WhatsApp"
          >
            Book Your Visit
          </a>
        </div>

        {/* Right: Local info panel */}
        <motion.div
          className="col-span-1 bg-white bg-opacity-90 backdrop-blur-md p-6 rounded-xl shadow-lg space-y-4 mt-8 md:mt-0"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { delay: 0.5, duration: 0.8, ease: "easeOut" } }}
        >
          <h3 className="text-2xl font-semibold text-gray-800">Visit Us Locally</h3>
          <div className="flex items-start space-x-2 text-gray-700">
            <MapPin className="w-5 h-5 mt-1 text-gray-800" />
            <p className="text-base"><strong>Address:</strong> House 580A, Street 19, Chaklala Scheme 3, Rawalpindi</p>
          </div>
          <div className="flex items-start space-x-2 text-gray-700">
            <Clock className="w-5 h-5 mt-1 text-gray-800" />
            <p className="text-base"><strong>Hours:</strong> Mon–Sat: 5 PM–10 PM | Sun: 12 PM–10 PM</p>
          </div>
          <div className="flex items-start space-x-2 text-gray-700">
            <Phone className="w-5 h-5 mt-1 text-gray-800" />
            <p className="text-base"><strong>Call:</strong> <a href="tel:+9230058031591" className="text-green-600 hover:underline">+92 300 580 31591</a></p>
          </div>
          <div className="flex items-start space-x-2 text-gray-700">
            <Star className="w-5 h-5 mt-1 text-yellow-500" />
            <p className="text-base"><strong>Reviews:</strong> 4.8 based on 35 reviews</p>
          </div>
          <a
            href="https://goo.gl/maps/YourShortLink"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 text-white font-medium px-4 py-2 rounded-lg"
          >
            View on Map
          </a>
        </motion.div>

        {/* Bottom: Slide controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-4 h-4 rounded-full focus:outline-none focus:ring-2 focus:ring-white transition-colors ${idx === current ? 'bg-white' : 'bg-gray-400'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
