import React from "react";
import { Helmet } from "react-helmet";
import { CheckCircle, PhoneCall, ShieldCheck } from "lucide-react";
import LocalSEOSection from "../components/LocalMAp";
import Testimonials from "../components/Testimonial";

export default function MaxillofacialSurgeryFaisalabad() {
  return (
    <div className="bg-white pt-20 text-gray-800">
      <Helmet>
        <title>Maxillofacial Surgery in Faisalabad | Jaw, Facial, TMJ, Trauma | Doctor Teeth</title>
        <meta
          name="description"
          content="Doctor Teeth offers expert maxillofacial surgery in Faisalabad for jaw pain, trauma, TMJ disorders, cyst removal & facial deformities. Book a specialist consultation today."
        />
        <meta
          name="keywords"
          content="Maxillofacial Surgery Faisalabad, Oral Surgery Faisalabad, Jaw Surgery Faisalabad, Facial Trauma Treatment, TMJ Surgery, Impacted Teeth Removal"
        />
        <meta property="og:title" content="Maxillofacial Surgery in Faisalabad | Jaw, Facial, TMJ, Trauma" />
        <meta
          property="og:description"
          content="Consult our oral and maxillofacial surgery specialists in Faisalabad for expert jaw and facial treatments. Affordable prices, safe procedures."
        />
      </Helmet>

      <section className="px-4 py-12 md:py-20 bg-gradient-to-br from-blue-50 to-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900">Maxillofacial Surgery in Faisalabad</h1>
          <p className="mt-4 text-lg text-gray-700">
            Need expert jaw, facial, or oral surgery? At Doctor Teeth Dental Clinic Faisalabad, we provide safe, specialist-led maxillofacial surgeries including trauma, TMJ, and impacted teeth.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <a
              href="https://api.whatsapp.com/send/?phone=923216739504&text=I%20need%20a%20consultation%20for%20oral%20surgery&type=phone_number"
              className="bg-blue-700 text-white px-6 py-3 rounded-2xl shadow hover:bg-blue-800 transition"
            >
              WhatsApp Specialist
            </a>
            <a href="tel:+03216739504" className="flex items-center gap-2 text-blue-700 font-medium">
              <PhoneCall size={20} /> Call for Appointment
            </a>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-bold text-blue-800">Our Maxillofacial Surgery Services</h2>
            <p className="mt-4 text-gray-700">
              We offer a full range of oral & facial surgeries using the latest techniques for faster recovery and less discomfort.
            </p>
            <ul className="mt-6 space-y-3 text-gray-800">
              {[
                "Wisdom Tooth Extraction (Impacted / Surgical)",
                "TMJ Disorder Treatment & Joint Surgery",
                "Jaw Correction (Orthognathic Surgery)",
                "Facial Trauma & Injury Repair",
                "Cyst or Tumor Removal (Oral Region)",
                "Bone Grafting & Ridge Augmentation",
                "Surgical Tooth Exposure for Braces",
                "Pre-Implant Bone Surgery"
              ].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <CheckCircle className="text-blue-600 mt-1" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl overflow-hidden shadow-md">
            <img
              src="polish.webp"
              alt="Maxillofacial Surgeon Faisalabad"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

      <LocalSEOSection />

      <section className="px-4 py-12 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-blue-900 text-center">Why Choose Us for Maxillofacial Surgery?</h3>
          <div className="grid md:grid-cols-2 gap-6 mt-8 text-gray-700">
            {[
              ["Specialist Oral Surgeons", "Our procedures are handled by highly experienced maxillofacial surgeons."],
              ["Painless Modern Surgery", "We use advanced anesthesia and laser tools for minimally invasive operations."],
              ["Safe & Sterile Facility", "Our clinic meets strict hygiene standards with hospital-level care."],
              ["Affordable Pricing", "We provide clear, transparent pricing for all procedures."],
            ].map(([title, desc], i) => (
              <div key={i} className="flex gap-3">
                <ShieldCheck className="text-blue-600 mt-1" size={22} />
                <div>
                  <h4 className="font-semibold text-blue-800">{title}</h4>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-blue-900 text-center">Maxillofacial Surgery Cost in Faisalabad</h3>
          <p className="text-center mt-4 text-gray-600">
            Prices vary depending on procedure complexity. We offer affordable rates with flexible treatment options.
          </p>
          <div className="mt-8 space-y-5">
            {[
              ["Surgical Wisdom Tooth Extraction", "Rs. 6,000 – 12,000 (based on impaction type)"],
              ["TMJ Disorder Treatment", "Rs. 10,000 – 25,000 (diagnosis & treatment plan)"],
              ["Oral Cyst or Tumor Removal", "Rs. 8,000 – 20,000 (depending on size/location)"],
              ["Orthognathic Surgery (Jaw Correction)", "Starts from Rs. 80,000 (consult required)"],
            ].map(([title, price], i) => (
              <div key={i}>
                <h4 className="text-blue-700 font-semibold">{title}</h4>
                <p className="text-gray-700">{price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <section id="contact" className="px-4 py-12 bg-blue-50">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-blue-900">Book a Maxillofacial Consultation in Faisalabad</h3>
          <p className="mt-4 text-gray-700">
            Schedule a one-on-one appointment with our oral & maxillofacial surgery team. Get the right diagnosis and safe, effective treatment.
          </p>
          <a
            href="tel:+923001234567"
            className="inline-block mt-6 bg-blue-700 text-white px-6 py-3 rounded-2xl shadow hover:bg-blue-800 transition"
          >
            Call Now to Book
          </a>
        </div>
      </section>

      <footer className="px-4 py-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Doctor Teeth Dental Clinic, Faisalabad. Maxillofacial Surgery Services.
      </footer>
    </div>
  );
}
