import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import LocalSEOSection from "../components/LocalMAp";

export default function TeethWhiteningPage() {
  return (
    <div className="max-w-5xl pt-24 mx-auto px-4 text-gray-800 font-sans">
      {/* Meta SEO */}
      <head>
        <title>Professional Teeth Whitening in Faisalabad | Doctor Teeth Dental Clinic</title>
        <meta
          name="description"
          content="Achieve a brighter smile with our safe and effective teeth whitening services in Faisalabad. Book your appointment today!"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dentist",
            "name": "Doctor Teeth Dental Clinic",
            "image": "https://doctorteethclinic.com/DL.jpeg",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Ajmal Center, near Nadra Executive Office, opp. Gourmet Bakers, Batala Colony",
              "addressLocality": "Faisalabad",
              "addressRegion": "Punjab",
              "postalCode": "38000",
              "addressCountry": "PK"
            },
            "telephone": "+92 321 6739504",
            "url": "https://doctorteethclinic.com"
          })
        }} />
      </head>

      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-5xl font-bold mb-4 text-blue-900">🦷 Professional Teeth Whitening in Faisalabad</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Brighten your smile safely and instantly at Doctor Teeth Dental Clinic – your trusted choice for teeth whitening in Faisalabad.
        </p>
      </header>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8 text-center">
        <a href="tel:+923216739504" className="bg-blue-600 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-blue-700 transition shadow-lg">
          <FaPhoneAlt /> Call Now: +92 321 6739504
        </a>
        <div className="flex items-center gap-2 text-gray-600 text-sm max-w-xs">
          <FaMapMarkerAlt /> Ajmal Center, near Nadra Executive Office, opp. Gourmet Bakers, Batala Colony Faisalabad
        </div>
      </div>

      {/* Local SEO Map Pins or Photos */}
      <LocalSEOSection />

      {/* Service Description */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-3">✨ Say Goodbye to Yellow Teeth</h2>
        <p className="mb-2">Looking for <strong>teeth whitening in Faisalabad</strong>? Our advanced whitening system helps you achieve a radiant smile—up to 7 shades brighter in just one visit.</p>
        <p className="mb-2">We use <strong>dentist-approved, enamel-safe</strong> whitening formulas that work effectively on stains caused by tea, coffee, smoking, or aging.</p>
      </section>

      {/* 3-Step Process */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">🪥 Our 3-Step Whitening Process</h2>
        <div className="bg-gray-50 p-6 rounded-xl shadow-sm space-y-3">
          <p><strong>Step 1:</strong> Prep – Gentle cleaning and vitamin-rich gel to protect enamel.</p>
          <p><strong>Step 2:</strong> Whiten – Our LED technology activates the formula to lift stains deeply.</p>
          <p><strong>Step 3:</strong> Seal – Remineralizing gel seals the glow and keeps your teeth strong.</p>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-3">💸 Teeth Whitening Cost in Faisalabad</h2>
        <p>We offer <strong>affordable teeth whitening treatments</strong> starting from <strong>Rs. 3,000</strong>. Transparent pricing. Guaranteed results.</p>
      </section>

      {/* Why Choose Us */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-3">🎯 Why Choose Doctor Teeth?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Top-rated dental clinic in Faisalabad with 5-star Google reviews.</li>
          <li>Quick, pain-free, and lasting results with no sensitivity.</li>
          <li>Advanced LED whitening system used by professionals worldwide.</li>
          <li>Free consultation for first-time patients.</li>
        </ul>
      </section>

      {/* Embedded Map */}
   
    </div>
  );
}
