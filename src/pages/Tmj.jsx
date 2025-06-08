import React from "react";
import { Helmet } from "react-helmet";
import { PhoneCall, CheckCircle, ShieldCheck } from "lucide-react";
import LocalSEOSection from "../components/LocalMAp";
import Testimonials from "../components/Testimonial";

export default function TMJTreatmentFaisalabad() {
  return (
    <div className="bg-white pt-20 text-gray-800">
      <Helmet>
        <title>TMJ Treatment in Faisalabad | Jaw Pain, Clicking Sound, Locked Jaw</title>
        <meta
          name="description"
          content="Relieve jaw pain, clicking, and TMJ discomfort at Doctor Teeth Dental Clinic Faisalabad. Specialist diagnosis and non-surgical to advanced TMJ treatments available."
        />
        <meta
          name="keywords"
          content="TMJ Treatment Faisalabad, Jaw Pain Faisalabad, Clicking Jaw Treatment, TMJ Specialist Faisalabad, Locked Jaw Faisalabad"
        />
      </Helmet>

      <section className="px-4 py-12 md:py-20 bg-gradient-to-br from-indigo-50 to-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-900">TMJ Treatment in Faisalabad</h1>
          <p className="mt-4 text-lg text-gray-700">
            Suffering from jaw pain, clicking sounds, or facial tension? We provide expert TMJ disorder diagnosis and treatment options at Doctor Teeth Dental Clinic Faisalabad.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <a
              href="https://api.whatsapp.com/send/?phone=923216739504&text=I%20need%20help%20with%20TMJ%20pain&type=phone_number"
              className="bg-indigo-700 text-white px-6 py-3 rounded-2xl shadow hover:bg-indigo-800 transition"
            >
              WhatsApp a TMJ Specialist
            </a>
            <a href="tel:+923001234567" className="flex items-center gap-2 text-indigo-700 font-medium">
              <PhoneCall size={20} /> Call for Appointment
            </a>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-indigo-800">What is TMJ Disorder?</h2>
            <p className="mt-4 text-gray-700">
              TMJ stands for temporomandibular joint – the hinge connecting your jaw to your skull. Dysfunction in this joint can lead to symptoms like:
            </p>
            <ul className="mt-4 space-y-3 text-gray-800">
              {[
                "Jaw pain or tightness",
                "Clicking or popping sounds",
                "Difficulty opening/closing mouth",
                "Facial pain or tension",
                "Locked jaw episodes",
                "Headaches or ear pain"
              ].map((symptom, i) => (
                <li key={i} className="flex gap-2">
                  <CheckCircle className="text-indigo-600 mt-1" size={20} />
                  {symptom}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl overflow-hidden shadow-md">
            <img
              src="/images/tmj-treatment-faisalabad.jpg"
              alt="TMJ Specialist Faisalabad"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

      <LocalSEOSection />

      <section className="px-4 py-12 bg-indigo-50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-indigo-900 text-center">TMJ Treatment Options We Offer</h3>
          <div className="grid md:grid-cols-2 gap-6 mt-8 text-gray-700">
            {[
              ["Bite Adjustment & Night Guards", "Custom night guards reduce teeth grinding and ease jaw stress."],
              ["TMJ Physical Therapy", "Guided jaw exercises to restore proper joint function."],
              ["Occlusal Splints", "Helps reposition jaw and relieve pressure on TMJ joint."],
              ["Advanced Surgical Options", "For severe cases – we offer joint injections or refer for arthroscopy if needed."],
            ].map(([title, desc], i) => (
              <div key={i} className="flex gap-3">
                <ShieldCheck className="text-indigo-600 mt-1" size={22} />
                <div>
                  <h4 className="font-semibold text-indigo-800">{title}</h4>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-indigo-900">TMJ Treatment Cost in Faisalabad</h3>
          <p className="mt-4 text-gray-600">Treatment cost depends on severity and therapy required. Estimated pricing includes:</p>
          <div className="mt-8 space-y-5 text-left">
            {[
              ["TMJ Consultation & Diagnosis", "Rs. 2,000 – 3,000"],
              ["Custom Night Guard", "Rs. 8,000 – 12,000"],
              ["Splint Therapy", "Rs. 10,000 – 15,000"],
              ["TMJ Physiotherapy (per session)", "Rs. 1,500 – 2,000"],
              ["Advanced Injection / Joint Therapy", "Rs. 20,000+"],
            ].map(([title, price], i) => (
              <div key={i}>
                <h4 className="text-indigo-700 font-semibold">{title}</h4>
                <p className="text-gray-700">{price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <section id="contact" className="px-4 py-12 bg-indigo-50">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-indigo-900">Book Your TMJ Evaluation Today</h3>
          <p className="mt-4 text-gray-700">
            Let’s identify the root cause of your jaw pain and offer safe, personalized treatment. Schedule a specialist TMJ consultation today.
          </p>
          <a
            href="tel:+923216739504"
            className="inline-block mt-6 bg-indigo-700 text-white px-6 py-3 rounded-2xl shadow hover:bg-indigo-800 transition"
          >
            Call Now for Appointment
          </a>
        </div>
      </section>

      <footer className="px-4 py-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Doctor Teeth Dental Clinic Faisalabad. TMJ & Jaw Pain Specialists.
      </footer>
    </div>
  );
}
