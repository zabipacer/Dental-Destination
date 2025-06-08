import React from 'react';
import { Helmet } from 'react-helmet';
import { FaPhoneAlt, FaMapMarkerAlt, FaCalendarCheck } from 'react-icons/fa';
import LocalSEOSection from '../components/LocalMAp';
import Testimonials from '../components/Testimonial';

const TeethScalingPolishingPage = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Doctor Teeth Dental Clinic",
    "image": "",
    "url": "https://yourwebsite.com/teeth-scaling-polishing-faisalabad",
    "telephone": "+92-321-6739504",
    "priceRange": "PKR 1500 - 5000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Main Road",
      "addressLocality": "Faisalabad",
      "addressRegion": "Punjab",
      "postalCode": "38000",
      "addressCountry": "PK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 31.5204,
      "longitude": 73.6873
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "10:00",
        "closes": "22:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "11:00",
        "closes": "18:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "250"
    },
    "sameAs": [
      "https://www.facebook.com/DoctorTeethPK",
      "https://www.instagram.com/DoctorTeethPK"
    ],
    "potentialAction": {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://wa.me/923216739504",
        "inLanguage": "en",
        "actionPlatform": [
          "https://schema.org/DesktopWebPlatform",
          "https://schema.org/MobileWebPlatform"
        ]
      },
      "result": {
        "@type": "Reservation",
        "name": "Teeth Scaling & Polishing Appointment"
      }
    }
  };

  return (
    <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-16 pt-30 px-8 lg:px-16">
      <Helmet>
        <title>Teeth Scaling & Polishing in Faisalabad | Doctor Teeth Dental Clinic</title>
        <meta name="description" content="Get professional teeth scaling and polishing in Faisalabad at Doctor Teeth Dental Clinic. Affordable, pain-free dental care for a brighter smile!" />
        <meta name="keywords" content="Teeth Scaling, Teeth Polishing, Scaling Polishing Price in Faisalabad, Dentist in Faisalabad, Professional Teeth Cleaning, Oral Hygiene, Best Dental Care in Faisalabad" />
        <meta charSet="utf-8" />
        <meta property="og:title" content="Teeth Scaling & Polishing in Faisalabad | Doctor Teeth Dental Clinic" />
        <meta property="og:description" content="Get professional teeth scaling and polishing in Faisalabad at Doctor Teeth Dental Clinic. Affordable, pain-free dental care for a brighter smile!" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://doctorteethclinic.com/teeth-scaling-polishing-faisalabad" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Teeth Scaling & Polishing for a Brighter Smile
          </h1>
          <p className="text-lg lg:text-xl text-blue-100">
            At Doctor Teeth Dental Clinic, we provide professional teeth scaling and polishing services in Faisalabad, ensuring a brighter, cleaner smile. Our expert team is committed to delivering pain-free and affordable dental care for all your oral hygiene needs. <strong>Our teeth scaling and polishing services are competitively priced, starting from just PKR 1500 to 5000 in Faisalabad.</strong>
          </p>

          <h2 className="text-2xl font-semibold text-blue-100 mt-6">Why Regular Teeth Scaling & Polishing is Important?</h2>
          <p className="text-blue-200">
            Regular teeth scaling and polishing help to remove plaque and tartar buildup that cannot be eliminated by regular brushing. This helps prevent common dental issues such as gum disease, cavities, and bad breath. Polishing also helps to brighten your smile, leaving you with smooth, shiny teeth. <strong>Our affordable teeth polishing price in Faisalabad ensures everyone can access these crucial dental care services.</strong>
          </p>

          <div className="space-y-4 mt-6">
            <div className="flex items-center gap-2 bg-blue-700 px-6 py-3 rounded-full shadow-lg cursor-pointer hover:bg-blue-800 transition-all duration-300">
              <FaCalendarCheck className="w-6 h-6" />
              <span>Book Your Appointment</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <FaPhoneAlt className="w-5 h-5" />
              <a href="tel:+923216739504" className="text-blue-200 hover:text-white">Call Now: +92-321-6739504</a>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <FaMapMarkerAlt className="w-5 h-5" />
              <span>Main Road, Faisalabad</span>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center items-center">
          <div className="relative">
            <img
              src="polish.webp"
              alt="Teeth Scaling and Polishing"
              className="rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
              loading="eager"
              width={500}
              height={350}
            />
          </div>
        </div>
      </div>

      {/* Key Benefits Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-semibold text-center mb-8">Why Choose Us for Your Teeth Scaling & Polishing?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-blue-700 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-blue-100 mb-4">Experienced Dentists</h3>
            <p className="text-blue-200">Our skilled team of dentists uses the latest equipment and techniques to ensure you receive the best scaling and polishing experience.</p>
          </div>
          <div className="bg-blue-700 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-blue-100 mb-4">Affordable Prices</h3>
            <p className="text-blue-200">We offer high-quality treatments at affordable rates, making it accessible for everyone to maintain optimal oral hygiene. <strong>Our scaling and polishing prices start from PKR 1500, making it an excellent option for anyone looking to improve their smile.</strong></p>
          </div>
          <div className="bg-blue-700 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-blue-100 mb-4">Painless Experience</h3>
            <p className="text-blue-200">Our treatments are designed to be pain-free. We ensure your comfort throughout the entire procedure.</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-semibold text-center mb-8">What Our Patients Are Saying</h2>
        <div className="flex overflow-x-auto space-x-4">
          <div className="flex-none w-80 bg-blue-700 p-6 rounded-lg shadow-md text-center">
            <p className="italic text-lg text-blue-100">"A truly painless experience! My teeth feel so clean and fresh. Highly recommend!"</p>
            <div className="mt-4 font-semibold text-blue-200">Sara L.</div>
          </div>
          <div className="flex-none w-80 bg-blue-700 p-6 rounded-lg shadow-md text-center">
            <p className="italic text-lg text-blue-100">"Amazing service! The staff is professional, and the clinic is very clean and welcoming."</p>
            <div className="mt-4 font-semibold text-blue-200">Ahmed S.</div>
          </div>
        </div>
      </div>
<LocalSEOSection/>
<Testimonials/>

    </section>
  );
};

export default TeethScalingPolishingPage;
