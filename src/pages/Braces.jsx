import React from "react";
import { Helmet } from "react-helmet";
import { Smile, CheckCircle, PhoneCall, DollarSign } from "lucide-react";
import LocalSEOSection from "../components/LocalMAp";
import Testimonials from "../components/Testimonial";

export default function BracesAndAlignersLandingPage() {
  return (
    <div className="bg-white pt-30 text-gray-800">
      <Helmet>
        <title>Braces and Aligners in Faisalabad | Doctor Teeth Dental Clinic</title>
        <meta 
          name="description" 
          content="Get the best braces and aligners in Faisalabad at Doctor Teeth Dental Clinic. Achieve a straight, confident smile with our affordable and effective orthodontic treatments." 
        />
        <meta 
          name="keywords" 
          content="Braces Faisalabad, Aligners Faisalabad, Braces Price Faisalabad, Clear Aligners Faisalabad, Affordable Braces, Teeth Alignment Faisalabad" 
        />
        <meta property="og:title" content="Braces and Aligners in Faisalabad | Doctor Teeth Dental Clinic" />
        <meta property="og:description" content="Get the best braces and aligners in Faisalabad at Doctor Teeth Dental Clinic. Achieve a straight, confident smile with our affordable and effective orthodontic treatments." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="URL_TO_IMAGE" />
      </Helmet>

      <section className="px-4 py-10 md:py-16 text-center bg-gradient-to-br from-purple-100 to-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-900">Braces and Aligners in Faisalabad</h1>
          <p className="mt-4 text-lg text-gray-600">
            Achieve a straight, beautiful smile with braces and aligners at Doctor Teeth Dental Clinic in Faisalabad. Affordable, effective treatments tailored for your needs.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <a href="https://api.whatsapp.com/send/?phone=923216739504&text&type=phone_number&app_absent=0" className="bg-purple-600 text-white px-6 py-3 rounded-2xl shadow hover:bg-purple-700 transition">
              Book Appointment
            </a>
            <a href="tel:+03216739504" className="flex items-center gap-2 text-purple-600 font-medium">
              <PhoneCall size={20} /> Call Now
            </a>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-purple-800">What Are Braces and Aligners?</h2>
          <p className="mt-4 text-gray-600 text-center">
            Braces and aligners are orthodontic devices used to straighten teeth, correct bite issues, and improve the overall appearance of your smile. Whether you're interested in traditional braces or clear aligners, we offer both options for effective and lasting results.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 bg-purple-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-purple-800 mb-4">Why Choose Us for Braces and Aligners?</h3>
            <ul className="space-y-3">
              {["Experienced orthodontists", "State-of-the-art equipment", "Custom treatment plans", "Affordable pricing and payment options", "Clear aligners for a discreet treatment"].map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-purple-500 mt-1" size={20} />
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center">
            <Smile className="text-purple-400 w-64 h-64" />
          </div>
        </div>
      </section>

      <LocalSEOSection />

      <section className="px-4 py-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-purple-800 mb-4">How Braces and Aligners Work</h3>
          <p className="text-gray-700">
            Braces use metal brackets and wires to gradually move teeth into their proper positions, while clear aligners are transparent plastic trays that fit over the teeth to move them into alignment. Both treatments work by applying consistent, gentle pressure to the teeth over time.
          </p>
          <p className="text-gray-700 mt-4">
            After your initial consultation, we’ll develop a personalized treatment plan based on your needs and goals, ensuring that your smile transformation is both comfortable and effective.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 bg-purple-50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-purple-800 mb-6 text-center">Braces and Aligners Pricing in Faisalabad</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-purple-700">Braces Price</h4>
              <p className="text-gray-700">The cost of traditional braces typically ranges from 40,000 PKR to 120,000 PKR in Faisalabad. The final price depends on factors like the type of braces and the duration of treatment.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-purple-700">Clear Aligners Price</h4>
              <p className="text-gray-700">Clear aligners usually range from 80,000 PKR to 200,000 PKR, depending on the complexity of your treatment and the brand of aligners used.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-purple-700">Payment Plans & Insurance</h4>
              <p className="text-gray-700">We offer flexible payment plans and accept various insurance providers to make your braces or aligners treatment more affordable. Contact us for more details.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-purple-800 mb-6 text-center">Frequently Asked Questions About Braces and Aligners</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-purple-700">How long does the braces treatment take?</h4>
              <p className="text-gray-700">Braces treatment typically takes 18 to 24 months, but the duration can vary depending on your individual needs and the complexity of the case.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-purple-700">Are clear aligners as effective as traditional braces?</h4>
              <p className="text-gray-700">Yes, clear aligners are highly effective for many orthodontic issues, though they may not be suitable for more complex cases. Our orthodontists will guide you in selecting the best treatment option for your needs.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-purple-700">Is the braces treatment painful?</h4>
              <p className="text-gray-700">There may be some discomfort when the braces are first applied and after adjustments, but this is temporary. Most patients find the treatment manageable with over-the-counter pain relievers.</p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <section id="contact" className="px-4 py-12 bg-purple-50">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-purple-800">Schedule Your Braces or Aligners Consultation Today</h3>
          <p className="mt-4 text-gray-600">
            Achieve a straight and beautiful smile with our braces and aligners. Book your consultation today and start your journey towards a confident new smile!
          </p>
          <a href="tel:+923001234567" className="inline-block mt-6 bg-purple-600 text-white px-6 py-3 rounded-2xl shadow hover:bg-purple-700 transition">
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
