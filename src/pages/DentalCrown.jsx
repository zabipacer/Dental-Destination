import React from "react";
import { Helmet } from "react-helmet";
import { Smile, CheckCircle, PhoneCall, DollarSign } from "lucide-react";
import LocalSEOSection from "../components/LocalMAp";
import Testimonials from "../components/Testimonial";

export default function DentalCrownsBridgesLandingPage() {
  return (
    <div className="bg-white pt-30 text-gray-800">
      <Helmet>
        <title>Dental Crowns and Bridges in Faisalabad | Doctor Teeth Dental Clinic</title>
        <meta 
          name="description" 
          content="Looking for affordable dental crowns and bridges in Faisalabad? Restore your smile with durable, natural-looking crowns and bridges at Doctor Teeth Dental Clinic." 
        />
        <meta 
          name="keywords" 
          content="Dental Crowns Faisalabad, Dental Bridges Faisalabad, Crowns and Bridges Price Faisalabad, Dental Restoration, Tooth Crown, Tooth Bridge" 
        />
        <meta property="og:title" content="Dental Crowns and Bridges in Faisalabad | Doctor Teeth Dental Clinic" />
        <meta property="og:description" content="Looking for affordable dental crowns and bridges in Faisalabad? Restore your smile with durable, natural-looking crowns and bridges at Doctor Teeth Dental Clinic." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="URL_TO_IMAGE" />
      </Helmet>

      <section className="px-4 py-10 md:py-16 text-center bg-gradient-to-br from-blue-100 to-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900">Dental Crowns and Bridges in Faisalabad</h1>
          <p className="mt-4 text-lg text-gray-600">
            Restore your smile with durable and natural-looking dental crowns and bridges. Affordable pricing at Doctor Teeth Dental Clinic in Faisalabad.
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
          <h2 className="text-3xl font-bold text-center text-blue-800">What Are Dental Crowns and Bridges?</h2>
          <p className="mt-4 text-gray-600 text-center">
            Dental crowns are caps placed over damaged or decayed teeth, while bridges are used to replace one or more missing teeth. Both options restore your smile and help you chew properly.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 bg-blue-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-blue-800 mb-4">Why Choose Us for Dental Crowns and Bridges?</h3>
            <ul className="space-y-3">
              {["Experienced dental professionals", "High-quality, durable materials", "Painless procedures with local anesthesia", "Affordable pricing and flexible payment options", "Personalized care tailored to your needs"].map((point, index) => (
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
          <h3 className="text-2xl font-bold text-blue-800 mb-4">Types of Dental Crowns and Bridges We Offer</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-blue-700">Porcelain Crowns</h4>
              <p className="text-gray-700">Porcelain crowns provide a natural appearance and are ideal for front teeth, as they blend seamlessly with your natural tooth color.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-blue-700">Metal Crowns</h4>
              <p className="text-gray-700">Metal crowns are highly durable and are often used for back teeth that require strength and resistance to chewing forces.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-blue-700">Porcelain-Fused-to-Metal Crowns</h4>
              <p className="text-gray-700">Combining the strength of metal with the aesthetic appeal of porcelain, these crowns offer a great balance of durability and appearance.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-blue-700">Dental Bridges</h4>
              <p className="text-gray-700">Bridges are used to replace missing teeth. They consist of one or more artificial teeth that fill the gap left by missing teeth, anchored by crowns on adjacent teeth.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">Dental Crowns and Bridges Pricing in Faisalabad</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-blue-700">Dental Crowns Price</h4>
              <p className="text-gray-700">The cost of dental crowns in Faisalabad typically ranges between 10,000 PKR and 25,000 PKR per crown, depending on the material used.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-700">Dental Bridges Price</h4>
              <p className="text-gray-700">The price of dental bridges starts around 20,000 PKR and can go up to 60,000 PKR, depending on the complexity and materials selected.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-700">Insurance & Payment Options</h4>
              <p className="text-gray-700">We offer flexible payment plans and work with several insurance providers to help you cover the cost of your dental crowns and bridges.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">Frequently Asked Questions About Dental Crowns and Bridges</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-blue-700">How long do dental crowns last?</h4>
              <p className="text-gray-700">With proper care, dental crowns can last anywhere from 10 to 15 years or more, depending on the material used and the patient's oral habits.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-700">Are dental crowns and bridges painful?</h4>
              <p className="text-gray-700">The procedures are typically not painful, as we use local anesthesia to ensure comfort during the procedure.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-700">How do I care for dental crowns and bridges?</h4>
              <p className="text-gray-700">Good oral hygiene is essential. Brush twice daily, floss regularly, and avoid chewing hard foods to ensure the longevity of your dental crowns and bridges.</p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <section id="contact" className="px-4 py-12 bg-blue-50">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-blue-800">Schedule Your Dental Crown and Bridge Consultation Today</h3>
          <p className="mt-4 text-gray-600">
            Restore your smile and improve your oral health with high-quality dental crowns and bridges. Contact us today to schedule your consultation!
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
