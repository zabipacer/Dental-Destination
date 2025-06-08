import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.8 },
  }),
};

const DentalDestinationIntro = () => {
  return (
    <section
      className="w-full py-16 px-4 text-white text-center"
      style={{
        background: `
          repeating-linear-gradient(
            45deg,
            #2f2f2f,
            #2f2f2f 2px,
            #3a3a3a 2px,
            #3a3a3a 4px
          )
        `,
        textShadow: '0 1px 2px rgba(0, 0, 0, 0.6)',
      }}
    >
      <div className="max-w-4xl mx-auto space-y-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Welcome to The Dental Destination
        </motion.h2>
        {[
          `The Dental Destination is a patient-centered dental clinic in Islamabad dedicated to your comfort and care. When you visit us, you’ll receive complete attention from our experienced team, including general dentists, hygienists, and friendly staff.`,
          `We take pride in delivering virtually pain-free treatments with a personal touch. If dental visits make you anxious, rest assured — we prioritize your peace of mind with calm surroundings, comfortable seating, and clear communication at every step.`,
          `Our clinic is equipped with modern dental technology like digital X-rays and advanced surgical tools to make your visits fast, safe, and effective — so you spend less time in the chair, and more time smiling.`,
        ].map((text, idx) => (
          <motion.p
            key={idx}
            className="text-lg leading-relaxed"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={idx + 2}
          >
            {text}
          </motion.p>
        ))}
        <motion.p
          className="text-lg leading-relaxed font-semibold"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={5}
        >
          The Dental Destination is now accepting new patients! We’re open on evenings and weekends to fit your busy schedule.
          <br />
          <a
            href="https://wa.me/923216739504"
            className="underline hover:text-yellow-300"
          >
            Contact us today to book your first appointment.
          </a>
          <br />
          <a
            href="https://maps.app.goo.gl/NRLoGfSNcMyXc6rT9"
            className="underline text-sm hover:text-yellow-200 inline-block mt-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            📍 View Clinic on Google Maps
          </a>
        </motion.p>
      </div>
    </section>
  );
};

export default DentalDestinationIntro;
