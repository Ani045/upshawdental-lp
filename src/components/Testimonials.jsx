import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiStar } = FiIcons;

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Andrew H.',
      rating: 5,
      text: "I've always been terrified of the dentist, but the team here completely changed my perspective. Dr. Upshaw is incredibly gentle and takes the time to explain everything. The office is modern and comfortable, and the staff makes you feel like family."
    },
    {
      name: 'Sarah M.',
      rating: 5,
      text: "Outstanding service! I came in for a smile makeover and couldn't be happier with the results. Dr. Upshaw's attention to detail is remarkable, and the entire process was comfortable and stress-free."
    },
    {
      name: 'Michael T.',
      rating: 5,
      text: "Professional, caring, and efficient. The team at Upshaw Dental Studio goes above and beyond to ensure you're comfortable. I highly recommend them for anyone looking for quality dental care in Tampa."
    }
  ];

  return (
    <section id="testimonials" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12">
        >
          <h2 className="text-4xl font-bold text-black mb-4">
            What Our Patients Are Saying
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-50 p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <SafeIcon key={i} icon={FiStar} className="w-5 h-5 text-[#D3BEA2] fill-current" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#D3BEA2] rounded-full flex items-center justify-center mr-4">
                  <span className="text-black font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-black">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">Verified Patient</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Treatment Results Gallery */}
        <div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-black mb-8">See Our Treatment Results</h3>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="relative rounded-xl overflow-hidden shadow-lg group">
              <img
                src="https://cdn.prod.website-files.com/65773589c411ef66c988a4f9/692adc21f3ad2a8641c86d09_teeth-whitening.png"
                alt="Teeth Whitening Results"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-4 left-4 bg-white/95 px-3 py-2 rounded-lg shadow-md">
                <span className="text-sm font-semibold text-black">Teeth Whitening</span>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-lg group">
              <img
                src="https://cdn.prod.website-files.com/65773589c411ef66c988a4f9/692ec865cc7d86edfc8fc637_invisalign-p-1080.png"
                alt="Professional Whitening"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-4 left-4 bg-white/95 px-3 py-2 rounded-lg shadow-md">
                <span className="text-sm font-semibold text-black">Invisalign</span>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-lg group">
              <img
                src="https://cdn.prod.website-files.com/65773589c411ef66c988a4f9/692adc21157b842ff1d6c56f_restorative-dentistry.png"
                alt="Restorative Dentistry"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-4 left-4 bg-white/95 px-3 py-2 rounded-lg shadow-md">
                <span className="text-sm font-semibold text-black">Preventative Dentistry</span>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-lg group">
              <img
                src="https://cdn.prod.website-files.com/65773589c411ef66c988a4f9/692ec8646394b9b73972cf54_extraction-p-1080.png"
                alt="Dental Veneers"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-4 left-4 bg-white/95 px-3 py-2 rounded-lg shadow-md">
                <span className="text-sm font-semibold text-black">Tooth Extraction</span>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-lg group">
              <img
                src="https://cdn.prod.website-files.com/65773589c411ef66c988a4f9/692ec865453c7be79f9e646e_implants-p-1080.png"
                alt="Dental Implants"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-4 left-4 bg-white/95 px-3 py-2 rounded-lg shadow-md">
                <span className="text-sm font-semibold text-black">Dental Implants</span>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-lg group">
              <img
                src="https://cdn.prod.website-files.com/65773589c411ef66c988a4f9/692adc21b875fc9ea48f6436_cosmetic-dentistry.png"
                alt="Cosmetic Dentistry"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-4 left-4 bg-white/95 px-3 py-2 rounded-lg shadow-md">
                <span className="text-sm font-semibold text-black">Cosmetic Work</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
            <h3 className="text-2xl font-semibold text-black mb-4">
              Ready for Your Own Amazing Results?
            </h3>
            <p className="text-gray-600 mb-6">
              Start your journey to a healthier, more beautiful smile today
            </p>
            <button
              onClick={() => document.querySelector('#home .bg-white.p-6')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#D3BEA2] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#c4ad8f] transition-colors text-lg"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;