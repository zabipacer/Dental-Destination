import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Clock, Shield, Award } from "lucide-react";

const services = [
  {
    title: 'Emergency Dentist in Rawalpindi',
    description: '24/7 urgent dental care for dental emergencies, tooth pain, and accidents.',
    image: '/assets/images/emergency.webp',
    link: '/emergency-dentist-rawalpindi',
    icon: <Clock className="w-6 h-6" />,
    features: ['24/7 Available', 'Immediate Relief', 'Emergency Surgery']
  },
  {
    title: 'Dental Checkup in Rawalpindi',
    description: 'Comprehensive dental examinations with advanced diagnostics, oral cancer screening, and digital X-rays.',
    image: '/assets/images/dc.webp',
    link: '/dental-checkup-rawalpindi',
    icon: <Shield className="w-6 h-6" />,
    features: ['Digital X-rays', 'Cancer Screening', 'Preventive Care']
  },
  {
    title: 'Scaling & Polishing',
    description: 'Professional teeth cleaning using advanced ultrasonic technology to remove tartar and prevent gum disease.',
    image: '/assets/images/Scp.webp',
    link: '/scaling-and-polishing-rawalpindi',
    icon: <Star className="w-6 h-6" />,
    features: ['Ultrasonic Cleaning', 'Gum Protection', 'Stain Removal']
  },
  {
    title: 'Fluoride Treatment',
    description: 'Professional fluoride therapy to strengthen tooth enamel and prevent cavities in patients of all ages.',
    image: '/assets/images/ft.webp',
    link: '/fluoride-treatment-rawalpindi',
    icon: <Shield className="w-6 h-6" />,
    features: ['Enamel Strengthening', 'Cavity Prevention', 'All Ages']
  },
  {
    title: 'Teeth Whitening Rawalpindi',
    description: 'Advanced LED teeth whitening for up to 8 shades brighter smile in under an hour using safe techniques.',
    image: '/assets/images/tw.webp',
    link: '/teeth-whitening-rawalpindi',
    icon: <Star className="w-6 h-6" />,
    features: ['8 Shades Brighter', '1 Hour Treatment', 'Safe & Effective']
  },
  {
    title: 'Smile Makeover Rawalpindi',
    description: 'Complete smile transformation combining cosmetic dentistry techniques including veneers, crowns, and whitening.',
    image: '/assets/images/sm.webp',
    link: '/smile-makeover-rawalpindi',
    icon: <Award className="w-6 h-6" />,
    features: ['Custom Design', 'Multiple Treatments', 'Natural Results']
  },
  {
    title: 'Veneers in Rawalpindi',
    description: 'Premium porcelain veneers crafted to perfection for correcting chips, gaps, and discoloration.',
    image: '/assets/images/v.webp',
    link: '/veneers-rawalpindi',
    icon: <Star className="w-6 h-6" />,
    features: ['Porcelain Quality', 'Natural Look', 'Long Lasting']
  },
  {
    title: 'Dental Fillings Rawalpindi',
    description: 'Tooth-colored composite fillings that blend seamlessly with natural teeth and prevent further decay.',
    image: '/assets/images/fil.webp',
    link: '/dental-fillings-rawalpindi',
    icon: <Shield className="w-6 h-6" />,
    features: ['Tooth-Colored', 'Mercury-Free', 'Durable']
  },
  {
    title: 'Dental Crowns & Bridges',
    description: 'CEREC same-day ceramic crowns and custom bridges to restore damaged teeth functionality and appearance.',
    image: '/assets/images/dcb.webp',
    link: '/dental-crown-bridges-rawalpindi',
    icon: <Award className="w-6 h-6" />,
    features: ['Same-Day Service', 'Ceramic Quality', 'Perfect Fit']
  },
  {
    title: 'Dental Implants Rawalpindi',
    description: 'Permanent titanium dental implants with natural-looking crowns, restoring full chewing function.',
    image: '/assets/images/dental-implants.webp',
    link: '/dental-implants-rawalpindi',
    icon: <Award className="w-6 h-6" />,
    features: ['Titanium Implants', '100% Function', 'Lifetime Solution']
  },
  {
    title: 'Braces & Aligners Rawalpindi',
    description: 'Modern orthodontic solutions including traditional braces and clear aligners for perfect teeth alignment.',
    image: '/assets/images/braces.webp',
    link: '/braces-aligners-rawalpindi',
    icon: <Star className="w-6 h-6" />,
    features: ['Clear Options', 'Fast Results', 'Comfortable']
  },
  {
    title: 'Root Canal Treatment RCT',
    description: 'Advanced pain-free root canal procedures using modern techniques to save infected teeth.',
    image: '/assets/images/root-canal.webp',
    link: '/root-canal-rawalpindi',
    icon: <Shield className="w-6 h-6" />,
    features: ['Pain-Free', 'Tooth Saving', 'Advanced Tech']
  },
  {
    title: 'Wisdom Tooth Extraction',
    description: 'Safe and comfortable removal of impacted wisdom teeth using minimally invasive surgical techniques.',
    image: '/assets/images/wisdom.webp',
    link: '/wisdom-tooth-extraction-rawalpindi',
    icon: <Shield className="w-6 h-6" />,
    features: ['Minimally Invasive', 'Safe Procedure', 'Quick Recovery']
  },
  {
    title: 'Kids Dentist Rawalpindi',
    description: 'Specialized pediatric dental care in a fun, child-friendly environment with gentle treatment approaches.',
    image: '/assets/images/pediatric.webp',
    link: '/kids-dentist-rawalpindi',
    icon: <Star className="w-6 h-6" />,
    features: ['Child-Friendly', 'Gentle Care', 'Fun Environment']
  },
  {
    title: 'Gum Disease Treatment',
    description: 'Comprehensive periodontal therapy to treat gingivitis and advanced gum disease with modern techniques.',
    image: '/assets/images/gum.webp',
    link: '/gum-disease-treatment-rawalpindi',
    icon: <Shield className="w-6 h-6" />,
    features: ['Periodontal Care', 'Disease Prevention', 'Gum Health']
  },
  {
    title: 'Oral & Maxillofacial Surgery',
    description: 'Advanced facial and jaw surgeries performed by experienced oral surgeons using cutting-edge technology.',
    image: '/assets/images/max.webp',
    link: '/maxillofacial-surgery-rawalpindi',
    icon: <Award className="w-6 h-6" />,
    features: ['Expert Surgeons', 'Advanced Surgery', 'Complete Care']
  },
  {
    title: 'TMJ Treatment Rawalpindi',
    description: 'Specialized treatment for jaw pain, TMJ disorders, and bite problems using comprehensive approaches.',
    image: '/assets/images/jaw.webp',
    link: '/tmj-treatment-rawalpindi',
    icon: <Shield className="w-6 h-6" />,
    features: ['Pain Relief', 'Jaw Alignment', 'Bite Correction']
  },
  {
    title: 'Zirconia Crown Rawalpindi',
    description: 'Premium zirconia crowns offering superior strength, durability, and natural aesthetics for tooth restoration.',
    image: '/assets/images/zirconia1.webp',
    link: '/zirconia-crown-rawalpindi',
    icon: <Award className="w-6 h-6" />,
    features: ['Superior Strength', 'Natural Look', 'Long-Lasting']
  }
];
const FeaturedServices = () => {
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scroll = (direction) => {
    if (!sliderRef.current) return;
    const amount = isMobile ? sliderRef.current.clientWidth : 400;
    sliderRef.current.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  const checkScrollButtons = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
  };

  const autoScroll = () => {
    if (!sliderRef.current || !isAutoScrolling) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    if (scrollLeft >= scrollWidth - clientWidth - 1) {
      sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      scroll('right');
    }
  };

  useEffect(() => {
    if (!isAutoScrolling) return;
    const interval = setInterval(autoScroll, 4000);
    return () => clearInterval(interval);
  }, [isAutoScrolling, isMobile]);

  useEffect(() => {
    checkScrollButtons();
    const c = sliderRef.current;
    c?.addEventListener('scroll', checkScrollButtons);
    return () => c?.removeEventListener('scroll', checkScrollButtons);
  }, []);

  const handleMouseEnter = () => setIsAutoScrolling(false);
  const handleMouseLeave = () => setIsAutoScrolling(true);
  const handleImageError = (e) => { e.target.src = '/assets/images/default-dental.webp'; };

  return (
    <section id="services" className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50" style={{ backgroundImage: `url('/assets/images/office.webp')` }}>
      <div className="absolute inset-0 bg-white/95 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
            <Award className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Dental Services in Rawalpindi</h1>
          <h2 className="text-xl text-blue-700 font-semibold mb-4">Dental Destination Clinic - Your Premier Dental Care Provider</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience world-class dental care at Dental Destination Clinic in Rawalpindi.
          </p>
        </div>

        {/* Slider */}
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Nav Buttons */}
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className="hidden sm:flex absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-xl z-20 hover:bg-blue-600 hover:text-white"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div
            ref={sliderRef}
            className="flex overflow-x-auto gap-6 px-2 py-4 scroll-snap-x mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {services.map((service, i) => (
              <article
                key={i}
                className="flex-shrink-0 w-full sm:w-[280px] md:w-[380px] lg:w-[420px] bg-white rounded-2xl shadow-lg border border-gray-100 hover:border-blue-200 transition-transform duration-500 hover:-translate-y-3 scroll-snap-align start"
              >
                <a href={service.link} className="block h-full">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-100 to-teal-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                      onError={handleImageError}
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full">
                      <div className="text-blue-600">{service.icon}</div>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-3 leading-tight">{service.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{service.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.features.map((feat, idx) => (
                        <span key={idx} className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full border border-blue-100">
                          <Star className="w-3 h-3 mr-1" />{feat}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-blue-600 font-semibold">Learn More</span>
                      <ChevronRight className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>
                </a>
              </article>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className="hidden sm:flex absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-xl z-20 hover:bg-blue-600 hover:text-white"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Ready to transform your smile? Contact Dental Destination Clinic today!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/book-appointment" className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-shadow shadow-lg">
              Book Appointment<ChevronRight className="w-5 h-5 inline ml-2" />
            </a>
            <a href="/contact" className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-shadow">
              Contact Us
            </a>
          </div>
        </div>
      </div>
      <style jsx>{` 
        div[ref]::-webkit-scrollbar { display: none; }
        .line-clamp-3 { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
        .scroll-snap-x { scroll-snap-type: x mandatory; }
        .scroll-snap-align { scroll-snap-align: start; }
      `}</style>
    </section>
  );
};

export default FeaturedServices;