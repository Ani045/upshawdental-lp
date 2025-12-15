import React from 'react';
import { motion } from 'framer-motion';

const AboutDentist = () => {
  return (
    <section id="about" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12">
        
          <h2 className="text-4xl font-bold text-black mb-4">
            Meet Dr. Maria Upshaw
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://cdn.prod.website-files.com/65773589c411ef66c988a4f9/65773589c411ef66c988a5b3_Dr-Maria-Upshaw-075.webp"
                  alt="Dr. Maria Upshaw, DMD - Professional dental portrait"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
            </div>

            <div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <iframe 
                  width="100%" 
                  height="315" 
                  src="https://www.youtube.com/embed/xzmWetPm69c?si=dxhUAjmN8PKcDmWl" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  className="rounded-2xl"
                ></iframe>
              </div>
            </div>
          </div>

          <div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-black">
                Dr. Maria A. Upshaw, DMD
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Dr. Maria Upshaw brings over 25 years of experience in comprehensive and cosmetic dentistry. She's dedicated to providing gentle, personalized dental care while creating a relaxed, welcoming environment for every patient.
              </p>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  At Upshaw Dental Studio, our primary goal as your dental studio in South Tampa is to prioritize the needs and comfort of our patients. We understand that visiting the dentist can be intimidating, and that's why we make it a priority to create a relaxed and welcoming environment.
                </p>
                <p>
                  From the moment you arrive, our friendly team will be there to greet you and guide you through your dental journey. We want to ensure that your visit is as comfortable and enjoyable as possible, putting any worries or fears at ease.
                </p>
                <p>
                  We believe that each patient is unique and deserves personalized attention and care. Our team takes the time to listen to your concerns, understand your dental goals, and develop customized treatment plans tailored to your specific needs. Whether you require routine preventive care, restorative treatments, cosmetic enhancements, or specialized dental procedures, we have the expertise and technology to provide the highest quality of care.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-[#D3BEA2] mb-2">25+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-[#D3BEA2] mb-2">DMD</div>
                <div className="text-sm text-gray-600">Dental Degree</div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <button
                onClick={() => document.querySelector('#home .bg-white.p-6')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#D3BEA2] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#c4ad8f] transition-colors text-lg"
              >
                Schedule Your Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDentist;