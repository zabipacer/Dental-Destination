import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: 'What is the cost of dental implants in Rawalpindi?',
    answer: (
      <>
        The cost of dental implants in Rawalpindi varies depending on the clinic and individual treatment needs. On average, a consultation fee ranges from PKR 500 to 2,500. For a detailed breakdown, please visit our{' '}
        <Link to="/dental-implants-rawalpindi" className="text-teal-600 underline hover:text-teal-800 transition-colors duration-200">
          Dental Implants in Rawalpindi
        </Link>{' '}
        page.
      </>
    ),
  },
  {
    question: 'Do you offer payment plans for dental treatments?',
    answer: <>Yes, The Dental Destination provides easy and flexible payment plans for treatments including implants, braces, and cosmetic procedures to make dental care more accessible in Rawalpindi.</>,
  },
  {
    question: 'How often should I visit your clinic for a dental check-up?',
    answer: <>We recommend visiting The Dental Destination every six months for preventive check-ups and professional cleaning to maintain optimal oral health.</>,
  },
  {
    question: 'Are your teeth whitening services safe?',
    answer: <>Absolutely. Our professional teeth whitening procedures are performed under expert supervision using approved techniques and materials for safe, long-lasting results.</>,
  },
  {
    question: 'What options do you offer for missing teeth?',
    answer: <>We offer dental implants, bridges, and custom dentures as options for replacing missing teeth. Schedule a consultation at our Chaklala Scheme 3 clinic to determine the best treatment for you.</>,
  },
  {
    question: 'Do you provide emergency dental care in Rawalpindi?',
    answer: <>Yes, we handle dental emergencies including toothaches, broken teeth, and infections. Contact us immediately to receive prompt care from our expert team in Rawalpindi.</>,
  },
  {
    question: 'How does the braces treatment process work?',
    answer: <>It begins with an orthodontic assessment. If braces are recommended, we’ll design a personalized plan and monitor your progress with regular visits at our Rawalpindi clinic.</>,
  },
  {
    question: 'Is root canal treatment painful?',
    answer: <>No, modern root canals are relatively painless. We use advanced anesthesia techniques to ensure you're comfortable throughout the treatment.</>,
  },
  {
    question: 'Do you treat children at your clinic?',
    answer: <>Yes, The Dental Destination offers gentle and comprehensive dental care for children. We focus on prevention, education, and building a positive dental experience.</>,
  },
  {
    question: 'How do you ensure hygiene and infection control?',
    answer: <>We strictly follow sterilization and hygiene protocols, using disposable tools where necessary and hospital-grade disinfectants to maintain a clean and safe environment.</>,
  },
];

const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section
      className="bg-gray-50 py-20 px-6 md:px-8 lg:px-16"
      id="faq"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-800 text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl bg-white shadow-md overflow-hidden transition-all duration-300"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-blue-700 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                <span itemProp="name">{faq.question}</span>
                <span className="text-2xl transition-transform duration-300">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              <div
                className={`px-6 text-gray-700 text-sm transition-all duration-300 ${
                  openIndex === index ? 'max-h-screen py-4' : 'max-h-0 overflow-hidden'
                }`}
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <div itemProp="text">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqAccordion;
