import React from 'react';
import { Helmet } from 'react-helmet';
import { MapPin, Phone } from 'lucide-react';
import Testimonials from '../components/Testimonial';

const DentalVeneersPage = () => {
  return (
    <>
      <Helmet>
        <title>Dental Veneers Faisalabad | Price, Procedure & Benefits</title>
        <meta name="description" content="Discover the benefits, cost, and process of getting dental veneers in Faisalabad. Transform your smile with long-lasting, stain-resistant porcelain veneers." />
      </Helmet>

      <section className="container mx-auto px-4 pt-28">
        <h1 className="text-5xl font-bold leading-tight text-gray-900 mb-4">Porcelain Veneers in Faisalabad</h1>
        <p className="text-lg text-gray-700">At <strong>Doctor Teeth Dental Clinic</strong>, we offer premium porcelain veneers to give you a brighter, more confident smile. Whether you have chipped, stained, or slightly misaligned teeth, our custom veneer treatments provide fast, natural-looking results.</p>
      </section>

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">What Are Porcelain Veneers?</h2>
        <p className="text-gray-700">Porcelain veneers are thin, custom-made shells designed to cover the front surface of your teeth. They help with:</p>
        <ul className="list-disc list-inside mt-4 text-gray-700 space-y-1">
          <li>Chipped or broken teeth</li>
          <li>Discoloration or stains</li>
          <li>Worn-down enamel</li>
          <li>Misalignment or irregular shape</li>
          <li>Gaps or spacing</li>
        </ul>
      </section>

      <section className="bg-gray-50 py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Benefits of Porcelain Veneers</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Restore chipped or cracked teeth</li>
            <li>Fix stubborn discoloration</li>
            <li>Close small gaps</li>
            <li>Improve tooth shape and alignment</li>
            <li>Durable and stain-resistant</li>
            <li>Natural look and feel</li>
            <li>Quick and pain-free</li>
          </ul>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Are You a Candidate for Veneers?</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Healthy gums and enough enamel</li>
          <li>Looking for a lasting cosmetic solution</li>
          <li>No habits like nail-biting or grinding</li>
          <li>Need to fix multiple smile flaws</li>
        </ul>
      </section>

      <section className="bg-white px-4 py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our 4-Step Veneer Process</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li><strong>Consultation:</strong> Smile evaluation & treatment planning</li>
            <li><strong>Preparation:</strong> Enamel reshaping & temporary veneers</li>
            <li><strong>Custom Design:</strong> Lab-created personalized veneers</li>
            <li><strong>Placement:</strong> Permanent bonding for a perfect finish</li>
          </ol>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 bg-gray-50">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Cost of Veneers in Faisalabad</h2>
        <p className="text-gray-700">The price typically ranges from <strong>PKR 12,000–25,000 per tooth</strong> depending on material and complexity. Flexible payment plans are available.</p>
      </section>

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Veneer Aftercare</h2>
        <p className="text-gray-700 mb-2">Post-treatment sensitivity is normal and usually temporary. We recommend:</p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Brushing twice daily with non-abrasive toothpaste</li>
          <li>Daily flossing</li>
          <li>Avoiding hard/staining foods</li>
          <li>Regular dental visits</li>
        </ul>
      </section>

      <section className="container mx-auto px-4 py-12 bg-gray-50">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Veneers vs. Other Treatments</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border text-left">
            <thead className="bg-blue-100 text-blue-900">
              <tr>
                <th className="border px-4 py-2">Treatment</th>
                <th className="border px-4 py-2">Benefits</th>
                <th className="border px-4 py-2">Longevity</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr>
                <td className="border px-4 py-2">Veneers</td>
                <td className="border px-4 py-2">Stain-resistant, reshapes teeth</td>
                <td className="border px-4 py-2">10–20 years</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Whitening</td>
                <td className="border px-4 py-2">Brightens natural teeth</td>
                <td className="border px-4 py-2">6 months–2 years</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Bonding</td>
                <td className="border px-4 py-2">Fixes chips or small gaps</td>
                <td className="border px-4 py-2">3–7 years</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">FAQs About Veneers</h2>
        <div className="space-y-4 text-gray-700">
          <div>
            <h3 className="font-semibold">Are veneers painful?</h3>
            <p>No, the process is painless and done under local anesthesia.</p>
          </div>
          <div>
            <h3 className="font-semibold">Are veneers permanent?</h3>
            <p>They're long-lasting (10–20 years) but not technically permanent.</p>
          </div>
          <div>
            <h3 className="font-semibold">Will insurance cover veneers?</h3>
            <p>Most insurances don’t cover cosmetic treatments like veneers.</p>
          </div>
          <div>
            <h3 className="font-semibold">Do veneers look natural?</h3>
            <p>Yes, porcelain veneers mimic the color and clarity of natural teeth.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 bg-gray-50">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Smile Gallery</h2>
        <Testimonials />
      </section>

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Book Your Consultation</h2>
        <p className="text-gray-700 mb-6">Ready to transform your smile? Book your consultation at Doctor Teeth Dental Clinic today.</p>
        <a href="https://api.whatsapp.com/send/?phone=923216739504&text&type=phone_number&app_absent=0" className="bg-blue-600 text-white font-medium py-2 px-6 rounded-full hover:bg-blue-700 transition-all">
          Schedule Your Appointment
        </a>
      </section>

      <section className="container mx-auto px-4 py-12 bg-gray-50">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Visit Us</h2>
        <div className="flex items-start space-x-2 text-gray-700 mb-2">
          <MapPin className="mt-1" />
          <p>Ajmal Center, near Nadra Executive Office, opposite Gourmet Bakers, Batala Colony Faisalabad</p>
        </div>
        <div className="flex items-center space-x-2">
          <Phone />
          <a href="tel:+923216739504" className="text-blue-600 font-medium hover:underline">+92 321 6739504</a>
        </div>
        <div className="mt-4">
          <a href="https://g.co/kgs/dnjVekN" target="_blank" className="text-blue-600 hover:underline">View on Google Maps</a>
        </div>
      </section>
    </>
  );
};

export default DentalVeneersPage;
