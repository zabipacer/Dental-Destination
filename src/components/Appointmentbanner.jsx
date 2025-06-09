import React from 'react';
import { motion } from 'framer-motion';

const AppointmentBanner = () => {
  return (
    <section
      className="w-full py-16 px-4 text-center text-white"
      style={{
        background: `
          repeating-linear-gradient(
            45deg,
            #a6bf39,
            #a6bf39 2px,
            #90aa32 2px,
            #90aa32 4px
          )
        `,
        textShadow: '0 1px 3px rgba(0, 0, 0, 0.7)',
      }}
    >
      <motion.h2
        className="sm:text-4xl text-3xl font-semibold mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        The Dental Destination is accepting new patients!
      </motion.h2>
      <motion.p
        className="text-xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Schedule your appointment today:&nbsp;
        <a
          href="tel::03350531591"
          className="underline hover:text-yellow-300 font-medium"
        >
        03350531591
        </a>
        <br />
        <a
          href="https://maps.app.goo.gl/NRLoGfSNcMyXc6rT9"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-sm hover:text-yellow-200 mt-2 inline-block"
        >
          📍 View Clinic on Google Maps
        </a>
      </motion.p>
    </section>
  );
};

export default AppointmentBanner;
