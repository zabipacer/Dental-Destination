import React from "react";
import { Helmet } from "react-helmet";
import { Smile, CheckCircle, PhoneCall } from "lucide-react";
import LocalSEOSection from "../components/LocalMAp";
import Testimonials from "../components/Testimonial";

export default function DentalFillingsLandingPage() {
  return (
    <div className="bg-white pt-30 text-gray-800">
      <Helmet>
        <title>Dental Fillings in Faisalabad | Doctor Teeth Dental Clinic</title>
        <meta 
          name="description" 
          content="Get high-quality dental fillings in Faisalabad at Doctor Teeth Dental Clinic. Restore your teeth with durable, natural-looking fillings that prevent decay and improve function." 
        />
        <meta 
          name="keywords" 
          content="Dental Fillings Faisalabad, tooth fillings, cavity treatment, restorative dentistry" 
        />
        <meta property="og:title" content="Dental Fillings in Faisalabad | Doctor Teeth Dental Clinic" />
        <meta property="og:description" content="Get high-quality dental fillings in Faisalabad at Doctor Teeth Dental Clinic. Restore your teeth with durable, natural-looking fillings that prevent decay and improve function." />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="px-4 py-10 md:py-16 text-center bg-gradient-to-br from-blue-100 to-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900">Dental Fillings in Faisalabad</h1>
          <p className="mt-4 text-lg text-gray-600">
            Restore your smile and prevent further decay with expert dental fillings. Affordable pricing and high-quality materials at Doctor Teeth Dental Clinic.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <a href="https://api.whatsapp.com/send/?phone=923216739504&text&type=phone_number&app_absent=0" className="bg-blue-600 text-white px-6 py-3 rounded-2xl shadow hover:bg-blue-700 transition">
              Book Appointment
            </a>
            <a href="tel:+03216739504" className="flex items-center gap-2 text-blue-600 font-medium">
              <PhoneCall size={20} /> Call Now
            </a>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-800">What Are Dental Fillings?</h2>
          <p className="mt-4 text-gray-600 text-center">
            Dental fillings are used to restore teeth damaged by cavities or decay. They help prevent further damage and improve the function and appearance of your teeth.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 bg-blue-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-blue-800 mb-4">Why Choose Us for Dental Fillings?</h3>
            <ul className="space-y-3">
              {["Experienced dental professionals", "High-quality, durable materials", "Painless and quick procedures", "Personalized care", "Affordable pricing"].map((point, index) => (
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

      <LocalSEOSection />

      <section className="px-4 py-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-blue-800 mb-4">Types of Dental Fillings We Offer</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-blue-700">Amalgam Fillings</h4>
              <p className="text-gray-700">Durable and cost-effective, amalgam fillings are ideal for back teeth that require strength to withstand chewing pressure.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-blue-700">Composite Resin Fillings</h4>
              <p className="text-gray-700">Made to match the natural color of your teeth, composite fillings are a great choice for fillings in visible areas.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-blue-700">Ceramic Fillings</h4>
              <p className="text-gray-700">Ceramic fillings are highly durable and stain-resistant, offering a natural look for visible teeth.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-blue-700">Glass Ionomer Fillings</h4>
              <p className="text-gray-700">These fillings release fluoride, helping to protect the tooth from future decay, and are ideal for fillings below the gumline.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">Frequently Asked Questions</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-blue-700">How long do dental fillings last?</h4>
              <p className="text-gray-700">The lifespan of a filling depends on the material used, but they can last anywhere from 5 to 15 years with proper care.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-700">Are dental fillings painful?</h4>
              <p className="text-gray-700">The procedure is usually painless, as we use local anesthesia to numb the area before treatment.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-700">How do I take care of my fillings?</h4>
              <p className="text-gray-700">Avoid hard foods and maintain good oral hygiene by brushing twice daily and flossing. Regular dental checkups are also important.</p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <section id="contact" className="px-4 py-12 bg-blue-50">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-blue-800">Schedule Your Dental Filling Appointment Today</h3>
          <p className="mt-4 text-gray-600">
            If you're experiencing tooth pain or have a cavity, don't wait! Contact us today for a consultation and restore your smile with our high-quality dental fillings.
          </p>
          <a href="tel:+923001234567" className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-2xl shadow hover:bg-blue-700 transition">
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
