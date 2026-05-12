import { useState, useEffect } from 'react';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

import preventiveGenImg from '../assets/service-preventive-gen.png';
import restorativeGenImg from '../assets/service-restorative-gen.png';
import cosmeticGenImg from '../assets/service-cosmetic-gen.png';
import implantsGenImg from '../assets/service-implants-gen.jpg';
import whiteningGenImg from '../assets/service-whitening-gen.jpg';
import veneersImg from '../assets/service-general.webp';
import crownsImg from '../assets/service-cosmetic.webp';
import emergencyImg from '../assets/service-restorative.webp';
import extractionsImg from '../assets/service-orthodontics.webp';
import sedationImg from '../assets/service-implants.webp';
import invisalignGenImg from '../assets/service-invisalign-gen.jpg';
import tmjGenImg from '../assets/service-tmj-gen.jpg';
import sleepApneaImg from '../assets/service-preventative.webp';
import botoxImg from '../assets/service-pediatric.webp';
import skinImg from '../assets/service-enhancement.jpg';

const { FiChevronLeft, FiChevronRight } = FiIcons;

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);
  const [maxSlides, setMaxSlides] = useState(1);

  const services = [
    {
      image: preventiveGenImg,
      title: 'Preventive Dentistry',
      description: 'Exams, cleanings, periodontal therapy, and custom mouthguards'
    },
    {
      image: restorativeGenImg,
      title: 'Restorative Dentistry',
      description: 'Repairs, crowns, and bridges'
    },
    {
      image: cosmeticGenImg,
      title: 'Cosmetic Dentistry',
      description: 'Smile makeovers and enhancements'
    },
    {
      image: implantsGenImg,
      title: 'Dental Implants',
      description: 'Permanent tooth replacement'
    },
    {
      image: whiteningGenImg,
      title: 'Teeth Whitening',
      description: 'Professional brightening treatments'
    },
    {
      image: veneersImg,
      title: 'Veneers',
      description: 'Custom cosmetic veneers'
    },
    {
      image: crownsImg,
      title: 'Crowns',
      description: 'Durable and natural-looking tooth restoration'
    },
    {
      image: emergencyImg,
      title: 'Emergency Dentistry',
      description: 'Same-day urgent care'
    },
    {
      image: extractionsImg,
      title: 'Tooth Extractions',
      description: 'Safe and comfortable extractions'
    },
    {
      image: sedationImg,
      title: 'Sedation Dentistry',
      description: 'Comfortable procedures with sedation options'
    },
    {
      image: invisalignGenImg,
      title: 'Invisalign®',
      description: 'Clear aligner orthodontics'
    },
    {
      image: tmjGenImg,
      title: 'TMJ Treatment',
      description: 'Relief for jaw pain and dysfunction'
    },
    {
      image: sleepApneaImg,
      title: 'Sleep Apnea Solutions',
      description: 'Better sleep through dental care'
    },
    {
      image: botoxImg,
      title: 'Botox Treatments',
      description: 'Refresh & Rejuvenate'
    },
    {
      image: skinImg,
      title: 'Skin Rejuvination',
      description: 'Advanced Facial rejuvenation'
    },
    {
      image: tmjGenImg,
      title: 'TMJ',
      description: 'Therapeutic treatment for jaw pain'
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
              className={`rounded-xl hover:shadow-md transition-all duration-300 border border-[#D1C4B2]/30 overflow-hidden group hover:border-[#D1C4B2] bg-white ${index === 15 ? 'md:col-start-2' : ''}`}
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
              Book Your Complimentary Consultation
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