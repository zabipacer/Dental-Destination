import React from "react";
import { Helmet } from "react-helmet";
import { AlarmClock, PhoneCall, ShieldCheck } from "lucide-react";
import LocalSEOSection from "../components/LocalMAp";
import Testimonials from "../components/Testimonial";

export default function EmergencyDentistFaisalabad() {
  return (
    <div className="bg-white pt-30 text-gray-800">
      <Helmet>
        <title>Emergency Dentist in Faisalabad | 24/7 Dental Care | Doctor Teeth</title>
        <meta
          name="description"
          content="Need an emergency dentist in Faisalabad? Doctor Teeth Dental Clinic offers urgent dental care for toothache, broken teeth, swelling, bleeding gums & more. Open late."
        />
        <meta
          name="keywords"
          content="Emergency Dentist Faisalabad, Dental Emergency Faisalabad, 24 Hour Dentist Faisalabad, Urgent Toothache Relief, Broken Tooth Emergency"
        />
        <meta property="og:title" content="Emergency Dentist in Faisalabad | 24/7 Dental Care | Doctor Teeth" />
        <meta
          property="og:description"
          content="Looking for urgent dental help? Get fast pain relief and expert care from Doctor Teeth Dental Clinic, Faisalabad’s trusted emergency dentist."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="URL_TO_YOUR_IMAGE" />
      </Helmet>

      <section className="px-4 py-10 md:py-16 text-center bg-gradient-to-br from-rose-100 to-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-rose-900">Emergency Dentist in Faisalabad</h1>
          <p className="mt-4 text-lg text-gray-600">
            Sudden toothache, broken tooth, or swelling? Get fast, expert care at Doctor Teeth Dental Clinic – your trusted emergency dentist in Faisalabad.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <a
              href="https://api.whatsapp.com/send/?phone=923216739504&text=I%20need%20urgent%20dental%20care&type=phone_number&app_absent=0"
              className="bg-rose-600 text-white px-6 py-3 rounded-2xl shadow hover:bg-rose-700 transition"
            >
              WhatsApp Now
            </a>
            <a href="tel:+03216739504" className="flex items-center gap-2 text-rose-600 font-medium">
              <PhoneCall size={20} /> Call Emergency Line
            </a>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-rose-800">When to Visit an Emergency Dentist?</h2>
          <p className="mt-4 text-gray-600 text-center">
            If you're in severe pain, bleeding, or have broken a tooth — don’t wait. Get immediate dental help. Common dental emergencies we treat:
          </p>
          <ul className="mt-6 grid md:grid-cols-2 gap-4 text-gray-700">
            {[
              "Severe toothache or dental pain",
              "Broken, chipped, or knocked-out tooth",
              "Dental swelling or abscess",
              "Bleeding from gums or mouth",
              "Lost dental filling or crown",
              "Injury from an accident or sports trauma",
              "Wisdom tooth pain or jaw locking"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <ShieldCheck size={20} className="text-rose-500 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <LocalSEOSection />

      <section className="px-4 py-12 bg-rose-50">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-rose-800 mb-4">Fast Dental Pain Relief in Faisalabad</h3>
            <p className="text-gray-700 mb-4">
              Doctor Teeth Dental Clinic offers immediate care with the latest tools and caring dentists. We handle everything from tooth extractions to temporary fillings and root canals on the spot.
            </p>
            <ul className="space-y-2">
              {[
                "Same-day appointments available",
                "Pain management for urgent relief",
                "Walk-ins welcome (call ahead if possible)",
                "Follow-up and full treatment options provided"
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <AlarmClock size={18} className="text-rose-500 mt-1" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center">
            <img src="/images/emergency-dentist-faisalabad.jpg" alt="Emergency Dentist" className="rounded-2xl shadow-md max-w-full" />
          </div>
        </div>
      </section>

      <section className="px-4 py-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-rose-800 mb-6">Emergency Dentist Cost in Faisalabad</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-rose-700">Emergency Consultation</h4>
              <p className="text-gray-700">Rs. 500 – Includes oral examination and pain relief prescription.</p>
            </div>
            <div>
              <h4 className="font-semibold text-rose-700">Tooth Extraction (Same Day)</h4>
              <p className="text-gray-700">Rs. 2,000 – 5,000 depending on complexity.</p>
            </div>
            <div>
              <h4 className="font-semibold text-rose-700">Temporary Filling or Crown Fix</h4>
              <p className="text-gray-700">Rs. 1,500 – 3,000. Permanent treatment advised after initial relief.</p>
            </div>
            <div>
              <h4 className="font-semibold text-rose-700">Root Canal for Emergency Pain</h4>
              <p className="text-gray-700">Rs. 5,000 – 12,000 depending on the tooth and condition.</p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <section id="contact" className="px-4 py-12 bg-rose-50">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-rose-800">Get Help Now – Emergency Dental Care Available</h3>
          <p className="mt-4 text-gray-600">
            If you're in pain or had a dental accident, don’t delay. We’re ready to treat you now. Call or WhatsApp for quick help from our emergency dental team in Faisalabad.
          </p>
          <a
            href="tel:+923001234567"
            className="inline-block mt-6 bg-rose-600 text-white px-6 py-3 rounded-2xl shadow hover:bg-rose-700 transition"
          >
            Call Now for Emergency
          </a>
        </div>
      </section>

      <footer className="px-4 py-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Doctor Teeth Dental Clinic, Faisalabad. Emergency Dentist Services.
      </footer>
    </div>
  );
}
