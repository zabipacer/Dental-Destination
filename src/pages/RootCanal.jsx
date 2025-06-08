import React from "react";
import { Helmet } from "react-helmet";
import { Smile, CheckCircle, PhoneCall, DollarSign } from "lucide-react";
import LocalSEOSection from "../components/LocalMAp";
import Testimonials from "../components/Testimonial";

export default function RootCanalLandingPage() {
  return (
    <div className="bg-white pt-30 text-gray-800">
      <Helmet>
        <title>Root Canal Treatment in Faisalabad | Doctor Teeth Dental Clinic</title>
        <meta 
          name="description" 
          content="Get affordable and effective root canal treatment in Faisalabad at Doctor Teeth Dental Clinic. Save your natural tooth and avoid extractions with our expert care." 
        />
        <meta 
          name="keywords" 
          content="Root Canal Treatment Faisalabad, Root Canal Price Faisalabad, Affordable Root Canal, Best Root Canal Clinic Faisalabad, Painless Root Canal, Endodontic Treatment Faisalabad" 
        />
        <meta property="og:title" content="Root Canal Treatment in Faisalabad | Doctor Teeth Dental Clinic" />
        <meta property="og:description" content="Get affordable and effective root canal treatment in Faisalabad at Doctor Teeth Dental Clinic. Save your natural tooth and avoid extractions with our expert care." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="URL_TO_IMAGE" />
      </Helmet>

      <section className="px-4 py-10 md:py-16 text-center bg-gradient-to-br from-purple-100 to-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-900">Root Canal Treatment in Faisalabad</h1>
          <p className="mt-4 text-lg text-gray-600">
            Save your natural tooth with expert root canal treatment at Doctor Teeth Dental Clinic in Faisalabad. Affordable, effective, and painless procedures to restore your smile.
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
          <h2 className="text-3xl font-bold text-center text-purple-800">What is a Root Canal?</h2>
          <p className="mt-4 text-gray-600 text-center">
            A root canal is a dental procedure to treat infection at the center of a tooth (the root canal system). If you have a tooth infection or decay, a root canal treatment can save your tooth from extraction.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 bg-purple-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-purple-800 mb-4">Why Choose Us for Root Canal Treatment?</h3>
            <ul className="space-y-3">
              {["Experienced root canal specialists", "State-of-the-art equipment", "Pain-free treatment options", "Affordable pricing with flexible payment plans", "Guaranteed results"].map((point, index) => (
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
          <h3 className="text-2xl font-bold text-purple-800 mb-4">How Does Root Canal Treatment Work?</h3>
          <p className="text-gray-700">
            During a root canal procedure, the infected or damaged tissue inside your tooth is carefully removed, and the inside of the tooth is cleaned and sealed. A filling is placed in the tooth to restore its shape and function.
          </p>
          <p className="text-gray-700 mt-4">
            Root canal treatment is typically performed in one or two visits. Our experienced team uses advanced techniques to ensure a painless and efficient treatment experience.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 bg-purple-50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-purple-800 mb-6 text-center">Root Canal Pricing in Faisalabad</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-purple-700">Root Canal Treatment Price</h4>
              <p className="text-gray-700">The cost of a root canal treatment in Faisalabad generally ranges from 5,000 PKR to 20,000 PKR, depending on factors such as the tooth's location, complexity, and the need for additional procedures like a crown.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-purple-700">Additional Costs</h4>
              <p className="text-gray-700">In some cases, additional procedures such as a crown or post and core might be required after a root canal. These can cost an additional 5,000 PKR to 15,000 PKR, depending on the materials used.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-purple-700">Payment Plans & Insurance</h4>
              <p className="text-gray-700">We offer flexible payment plans and accept various insurance providers to make your root canal treatment more affordable. Contact us for more details.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-purple-800 mb-6 text-center">Frequently Asked Questions About Root Canal Treatment</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-purple-700">Is a root canal treatment painful?</h4>
              <p className="text-gray-700">Root canal treatment is often associated with pain, but modern techniques and anesthesia make the procedure virtually pain-free. Many patients report feeling only mild discomfort after the procedure.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-purple-700">How long does root canal treatment take?</h4>
              <p className="text-gray-700">Root canal treatments usually take one to two hours per session, with most cases requiring only one or two visits. The duration depends on the complexity of the treatment and the tooth's location.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-purple-700">Can I go back to work after a root canal?</h4>
              <p className="text-gray-700">Yes, most patients are able to return to their normal activities, including work, after their root canal treatment. However, you may experience some mild discomfort for a few days.</p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <section id="contact" className="px-4 py-12 bg-purple-50">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-purple-800">Schedule Your Root Canal Consultation Today</h3>
          <p className="mt-4 text-gray-600">
            Don’t let tooth pain hold you back. Book your root canal consultation with our expert team today and save your natural tooth.
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
