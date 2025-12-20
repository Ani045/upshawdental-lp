import { useState, useEffect } from 'react';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiChevronLeft, FiChevronRight } = FiIcons;

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);
  const [maxSlides, setMaxSlides] = useState(1);

  const services = [
    {
      image: 'https://res.cloudinary.com/damfndmrm/image/upload/v1765796218/Gemini_Generated_Image_ctx6p5ctx6p5ctx6_lhbmto.png',
      title: 'Preventive Dentistry',
      description: 'Exams, cleanings, periodontal therapy, and custom mouthguards'
    },
    {
      image: 'https://res.cloudinary.com/damfndmrm/image/upload/v1765796712/Gemini_Generated_Image_ovo28wovo28wovo2_voj0ge.png',
      title: 'Restorative Dentistry',
      description: 'Repairs, crowns, and bridges'
    },
    {
      image: 'https://res.cloudinary.com/damfndmrm/image/upload/v1765796383/Gemini_Generated_Image_5vgxi85vgxi85vgx_bscpqw.png',
      title: 'Cosmetic Dentistry',
      description: 'Smile makeovers and enhancements'
    },
    {
      image: 'https://res.cloudinary.com/damfndmrm/image/upload/v1765796724/dental-implants_pkzc1t.jpg',
      title: 'Dental Implants',
      description: 'Permanent tooth replacement'
    },
    {
      image: 'https://cdn.prod.website-files.com/65773589c411ef66c988a4f9/65773589c411ef66c988a517_AdobeStock_239374670.webp',
      title: 'Crowns',
      description: 'Durable and natural-looking tooth restoration'
    },
    {
      image: 'https://cdn.prod.website-files.com/65773589c411ef66c988a4f9/65773589c411ef66c988a55d_AdobeStock_500193738.webp',
      title: 'Sedation Dentistry',
      description: 'Comfortable procedures with sedation options'
    },
    {
      image: 'https://cdn.prod.website-files.com/65773589c411ef66c988a4f9/65773589c411ef66c988a535_AdobeStock_507989992.webp',
      title: 'Emergency Dentistry',
      description: 'Same-day urgent care'
    },
    {
      image: 'https://cdn.prod.website-files.com/65773589c411ef66c988a4f9/65773589c411ef66c988a530_AdobeStock_126371120.webp',
      title: 'Veneers',
      description: 'Custom cosmetic veneers'
    },
    {
      image: 'https://cdn.prod.website-files.com/65773589c411ef66c988a4f9/65773589c411ef66c988a52b_AdobeStock_298746307.webp',
      title: 'Tooth Extractions',
      description: 'Safe and comfortable extractions'
    },
    {
      image: 'https://res.cloudinary.com/damfndmrm/image/upload/v1765797381/invisible-aligners_gkpac5.jpg',
      title: 'Invisalign®',
      description: 'Clear aligner orthodontics'
    },
    
    {
      image: 'https://res.cloudinary.com/damfndmrm/image/upload/v1765797512/tmj-orofacial-pain_hhdorh.jpg',
      title: 'TMJ Treatment',
      description: 'Relief for jaw pain and dysfunction'
    },
    {
      image: 'https://cdn.prod.website-files.com/65773589c411ef66c988a4f9/65773589c411ef66c988a5b1_AdobeStock_407976541.webp',
      title: 'Sleep Apnea Solutions',
      description: 'Better sleep through dental care'
    },
    {
      image: 'https://res.cloudinary.com/damfndmrm/image/upload/v1765797608/teeth-whitening_zzwlp2.jpg',
      title: 'Teeth Whitening',
      description: 'Professional brightening treatments'
    },
    {
      image: 'https://cdn.prod.website-files.com/65773589c411ef66c988a4f9/65773589c411ef66c988a567_AdobeStock_220973369.webp',
      title: 'Botox Treatments',
      description: 'Refresh & Rejuvenate'
    },
    {
      image: 'https://cdn.prod.website-files.com/65773589c411ef66c988a4f9/67aa3c26f96ec6fbef81bd32_enhancement_398202860.jpg',
      title: 'Endymed',
      description: 'Advanced Facial rejuvenation'
    }
  ];

  useEffect(() => {
    const updateSliderSettings = () => {
      const items = window.innerWidth >= 768 ? 3 : 2;
      setItemsPerPage(items);
      setMaxSlides(Math.ceil(services.length / items));
      setCurrentSlide(0); // Reset to first slide on resize
    };

    updateSliderSettings();
    window.addEventListener('resize', updateSliderSettings);

    return () => window.removeEventListener('resize', updateSliderSettings);
  }, [services.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % maxSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + maxSlides) % maxSlides);
  };

  return (
    <section id="services" className="py-8 bg-gradient-to-br from-[#F8F6F3] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl font-bold text-black mb-2">
            Our Dental Services
          </h2>
        </div>

        {/* Desktop Grid - 3 columns */}
        <div className="hidden md:grid md:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="rounded-xl hover:shadow-md transition-all duration-300 border border-[#D1C4B2]/30 overflow-hidden group hover:border-[#D1C4B2] bg-white"
            >
              <div className="flex items-center p-3">
                <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 mr-4 group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-black mb-1">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-snug">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Slider - 2 columns */}
        <div className="md:hidden relative mx-4">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: maxSlides }, (_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0 grid grid-cols-2 gap-2">
                  {services
                    .slice(slideIndex * itemsPerPage, (slideIndex + 1) * itemsPerPage)
                    .map((service) => (
                      <div
                        key={service.title}
                        className="rounded-lg overflow-hidden border border-gray-400 hover:border-gray-600 transition-all duration-300 bg-white"
                      >
                        <div className="w-full h-20 overflow-hidden">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-1.5">
                          <h3 className="text-xs font-semibold text-black mb-0.5 text-center">
                            {service.title}
                          </h3>
                          <p className="text-gray-600 text-xs leading-tight text-center">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>

          {/* Slider Controls */}
          <button
            onClick={prevSlide}
            className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow z-20"
          >
            <SafeIcon icon={FiChevronLeft} className="w-4 h-4 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow z-20"
          >
            <SafeIcon icon={FiChevronRight} className="w-4 h-4 text-gray-600" />
          </button>

          {/* Slider Dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {Array.from({ length: maxSlides }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${index === currentSlide ? 'bg-[#D3BEA2]' : 'bg-gray-300'
                  }`}
              />
            ))}
          </div>
        </div>

        <div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-8 p-4 bg-[#D3BEA2] rounded-xl"
        >
          <p className="text-lg text-black mb-4">
             Not sure which service you need?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <button
              onClick={() => document.querySelector('#home .bg-white.p-6')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-black text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Book A Consultation
            </button>
            <a
              href="tel:813-582-4006"
              className="bg-white text-black px-6 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition-colors border border-gray-300"
            >
              Call 813-582-4006
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;