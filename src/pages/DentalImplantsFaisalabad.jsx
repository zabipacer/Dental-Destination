import React from "react";
import { Helmet } from "react-helmet";
import { Smile, CheckCircle, PhoneCall, DollarSign } from "lucide-react";
import LocalSEOSection from "../components/LocalMAp";
import Testimonials from "../components/Testimonial";

export default function DentalImplantsLandingPage() {
  return (
    <div className="bg-white pt-30 text-gray-800">
      <Helmet>
        <title>Dental Implants in Faisalabad | Doctor Teeth Dental Clinic</title>
        <meta 
          name="description" 
          content="Get affordable and durable dental implants in Faisalabad at Doctor Teeth Dental Clinic. Restore your smile and confidence with our advanced dental implant services." 
        />
        <meta 
          name="keywords" 
          content="Dental Implants Faisalabad, Dental Implants Price Faisalabad, Affordable Dental Implants, Implant Dentistry Faisalabad, Tooth Implant, Smile Restoration" 
        />
        <meta property="og:title" content="Dental Implants in Faisalabad | Doctor Teeth Dental Clinic" />
        <meta property="og:description" content="Get affordable and durable dental implants in Faisalabad at Doctor Teeth Dental Clinic. Restore your smile and confidence with our advanced dental implant services." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="URL_TO_IMAGE" />
      </Helmet>

      <section className="px-4 py-10 md:py-16 text-center bg-gradient-to-br from-green-100 to-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-green-900">Dental Implants in Faisalabad</h1>
          <p className="mt-4 text-lg text-gray-600">
            Restore your smile and confidence with affordable dental implants in Faisalabad. Durable, long-lasting solutions at Doctor Teeth Dental Clinic.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <a href="https://api.whatsapp.com/send/?phone=923216739504&text&type=phone_number&app_absent=0" className="bg-green-600 text-white px-6 py-3 rounded-2xl shadow hover:bg-green-700 transition">
              Book Appointment
            </a>
            <a href="tel:+03216739504" className="flex items-center gap-2 text-green-600 font-medium">
              <PhoneCall size={20} /> Call Now
            </a>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-green-800">What Are Dental Implants?</h2>
          <p className="mt-4 text-gray-600 text-center">
            Dental implants are artificial tooth roots that are surgically placed into your jawbone. They provide a stable foundation for fixed or removable replacement teeth that are designed to match your natural teeth.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 bg-green-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-green-800 mb-4">Why Choose Us for Dental Implants?</h3>
            <ul className="space-y-3">
              {["Highly skilled implant specialists", "State-of-the-art technology", "Painless procedures with local anesthesia", "Affordable pricing and financing options", "Natural-looking, durable results"].map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1" size={20} />
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center">
            <Smile className="text-green-400 w-64 h-64" />
          </div>
        </div>
      </section>

      <LocalSEOSection />

      <section className="px-4 py-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-green-800 mb-4">How Dental Implants Work</h3>
          <p className="text-gray-700">
            The dental implant process typically involves three main steps:
          </p>
          <ol className="space-y-4 mt-4">
            <li>
              <strong>Step 1:</strong> The implant post is placed into the jawbone through a minor surgical procedure. The post is given time to heal and bond with the bone.
            </li>
            <li>
              <strong>Step 2:</strong> Once healed, a crown or bridge is attached to the implant to restore the tooth's appearance and function.
            </li>
            <li>
              <strong>Step 3:</strong> After the crown or bridge is placed, patients can enjoy their new tooth for many years with proper care.
            </li>
          </ol>
        </div>
      </section>

      <section className="px-4 py-12 bg-green-50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-green-800 mb-6 text-center">Dental Implants Pricing in Faisalabad</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-green-700">Dental Implants Price</h4>
              <p className="text-gray-700">The cost of dental implants in Faisalabad generally ranges from 30,000 PKR to 80,000 PKR per implant, depending on the type of implant, materials, and the complexity of the procedure.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-green-700">Full Mouth Dental Implants</h4>
              <p className="text-gray-700">For full mouth restoration, the cost typically starts at 200,000 PKR and can go up depending on the number of implants and the type of restoration needed.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-green-700">Payment Plans & Insurance</h4>
              <p className="text-gray-700">We offer flexible payment options and work with several insurance providers to help cover the cost of dental implants. Contact us to learn more about financing options available for you.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-green-800 mb-6 text-center">Frequently Asked Questions About Dental Implants</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-green-700">How long do dental implants last?</h4>
              <p className="text-gray-700">Dental implants can last a lifetime with proper care and maintenance, making them a long-term investment in your oral health and appearance.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-green-700">Are dental implants painful?</h4>
              <p className="text-gray-700">The procedure is generally not painful due to the use of local anesthesia. Some discomfort is normal post-surgery, but it is manageable with prescribed pain medications.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-green-700">What are the benefits of dental implants?</h4>
              <p className="text-gray-700">Dental implants offer a natural-looking appearance, improved function, and long-term durability compared to dentures or bridges. They help restore your smile, confidence, and ability to chew comfortably.</p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <section id="contact" className="px-4 py-12 bg-green-50">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-green-800">Schedule Your Dental Implant Consultation Today</h3>
          <p className="mt-4 text-gray-600">
            Restore your smile with dental implants. Book a consultation today and take the first step towards a more confident you!
          </p>
          <a href="tel:+923001234567" className="inline-block mt-6 bg-green-600 text-white px-6 py-3 rounded-2xl shadow hover:bg-green-700 transition">
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
