import React from "react";
import { Helmet } from "react-helmet";
import { Smile, CheckCircle, PhoneCall, Heart } from "lucide-react";
import LocalSEOSection from "../components/LocalMAp";
import Testimonials from "../components/Testimonial";

export default function PediatricDentistryLandingPage() {
  return (
    <div className="bg-white pt-30 text-gray-800">
      <Helmet>
        <title>Pediatric Dentistry in Faisalabad | Doctor Teeth Dental Clinic</title>
        <meta
          name="description"
          content="Looking for pediatric dentistry in Faisalabad? Doctor Teeth Dental Clinic offers expert care for children's dental needs in a friendly and comfortable environment."
        />
        <meta
          name="keywords"
          content="Pediatric Dentistry Faisalabad, Children's Dentist Faisalabad, Kids Dental Care Faisalabad, Pediatric Dental Care, Best Pediatric Dentist Faisalabad"
        />
        <meta property="og:title" content="Pediatric Dentistry in Faisalabad | Doctor Teeth Dental Clinic" />
        <meta
          property="og:description"
          content="Looking for pediatric dentistry in Faisalabad? Doctor Teeth Dental Clinic offers expert care for children's dental needs in a friendly and comfortable environment."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="URL_TO_IMAGE" />
      </Helmet>

      <section className="px-4 py-10 md:py-16 text-center bg-gradient-to-br from-teal-100 to-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-teal-900">Pediatric Dentistry in Faisalabad</h1>
          <p className="mt-4 text-lg text-gray-600">
            Ensure your child's smile stays healthy and bright with expert pediatric dental care at Doctor Teeth Dental Clinic in Faisalabad. We provide gentle, compassionate care to children of all ages.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <a href="https://api.whatsapp.com/send/?phone=923216739504&text&type=phone_number&app_absent=0" className="bg-teal-600 text-white px-6 py-3 rounded-2xl shadow hover:bg-teal-700 transition">
              Book Appointment
            </a>
            <a href="tel:+03216739504" className="flex items-center gap-2 text-teal-600 font-medium">
              <PhoneCall size={20} /> Call Now
            </a>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-teal-800">What is Pediatric Dentistry?</h2>
          <p className="mt-4 text-gray-600 text-center">
            Pediatric dentistry focuses on the dental care of children, from infancy through adolescence. Our expert pediatric dentists are trained to address the specific dental needs of growing children in a calm and friendly environment.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 bg-teal-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-teal-800 mb-4">Why Choose Us for Pediatric Dentistry?</h3>
            <ul className="space-y-3">
              {[
                "Experienced pediatric dentists who specialize in children's care",
                "Gentle and caring approach to make children feel comfortable",
                "State-of-the-art equipment for pediatric dental care",
                "Preventive care to ensure long-term dental health for your child",
                "Child-friendly clinic with a fun and welcoming atmosphere"
              ].map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-teal-500 mt-1" size={20} />
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center">
            <Smile className="text-teal-400 w-64 h-64" />
          </div>
        </div>
      </section>

      <LocalSEOSection />

      <section className="px-4 py-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-teal-800 mb-4">Our Pediatric Dentistry Services</h3>
          <p className="text-gray-700">
            We offer a wide range of pediatric dental services to ensure your child's oral health remains in excellent condition:
          </p>
          <ul className="mt-4 space-y-4">
            {[
              "Routine checkups and cleanings",
              "Dental fillings for cavities",
              "Pediatric root canals",
              "Dental sealants and fluoride treatments",
              "Space maintainers for growing teeth",
              "Emergency dental care"
            ].map((service, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="text-teal-500 mt-1" size={20} />
                <span className="text-gray-700">{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-4 py-12 bg-teal-50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-teal-800 mb-4 text-center">Pediatric Dentistry Pricing in Faisalabad</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-teal-700">Routine Checkups & Cleanings</h4>
              <p className="text-gray-700">Routine dental exams and cleaning for children typically cost between 1,500 PKR to 3,000 PKR, depending on the age and condition of your child's teeth.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-teal-700">Dental Fillings</h4>
              <p className="text-gray-700">Dental fillings for cavities are generally priced between 2,000 PKR to 5,000 PKR per tooth, based on the type of filling required.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-teal-700">Emergency Care</h4>
              <p className="text-gray-700">Emergency dental treatments for children range between 3,000 PKR to 8,000 PKR, depending on the severity of the condition.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-teal-700">Orthodontic Consultations</h4>
              <p className="text-gray-700">Consultations for orthodontic care, including braces, typically range from 2,500 PKR to 5,000 PKR per visit.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-teal-800 mb-6 text-center">Frequently Asked Questions About Pediatric Dentistry</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-teal-700">At what age should I take my child to the dentist for the first time?</h4>
              <p className="text-gray-700">It's recommended to take your child to the dentist by the age of 1 or within six months of their first tooth appearing, whichever comes first. Early visits ensure your child’s dental health is off to a great start.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-teal-700">How often should my child visit the dentist?</h4>
              <p className="text-gray-700">Children should visit the dentist every six months for regular checkups and cleanings. This helps prevent cavities and other oral health issues from developing.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-teal-700">What if my child has a dental emergency?</h4>
              <p className="text-gray-700">In case of a dental emergency, such as a tooth injury or severe pain, don’t hesitate to contact us immediately. We offer emergency dental services to address urgent issues promptly.</p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <section id="contact" className="px-4 py-12 bg-teal-50">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-teal-800">Schedule Your Pediatric Dental Consultation Today</h3>
          <p className="mt-4 text-gray-600">
            Ensure your child's smile stays healthy with the help of our expert pediatric dentists. Schedule a consultation at Doctor Teeth Dental Clinic today.
          </p>
          <a href="tel:+923001234567" className="inline-block mt-6 bg-teal-600 text-white px-6 py-3 rounded-2xl shadow hover:bg-teal-700 transition">
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
