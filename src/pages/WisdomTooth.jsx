import React from "react";
import { Helmet } from "react-helmet";
import { Smile, CheckCircle, PhoneCall, DollarSign } from "lucide-react";
import LocalSEOSection from "../components/LocalMAp";
import Testimonials from "../components/Testimonial";

export default function WisdomToothExtractionLandingPage() {
  return (
    <div className="bg-white pt-30 text-gray-800">
      <Helmet>
        <title>Wisdom Tooth Extraction in Faisalabad | Doctor Teeth Dental Clinic</title>
        <meta 
          name="description" 
          content="Looking for wisdom tooth extraction in Faisalabad? Doctor Teeth Dental Clinic offers safe, efficient, and affordable wisdom tooth extractions performed by experienced professionals." 
        />
        <meta 
          name="keywords" 
          content="Wisdom Tooth Extraction Faisalabad, Wisdom Tooth Removal Price Faisalabad, Affordable Wisdom Tooth Extraction, Best Dentist Faisalabad, Tooth Removal Surgery Faisalabad" 
        />
        <meta property="og:title" content="Wisdom Tooth Extraction in Faisalabad | Doctor Teeth Dental Clinic" />
        <meta property="og:description" content="Looking for wisdom tooth extraction in Faisalabad? Doctor Teeth Dental Clinic offers safe, efficient, and affordable wisdom tooth extractions performed by experienced professionals." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="URL_TO_IMAGE" />
      </Helmet>

      <section className="px-4 py-10 md:py-16 text-center bg-gradient-to-br from-purple-100 to-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-900">Wisdom Tooth Extraction in Faisalabad</h1>
          <p className="mt-4 text-lg text-gray-600">
            If you're experiencing discomfort or pain from your wisdom teeth, get safe and affordable wisdom tooth extraction at Doctor Teeth Dental Clinic in Faisalabad. Our experienced team ensures a quick and comfortable procedure.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <a href="https://api.whatsapp.com/send/?phone=923216739504&text&type=phone_number&app_absent=0" className="bg-purple-600 text-white px-6 py-3 rounded-2xl shadow hover:bg-purple-700 transition">
              Book Appointment
            </a>
            <a href="tel:+923001234567" className="flex items-center gap-2 text-purple-600 font-medium">
              <PhoneCall size={20} /> Call Now
            </a>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-purple-800">What is Wisdom Tooth Extraction?</h2>
          <p className="mt-4 text-gray-600 text-center">
            Wisdom tooth extraction is a common procedure to remove one or more of your third molars (wisdom teeth) when they are causing pain, infection, or other dental problems. If you experience discomfort from your wisdom teeth, it may be time for an extraction.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 bg-purple-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-purple-800 mb-4">Why Choose Us for Wisdom Tooth Extraction?</h3>
            <ul className="space-y-3">
              {["Experienced dental surgeons", "Safe, pain-free extraction", "State-of-the-art dental equipment", "Affordable pricing with payment options", "Comprehensive aftercare services"].map((point, index) => (
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
          <h3 className="text-2xl font-bold text-purple-800 mb-4">How Does Wisdom Tooth Extraction Work?</h3>
          <p className="text-gray-700">
            Wisdom tooth extraction is typically performed under local anesthesia to numb the area around the tooth. In some cases, sedation or general anesthesia may be used. The tooth is carefully removed, and stitches may be used to close the extraction site.
          </p>
          <p className="text-gray-700 mt-4">
            The procedure generally takes 30 minutes to an hour, depending on the complexity of the extraction. After the procedure, you will be given instructions for post-treatment care, including pain management and how to promote healing.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 bg-purple-50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-purple-800 mb-6 text-center">Wisdom Tooth Extraction Pricing in Faisalabad</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-purple-700">Wisdom Tooth Extraction Price</h4>
              <p className="text-gray-700">The cost of wisdom tooth extraction in Faisalabad typically ranges from 4,000 PKR to 15,000 PKR per tooth, depending on the complexity of the extraction and whether sedation or anesthesia is required.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-purple-700">Additional Costs</h4>
              <p className="text-gray-700">In some cases, additional procedures like x-rays, sedation, or post-extraction care may incur additional charges. Contact us for a personalized quote.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-purple-700">Payment Plans & Insurance</h4>
              <p className="text-gray-700">We offer flexible payment plans and accept several insurance providers to help make wisdom tooth extraction affordable for you. Please contact us for more details.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-purple-800 mb-6 text-center">Frequently Asked Questions About Wisdom Tooth Extraction</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-purple-700">Is wisdom tooth extraction painful?</h4>
              <p className="text-gray-700">Most wisdom tooth extractions are performed with local anesthesia, so the procedure itself is painless. You may experience mild discomfort or swelling after the extraction, but this can usually be managed with painkillers.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-purple-700">How long does recovery take after wisdom tooth extraction?</h4>
              <p className="text-gray-700">The recovery time for wisdom tooth extraction varies, but most patients heal within a few days to a week. Swelling and discomfort may persist for a few days, but following our aftercare instructions will speed up your recovery.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-purple-700">Can I eat after wisdom tooth extraction?</h4>
              <p className="text-gray-700">For the first few days after the extraction, we recommend sticking to soft foods and avoiding hot or spicy items. You should also avoid chewing on the side of the extraction site to prevent irritation or injury.</p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <section id="contact" className="px-4 py-12 bg-purple-50">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-purple-800">Schedule Your Wisdom Tooth Extraction Consultation Today</h3>
          <p className="mt-4 text-gray-600">
            Don’t suffer from wisdom tooth pain. Schedule your consultation at Doctor Teeth Dental Clinic today and let our experts help you with a safe and efficient wisdom tooth extraction.
          </p>
          <a href="tel:+923216739504" className="inline-block mt-6 bg-purple-600 text-white px-6 py-3 rounded-2xl shadow hover:bg-purple-700 transition">
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
