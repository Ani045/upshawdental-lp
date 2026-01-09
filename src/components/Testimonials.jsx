import { useState } from 'react';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiStar, FiChevronLeft, FiChevronRight } = FiIcons;

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [testimonialSlide, setTestimonialSlide] = useState(0);

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

  const treatmentResults = [
    {
      image: 'https://cdn.prod.website-files.com/65773589c411ef66c988a4f9/692adc21f3ad2a8641c86d09_teeth-whitening.png',
      title: 'Teeth Whitening'
    },
    {
      image: 'https://cdn.prod.website-files.com/65773589c411ef66c988a4f9/692ec865cc7d86edfc8fc637_invisalign-p-1080.png',
      title: 'Invisalign'
    },
    {
      image: 'https://cdn.prod.website-files.com/65773589c411ef66c988a4f9/692adc21157b842ff1d6c56f_restorative-dentistry.png',
      title: 'Preventative Dentistry'
    },
    {
      image: 'https://cdn.prod.website-files.com/65773589c411ef66c988a4f9/692ec8646394b9b73972cf54_extraction-p-1080.png',
      title: 'Tooth Extraction'
    },
    {
      image: 'https://cdn.prod.website-files.com/65773589c411ef66c988a4f9/692ec865453c7be79f9e646e_implants-p-1080.png',
      title: 'Dental Implants'
    },
    {
      image: 'https://cdn.prod.website-files.com/65773589c411ef66c988a4f9/692ec8655e5dd1afc687f445_cosmetic-p-1080.png',
      title: 'Cosmetic Work'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % treatmentResults.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + treatmentResults.length) % treatmentResults.length);
  };

  return (
    <section id="testimonials" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12">

          <h2 className="text-4xl font-bold text-black mb-4">
            What Our Patients Are Saying
          </h2>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 mb-12">
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

        {/* Mobile Testimonials Slider */}
        <div className="md:hidden relative mb-12 mx-4">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${testimonialSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.name} className="w-full flex-shrink-0 px-2">
                  <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
                    <div className="flex items-center mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <SafeIcon key={i} icon={FiStar} className="w-4 h-4 text-[#D3BEA2] fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4 italic text-sm">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-[#D3BEA2] rounded-full flex items-center justify-center mr-3">
                        <span className="text-black font-semibold">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-black text-sm">{testimonial.name}</div>
                        <div className="text-xs text-gray-500">Verified Patient</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial Slider Controls */}
          <button
            onClick={() => setTestimonialSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="absolute -left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow z-10"
          >
            <SafeIcon icon={FiChevronLeft} className="w-4 h-4 text-gray-600" />
          </button>
          <button
            onClick={() => setTestimonialSlide((prev) => (prev + 1) % testimonials.length)}
            className="absolute -right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow z-10"
          >
            <SafeIcon icon={FiChevronRight} className="w-4 h-4 text-gray-600" />
          </button>

          {/* Testimonial Slider Dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setTestimonialSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${index === testimonialSlide ? 'bg-[#D3BEA2]' : 'bg-gray-300'
                  }`}
              />
            ))}
          </div>
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

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatmentResults.map((result, index) => (
              <div key={index} className="relative rounded-xl overflow-hidden shadow-lg group">
                <img
                  src={result.image}
                  alt={result.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-4 left-4 bg-white/95 px-3 py-2 rounded-lg shadow-md">
                  <span className="text-sm font-semibold text-black">{result.title}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Slider */}
          <div className="md:hidden relative">
            <div className="overflow-hidden rounded-xl">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {treatmentResults.map((result, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="relative rounded-xl overflow-hidden shadow-lg mx-4">
                      <img
                        src={result.image}
                        alt={result.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute bottom-4 left-4 bg-white/95 px-3 py-2 rounded-lg shadow-md">
                        <span className="text-sm font-semibold text-black">{result.title}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slider Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow z-10"
            >
              <SafeIcon icon={FiChevronLeft} className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow z-10"
            >
              <SafeIcon icon={FiChevronRight} className="w-5 h-5 text-gray-600" />
            </button>

            {/* Slider Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {treatmentResults.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${index === currentSlide ? 'bg-[#D3BEA2]' : 'bg-gray-300'
                    }`}
                />
              ))}
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
            <a
              href="tel:813-582-4006"
              className="inline-flex items-center bg-[#D3BEA2] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#c4ad8f] transition-colors text-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call 813-582-4006
            </a>
            <p className="text-sm text-gray-500 mt-4">
              Complimentary Consultations Available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;