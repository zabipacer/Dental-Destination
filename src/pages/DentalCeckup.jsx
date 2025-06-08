import React from "react";
import { Helmet } from "react-helmet";
import { CalendarCheck, CheckCircle, PhoneCall } from "lucide-react";
import LocalSEOSection from "../components/LocalMAp";
import Testimonials from "../components/Testimonial";

export default function DentalCheckupLandingPage() {
  return (
    <div className="bg-white pt-30 text-gray-800">
      <Helmet>
        <title>Best Dental Checkup in Faisalabad | Doctor Teeth Dental Clinic</title>
        <meta name="description" content="Book your professional dental checkup in Faisalabad at Doctor Teeth Dental Clinic. Early detection of oral issues, expert care, and customized dental advice." />
        <meta name="keywords" content="dental checkup Faisalabad, dentist Faisalabad, oral health Faisalabad, best dental clinic Faisalabad, teeth cleaning Faisalabad" />
        <meta property="og:title" content="Best Dental Checkup in Faisalabad | Doctor Teeth Dental Clinic" />
        <meta property="og:description" content="Affordable and expert dental checkups in Faisalabad. Prevent cavities, detect gum disease early, and maintain your oral hygiene with Doctor Teeth." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.doctorteeth.pk/checkup" />
      </Helmet>

      <section className="px-4 py-10 md:py-16 text-center bg-gradient-to-br from-green-100 to-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-green-900">#1 Dental Checkup in Faisalabad</h1>
          <p className="mt-4 text-lg text-gray-600">
            Protect your smile with a comprehensive dental exam and personalized care plan.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <a href="https://api.whatsapp.com/send/?phone=923216739504&text=Hi,+I+want+to+book+a+dental+checkup.&type=phone_number&app_absent=0" className="bg-green-600 text-white px-6 py-3 rounded-2xl shadow hover:bg-green-700 transition">
              Book on WhatsApp
            </a>
            <a href="tel:+03216739504" className="flex items-center gap-2 text-green-700 font-medium">
              <PhoneCall size={20} /> Call Clinic
            </a>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-green-800">Why a Regular Dental Checkup Is Essential</h2>
          <p className="mt-4 text-gray-700 text-center">
            Routine dental exams allow early diagnosis of dental problems like cavities, gum disease, and even oral cancer. They save you pain, money, and time in the long run.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 bg-green-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-green-800 mb-4">What’s Included in Our Dental Checkup?</h3>
            <ul className="space-y-3">
              {["Comprehensive oral examination", "Cavity detection", "Plaque and tartar assessment", "Gum disease screening", "Digital dental X-rays (if needed)", "Customized oral hygiene advice"].map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 mt-1" size={20} />
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <CalendarCheck className="text-green-500 w-64 h-64" />
          </div>
        </div>
      </section>

      <LocalSEOSection />

      <section className="px-4 py-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-green-800 mb-6 text-center">Dental Checkup FAQs</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-green-700">How frequently should I have a dental checkup?</h4>
              <p className="text-gray-700">Dentists recommend visiting every 6 months. However, patients with existing issues may require more frequent visits.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-green-700">Will my dental checkup hurt?</h4>
              <p className="text-gray-700">Not at all. Our exams are gentle and non-invasive, designed to keep you comfortable throughout.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-green-700">What happens if a problem is found?</h4>
              <p className="text-gray-700">We explain the findings clearly and suggest appropriate treatment options based on your needs and budget.</p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <section id="contact" className="px-4 py-12 bg-green-50">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-green-800">Ready to Book Your Checkup?</h3>
          <p className="mt-4 text-gray-600">
            Schedule your professional dental checkup at Doctor Teeth Dental Clinic in Faisalabad today.
          </p>
          <a href="tel:+923001234567" className="inline-block mt-6 bg-green-600 text-white px-6 py-3 rounded-2xl shadow hover:bg-green-700 transition">
            Call Now to Book
          </a>
        </div>
      </section>

      <footer className="px-4 py-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Doctor Teeth Dental Clinic, Faisalabad. All rights reserved.
      </footer>
    </div>
  );
}