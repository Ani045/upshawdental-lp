import React from 'react';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiPhone, FiHeart, FiSettings, FiShield, FiClock } = FiIcons;

const HeroSection = () => {
  return (
    <section id="home" className="pt-6  bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-32 bg-[#D3BEA2] rounded-full opacity-10"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-[#D3BEA2] rounded-full opacity-15"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-[#D3BEA2] rounded-full opacity-20"></div>
      </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Hero Content + Features */}
          <div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-tight"
              >
                Your Trusted Dental Studio in{' '}
                <span className="text-[#D3BEA2]">South Tampa</span>
              </h1>

              <p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-2xl text-gray-600 leading-relaxed"
              >
                Exceptional, comprehensive dentistry with a personal touch
              </p>
            </div>

            {/* Feature List with Line Icons */}
            <div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 gap-3 md:grid-cols-1 md:gap-4"
            >
              <div className="flex items-start space-x-2 md:space-x-4">
                <SafeIcon icon={FiHeart} className="w-5 h-5 md:w-6 md:h-6 text-[#D3BEA2] mt-0.5 md:mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-black text-sm md:text-base mb-0.5 md:mb-1">Personalized Care</h4>
                  <p className="hidden md:block text-sm text-gray-600">Tailored treatment plans for every patient</p>
                </div>
              </div>

              <div className="flex items-start space-x-2 md:space-x-4">
                <SafeIcon icon={FiSettings} className="w-5 h-5 md:w-6 md:h-6 text-[#D3BEA2] mt-0.5 md:mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-black text-sm md:text-base mb-0.5 md:mb-1">State-of-the-Art Technology</h4>
                  <p className="hidden md:block text-sm text-gray-600">Modern equipment and techniques</p>
                </div>
              </div>

              <div className="flex items-start space-x-2 md:space-x-4">
                <SafeIcon icon={FiShield} className="w-5 h-5 md:w-6 md:h-6 text-[#D3BEA2] mt-0.5 md:mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-black text-sm md:text-base mb-0.5 md:mb-1">Comfort-First Experience</h4>
                  <p className="hidden md:block text-sm text-gray-600">Relaxing environment and gentle care</p>
                </div>
              </div>

              <div className="flex items-start space-x-2 md:space-x-4">
                <SafeIcon icon={FiClock} className="w-5 h-5 md:w-6 md:h-6 text-[#D3BEA2] mt-0.5 md:mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-black text-sm md:text-base mb-0.5 md:mb-1">25+ Years of Experience</h4>
                  <p className="hidden md:block text-sm text-gray-600">Decades of trusted dental excellence</p>
                </div>
              </div>
            </div>

            {/* Call Button */}
            <div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <a
                href="tel:813-582-4006"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-3 bg-[#D3BEA2] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#c4ad8f] transition-colors text-lg"
              >
                <SafeIcon icon={FiPhone} className="w-5 h-5" />
                <span>Call Now - 813-582-4006</span>
              </a>
            </div>
          </div>

          {/* Right Column - Image and Form */}
          <div className="space-y-8">
            {/* Hero Image */}
            <div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://cdn.prod.website-files.com/65773589c411ef66c988a4f9/65773589c411ef66c988a61f_FotoBoho_003.webp"
                  alt="Upshaw Dental Studio interior"
                  className="w-full h-72 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                {/* Image Overlay Content */}
                {/* <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3">
                    <h4 className="text-base font-bold text-black mb-1">Modern Dental Excellence</h4>
                    <p className="text-xs text-gray-700">
                      State-of-the-art technology meets compassionate care
                    </p>
                  </div>
                </div> */}
              </div>
            </div>

            {/* Contact Form - Wider */}
            <div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-black mb-1">Schedule Your Visit</h3>
                  <p className="text-xs text-gray-600">Get started with exceptional dental care</p>
                </div>

                <form
                  acceptCharset="UTF-8"
                  action="https://app.formester.com/forms/q9ZS58CbU/submissions"
                  method="POST"
                  className="space-y-3"
                >
                  <input type="hidden" name="_redirect" value="thankyou.html" />
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">First Name</label>
                      <input
                        type="text"
                        name="first_name"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D3BEA2] focus:border-transparent text-sm"
                        placeholder="First name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Last Name</label>
                      <input
                        type="text"
                        name="last_name"

                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D3BEA2] focus:border-transparent text-sm"
                        placeholder="Last name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D3BEA2] focus:border-transparent text-sm"
                        placeholder="(813) 555-0123"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D3BEA2] focus:border-transparent text-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      rows="2"
                      name="message"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D3BEA2] focus:border-transparent text-sm"
                      placeholder="Tell us about your dental needs..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#D3BEA2] text-black px-6 py-2.5 rounded-lg font-semibold hover:bg-[#c4ad8f] transition-colors text-sm"
                  >
                    Schedule An Appointment
                  </button>
                  <p className="text-xs text-gray-500 text-center mt-2 flex items-center justify-center">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    Your information is secure.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;