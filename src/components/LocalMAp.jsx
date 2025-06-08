import React from 'react';

const LocalSEOSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-12" id="location">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl tracking-wide text-[#A6BF39] mb-8">
          OUR LOCATION
        </h2>

        {/* Map + Info */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
          {/* Google Map */}
          <div className="w-full lg:w-4/5 h-96 rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="The Dental Destination Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.123456789!2d73.0916781!3d33.5799714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfed0052a731d1%3A0xe2e0218bf9785428!2sThe%20Dental%20Destination!5e0!3m2!1sen!2s!4v1680000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Clinic Info */}
        <div className="mt-10 max-w-3xl mx-auto text-left">
          <p className="text-lg text-gray-700 mb-4">
            <strong>Address:</strong> House 580A, Street 19, Chaklala Scheme 3, Rawalpindi, Punjab, Pakistan.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Phone:</strong>{' '}
            <a href="tel:+923350531591" className="text-blue-600 hover:underline">
              0335 0531591
            </a>
          </p>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Service Areas:</strong> Chaklala Scheme 3 and surrounding areas in Rawalpindi.
          </p>
          <a
            href="https://maps.app.goo.gl/Cx4ZSy6zJGJVD1ka8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-3 bg-teal-600 text-white rounded-lg shadow hover:bg-teal-700 transition duration-300"
          >
            Need Help Finding Our Clinic?
          </a>
        </div>

        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dentist",
            "name": "The Dental Destination",
            "image": "https://yourdomain.com/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "House 580A, Street 19, Chaklala Scheme 3",
              "addressLocality": "Rawalpindi",
              "addressRegion": "Punjab",
              "postalCode": "46000",
              "addressCountry": "PK"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 33.5799714,
              "longitude": 73.094253
            },
            "url": "https://yourwebsite.com",
            "telephone": "+92-335-0531591",
            "openingHours": ["Mo-Sa 17:00-20:00", "Su 12:00-20:00"]
          })}
        </script>
      </div>
    </section>
  );
};

export default LocalSEOSection;
