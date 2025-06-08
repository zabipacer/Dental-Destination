import React from "react";
import { Helmet } from "react-helmet";
import { Smile, CheckCircle, PhoneCall } from "lucide-react";
import LocalSEOSection from "../components/LocalMAp";
import Testimonials from "../components/Testimonial";

export default function SmileMakeoverLandingPage() {
  return (
    <div className="bg-white pt-30 text-gray-800">
      <Helmet>
        <title>Smile Makeover in Faisalabad | Doctor Teeth Dental Clinic</title>
        <meta name="description" content="Transform your smile with our Smile Makeover services in Faisalabad. Expert dental care, affordable pricing, and personalized treatments to boost your confidence." />
        <meta name="keywords" content="Smile Makeover Faisalabad, dental clinic, teeth whitening, veneers, cosmetic dentistry" />
        <meta property="og:title" content="Smile Makeover in Faisalabad | Doctor Teeth Dental Clinic" />
        <meta property="og:description" content="Transform your smile with our Smile Makeover services in Faisalabad. Expert dental care, affordable pricing, and personalized treatments to boost your confidence." />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="px-4 py-10 md:py-16 text-center bg-gradient-to-br from-blue-100 to-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900">Smile Makeover in Faisalabad</h1>
          <p className="mt-4 text-lg text-gray-600">
            Transform your smile, boost your confidence. Affordable and advanced cosmetic dentistry solutions.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <a href="https://api.whatsapp.com/send/?phone=923216739504&text&type=phone_number&app_absent=0" className="bg-blue-600 text-white px-6 py-3 rounded-2xl shadow hover:bg-blue-700 transition">
              Book Appointment
            </a>
            <a href="tel:+923001234567" className="flex items-center gap-2 text-blue-600 font-medium">
              <PhoneCall size={20} /> Call Now
            </a>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-800">What is a Smile Makeover?</h2>
          <p className="mt-4 text-gray-600 text-center">
            A Smile Makeover is a customized treatment plan designed to improve the appearance of your smile through cosmetic dentistry procedures such as veneers, teeth whitening, bonding, and more.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 bg-blue-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-blue-800 mb-4">Why Choose Us?</h3>
            <ul className="space-y-3">
              {["Experienced cosmetic dentists","Affordable treatment options","Modern technology and techniques","Personalized smile design","Comfortable and friendly environment"].map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1" size={20} />
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center">
            <Smile className="text-blue-400 w-64 h-64" />
          </div>
        </div>
      </section>
<LocalSEOSection/>
      <section className="px-4 py-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-blue-800 mb-4">Treatments Included in Our Smile Makeover</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-blue-700">Teeth Whitening</h4>
              <p className="text-gray-700">Brighten your smile with safe and effective in-clinic teeth whitening that removes stains caused by food, drink, and age.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-blue-700">Dental Veneers</h4>
              <p className="text-gray-700">Porcelain or composite veneers can cover discolored, chipped, or misaligned teeth to give you a flawless smile.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-blue-700">Bonding & Contouring</h4>
              <p className="text-gray-700">Minor flaws like gaps or uneven edges are corrected using tooth-colored resin for a natural and smooth finish.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-blue-700">Orthodontic Alignment</h4>
              <p className="text-gray-700">Invisalign or braces may be included in your plan for long-term correction of crooked or crowded teeth.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">Frequently Asked Questions</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-blue-700">How long does a Smile Makeover take?</h4>
              <p className="text-gray-700">Depending on your treatment plan, it can take from one session to several weeks.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-700">Is it painful?</h4>
              <p className="text-gray-700">Most procedures are minimally invasive and done with local anesthesia or are completely painless.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-700">Will my insurance cover it?</h4>
              <p className="text-gray-700">Cosmetic treatments are typically not covered, but we offer flexible payment options.</p>
            </div>
          </div>
        </div>
      </section>
<Testimonials/>
      <section id="contact" className="px-4 py-12 bg-blue-50">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-blue-800">Book Your Smile Assessment Today</h3>
          <p className="mt-4 text-gray-600">
            Ready to begin your journey to a brighter smile? Contact us now to schedule your consultation at our Faisalabad clinic.
          </p>
          <a href="tel:+03216739504" className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-2xl shadow hover:bg-blue-700 transition">
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