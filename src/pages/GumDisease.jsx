import React from "react";
import { Helmet } from "react-helmet";
import { CheckCircle, PhoneCall, HeartPulse } from "lucide-react";
import LocalSEOSection from "../components/LocalMAp";
import Testimonials from "../components/Testimonial";

export default function GumDiseaseTreatment() {
  return (
    <div className="bg-white pt-30 text-gray-800">
      <Helmet>
        <title>Gum Disease Treatment in Faisalabad | Doctor Teeth Dental Clinic</title>
        <meta
          name="description"
          content="Get expert gum disease treatment in Faisalabad at Doctor Teeth Dental Clinic. We offer professional care for bleeding gums, bad breath, and periodontitis."
        />
        <meta
          name="keywords"
          content="Gum Disease Treatment Faisalabad, Periodontitis Treatment Faisalabad, Bleeding Gums Treatment, Dental Cleaning Faisalabad, Best Dentist for Gums"
        />
        <meta property="og:title" content="Gum Disease Treatment in Faisalabad | Doctor Teeth Dental Clinic" />
        <meta
          property="og:description"
          content="Get expert gum disease treatment in Faisalabad at Doctor Teeth Dental Clinic. We offer professional care for bleeding gums, bad breath, and periodontitis."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="URL_TO_IMAGE" />
      </Helmet>

      <section className="px-4 py-10 md:py-16 text-center bg-gradient-to-br from-rose-100 to-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-rose-900">Gum Disease Treatment in Faisalabad</h1>
          <p className="mt-4 text-lg text-gray-600">
            Suffering from bleeding gums, bad breath, or loose teeth? Get professional gum disease treatment at Doctor Teeth Dental Clinic, Faisalabad’s trusted dental care center.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <a href="https://api.whatsapp.com/send/?phone=923216739504&text&type=phone_number&app_absent=0" className="bg-rose-600 text-white px-6 py-3 rounded-2xl shadow hover:bg-rose-700 transition">
              Book Appointment
            </a>
            <a href="tel:+03216739504" className="flex items-center gap-2 text-rose-600 font-medium">
              <PhoneCall size={20} /> Call Now
            </a>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-rose-800">What is Gum Disease?</h2>
          <p className="mt-4 text-gray-600 text-center">
            Gum disease, also known as periodontal disease, is a serious condition that affects the soft tissue and bone supporting your teeth. Left untreated, it can lead to tooth loss and other health problems. Early signs include bleeding gums, swollen gums, and persistent bad breath.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 bg-rose-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-rose-800 mb-4">Why Treat Gum Disease Early?</h3>
            <ul className="space-y-3">
              {[
                "Prevent tooth loss and protect your smile",
                "Reduce inflammation and gum bleeding",
                "Eliminate bad breath caused by infection",
                "Prevent bone damage around the teeth",
                "Improve your overall oral and systemic health"
              ].map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-rose-500 mt-1" size={20} />
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center">
            <HeartPulse className="text-rose-400 w-64 h-64" />
          </div>
        </div>
      </section>

      <LocalSEOSection />

      <section className="px-4 py-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-rose-800 mb-4">Our Gum Disease Treatments</h3>
          <p className="text-gray-700">
            We offer effective gum disease treatment for all stages – from mild gingivitis to severe periodontitis. Our services include:
          </p>
          <ul className="mt-4 space-y-4">
            {[
              "Professional dental cleaning (scaling and polishing)",
              "Deep cleaning (root planing)",
              "Antibiotic treatment for infection",
              "Laser therapy for advanced gum disease",
              "Surgical options for severe periodontitis",
              "Ongoing periodontal maintenance plans"
            ].map((service, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="text-rose-500 mt-1" size={20} />
                <span className="text-gray-700">{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-4 py-12 bg-rose-50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-rose-800 mb-4 text-center">Gum Disease Treatment Cost in Faisalabad</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-rose-700">Scaling & Polishing</h4>
              <p className="text-gray-700">Prices start from 2,000 PKR to 5,000 PKR depending on the severity of plaque and tartar buildup.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-rose-700">Deep Cleaning (Root Planing)</h4>
              <p className="text-gray-700">Root planing for gum pockets typically ranges from 5,000 PKR to 12,000 PKR per session.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-rose-700">Laser Gum Treatment</h4>
              <p className="text-gray-700">Laser-based treatment for advanced gum disease starts at 8,000 PKR and goes up based on the treatment area.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-rose-700">Follow-Up Maintenance</h4>
              <p className="text-gray-700">Maintenance sessions to keep gums healthy cost around 1,500 PKR to 3,000 PKR per visit.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-rose-800 mb-6 text-center">Frequently Asked Questions About Gum Disease</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-rose-700">What causes gum disease?</h4>
              <p className="text-gray-700">The main cause is poor oral hygiene, which allows plaque to build up and harden into tartar, leading to inflammation and infection of the gums.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-rose-700">Is gum disease reversible?</h4>
              <p className="text-gray-700">Early stages like gingivitis are reversible with proper treatment. Advanced periodontitis is manageable but not fully reversible, so early treatment is key.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-rose-700">How often should I get gum checkups?</h4>
              <p className="text-gray-700">We recommend visiting the dentist every 6 months, or every 3 months if you have a history of gum disease.</p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <section id="contact" className="px-4 py-12 bg-rose-50">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-rose-800">Book Your Gum Disease Consultation Today</h3>
          <p className="mt-4 text-gray-600">
            Don’t let gum disease damage your smile. Schedule an appointment with our experienced dental team at Doctor Teeth Dental Clinic, Faisalabad.
          </p>
          <a href="tel:+923001234567" className="inline-block mt-6 bg-rose-600 text-white px-6 py-3 rounded-2xl shadow hover:bg-rose-700 transition">
            Call Now
          </a>
        </div>
      </section>

      <footer className="px-4 py-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Doctor Teeth Dental Clinic, Faisalabad. All rights reserved.
      </footer>
    </div>
  );
}
