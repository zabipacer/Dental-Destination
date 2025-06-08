import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const testimonials = [
  {
    name: 'Ayesha R.',
    text: 'Finding Dr. Ali was the best decision—my veneers look flawless, and I’ve never felt more confident!',
    image: '/assets/images/T1.webp'
  },
  {
    name: 'Hamza T.',
    text: 'The root canal was pain-free and quick. Exceptional care from start to finish.',
    image: '/assets/images/T2.webp'
  },
  {
    name: 'Sara M.',
    text: 'My smile makeover exceeded all expectations. Truly the top cosmetic dentistry team!',
    image: '/assets/images/T3.webp'
  }
];

const variants = {
  enter: (direction) => ({ x: direction > 0 ? 300 : -300, opacity: 0, scale: 0.8 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (direction) => ({ x: direction < 0 ? 300 : -300, opacity: 0, scale: 0.8 })
};

const Testimonials = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [paused, setPaused] = useState(false);

  const paginate = (newDirection) => {
    setPage([ (page + newDirection + testimonials.length) % testimonials.length, newDirection ]);
  };

  // Auto-play every 7 seconds
  useEffect(() => {
    if (paused) return;
    const timer = setTimeout(() => paginate(1), 7000);
    return () => clearTimeout(timer);
  }, [page, paused]);

  return (
    <section
      id="testimonials"
      className="bg-gradient-to-br from-teal-50 to-white py-20 px-4 sm:px-6 lg:px-8"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-3xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-teal-800"
        >
          Hear from Our Happy Patients
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-lg text-gray-600"
        >
          Real stories, real smiles—see why people trust The Dental Destination for all their dental needs.
        </motion.p>
      </div>

      <div className="relative max-w-xl mx-auto">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: 'spring', stiffness: 200, damping: 30 }}
            className="bg-white p-10 rounded-3xl shadow-xl text-center border border-teal-100"
          >
            <motion.img
              src={testimonials[page].image}
              alt={`Photo of ${testimonials[page].name}`}
              className="w-24 h-24 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
            <p className="italic text-gray-700 mb-6">“{testimonials[page].text}”</p>
            <h3 className="text-teal-800 font-semibold text-xl">— {testimonials[page].name}</h3>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={() => paginate(-1)}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 p-3 bg-white rounded-full shadow-lg hover:bg-teal-100 transition"
        >
          <ChevronLeft className="w-6 h-6 text-teal-800" />
        </button>
        <button
          onClick={() => paginate(1)}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 p-3 bg-white rounded-full shadow-lg hover:bg-teal-100 transition"
        >
          <ChevronRight className="w-6 h-6 text-teal-800" />
        </button>

        {/* Dot Indicators */}
        <div className="mt-6 flex justify-center space-x-3">
          {testimonials.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setPage([i, i > page ? 1 : -1])}
              className={`w-3 h-3 rounded-full transition-all ${i === page ? 'bg-teal-800 scale-125' : 'bg-gray-300'}`}
              whileHover={{ scale: 1.3 }}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: testimonials.map((t, i) => ({
            "@type": "Review",
            author: { "@type": "Person", name: t.name },
            reviewBody: t.text,
            itemReviewed: { "@type": "MedicalClinic", name: "The Dental Destination" },
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
            position: i + 1
          }))
        })}
      </script>
    </section>
  );
};

export default Testimonials;
