import React from 'react';
import { Award, Clock, MapPin } from 'lucide-react';

const benefits = [
  {
    icon: <Award className="w-12 h-12 text-yellow-400" />,
    title: 'Expert Care by Seasoned Dentists',
    description:
      'Our team of highly trained professionals specializes in general, cosmetic, and restorative dentistry, ensuring you receive personalized treatment.'
  },
  {
    icon: <Clock className="w-12 h-12 text-gray-800" />,
    title: 'Flexible Evening Hours',
    description:
      'Open Monday through Saturday from 5 PM to 8 PM and Sundays from 12 PM to 8 PM, we work around your busy life.'
  },
  {
    icon: <MapPin className="w-12 h-12 text-red-600" />,
    title: 'Prime Chaklala Location',
    description:
      'Located in Chaklala Scheme 3, our clinic offers easy parking and accessibility for all patients.'
  }
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "name": "The Dental Destination",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "House 580A, Street 19, Chaklala Scheme 3",
    "addressLocality": "Rawalpindi",
    "addressRegion": "Punjab",
    "postalCode": "46000",
    "addressCountry": "PK"
  },
  "telephone": [
    "+92-335-0531591",
    "+92-51-5153213"
  ],
  "openingHours": [
    "Mo-Sa 17:00-20:00",
    "Su 12:00-20:00"
  ],
  "image": "https://yourdomain.com/images/dental-destination-exterior.jpg",
  "priceRange": "PKR 1,500 - PKR 12,000",
  "url": "https://maps.google.com/?cid=253a3e0e-bc43-4ec9-90ca-7818a105a572",
  "description": "The Dental Destination in Rawalpindi offers comprehensive dental care—from routine checkups to cosmetic and emergency treatments—with convenient evening hours to fit your schedule.",
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 33.579967,
    "longitude": 73.094253
  }
};

const WhyChooseUs = () => {
  return (
    <section
      aria-labelledby="why-choose-heading"
      className="bg-white py-12 px-4 sm:px-6 lg:px-8"
    >
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      <div className="max-w-7xl mx-auto text-center">
        <h2
          id="why-choose-heading"
          className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
        >
          Why Rawalpindi Loves The Dental Destination
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Discover top-tier dental services right in the heart of Chaklala. With skilled dentists, modern facilities, and hours that suit your life, we make your smile our priority.
        </p>
      </div>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((item) => (
          <div key={item.title} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
            <div className="mb-4">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 mx-auto max-w-md">
        <img
          src="/assets/images/modern.jpg"
          alt="Interior of The Dental Destination clinic in Chaklala, Rawalpindi"
          className="rounded-2xl shadow-md w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default WhyChooseUs;
