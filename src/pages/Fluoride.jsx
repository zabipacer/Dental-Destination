import React from "react";
import {
  Phone,
  MapPin,
  ShieldCheck,
  Sparkles,
  Thermometer,
  Users
} from "lucide-react";

const benefits = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
    title: "Cavity Protection",
    description:
      "Strengthens enamel to make your teeth more resistant to harmful bacteria and decay."
  },
  {
    icon: <Sparkles className="w-6 h-6 text-blue-600" />,
    title: "Remineralizes Enamel",
    description:
      "Replaces lost minerals in enamel caused by acidic foods, drinks, and daily wear."
  },
  {
    icon: <Thermometer className="w-6 h-6 text-blue-600" />,
    title: "Reduces Tooth Sensitivity",
    description:
      "Great for patients with sensitive teeth, especially to cold and hot drinks."
  },
  {
    icon: <Users className="w-6 h-6 text-blue-600" />,
    title: "Safe for All Age Groups",
    description:
      "We customize fluoride treatment for kids, adults, and seniors."
  }
];

export default function FluorideTreatment() {
  return (
    <article className="max-w-5xl pt-24 mx-auto px-4 space-y-16">
      <header className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700">
          🦷 Fluoride Treatment in Faisalabad
        </h1>
        <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">
          Strengthen your smile and prevent cavities with safe, dentist-recommended fluoride treatment at Doctor Teeth Dental Clinic, Faisalabad.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <a
            href="tel:92 321 6739504"
            className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl shadow hover:bg-blue-700"
          >
            <Phone className="w-5 h-5" /> Call Now
          </a>
          <a
            href="https://g.co/kgs/uAgG7yt"
            className="flex items-center gap-2 bg-gray-200 text-blue-700 px-5 py-3 rounded-xl shadow hover:bg-gray-300"
          >
            <MapPin className="w-5 h-5" /> View Location
          </a>
        </div>
      </header>

      <section>
        <h2 className="text-2xl font-semibold mb-2">✅ What is Fluoride Treatment?</h2>
        <p className="text-gray-700 leading-relaxed">
          Fluoride treatment is a professional dental service where a high-concentration fluoride gel or varnish is applied to the teeth. It strengthens tooth enamel, reverses early signs of decay, and lowers the risk of cavities. It's especially beneficial for children, people with weak enamel, or those with frequent cavities.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">💡 Benefits of Fluoride Treatment</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="flex gap-4 items-start p-5 bg-blue-50 rounded-xl shadow-sm"
            >
              {b.icon}
              <div>
                <h3 className="font-semibold text-lg">{b.title}</h3>
                <p className="text-sm text-gray-600">{b.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">🏥 Why Choose Doctor Teeth?</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Over 1000 fluoride treatments successfully done in Faisalabad</li>
          <li>Customized fluoride strength based on your age and oral health</li>
          <li>Affordable pricing – Starting from just Rs. 1,500</li>
          <li>Easy access from Madina Town, D-Ground, Eden Valley, and more</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">🔬 Treatment Process</h2>
        <ol className="list-decimal pl-6 text-gray-700 space-y-2">
          <li>Initial dental check-up to assess tooth condition</li>
          <li>Professional cleaning (if required)</li>
          <li>Fluoride varnish or gel applied to teeth</li>
          <li>Post-treatment advice – avoid food or drink for 30 minutes</li>
        </ol>
      </section>

      <section id="location">
        <h2 className="text-2xl font-semibold mb-2">📍 Areas We Serve in Faisalabad</h2>
        <p className="text-gray-700">
          Our fluoride treatments are trusted by patients from Madina Town, D-Ground, Eden Garden, People’s Colony, Jaranwala Road, Satiana Road, and surrounding areas.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">❓ Frequently Asked Questions</h2>
        <div className="space-y-4 text-gray-700">
          <div>
            <strong>How often should I get fluoride treatment?</strong>
            <p>We recommend 1–2 times a year, depending on your oral condition.</p>
          </div>
          <div>
            <strong>Is fluoride treatment safe?</strong>
            <p>Yes, it’s 100% safe and approved by global dental authorities like ADA.</p>
          </div>
          <div>
            <strong>Does it hurt?</strong>
            <p>No pain at all – it’s a quick and comfortable process.</p>
          </div>
        </div>
      </section>

      <footer className="bg-blue-50 p-6 rounded-xl shadow-md text-center mt-10">
        <h2 className="text-2xl font-bold text-blue-700 mb-2">📆 Book Your Appointment</h2>
        <p className="mb-4">
          Don’t wait for cavities to appear. Protect your teeth today. Call or WhatsApp <strong>92 321 6739504</strong> to book your fluoride session.
        </p>
        <a
          href="tel:+03216739504"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700"
        >
          📞 Call Now
        </a>
      </footer>
    </article>
  );
}
