import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiSettings, FiShield } = FiIcons;

const WhyChooseUs = () => {
  const features = [
    {
      icon: FiHeart,
      title: 'Personalized Care',
      description: 'Tailored treatment plans for every patient'
    },
    {
      icon: FiSettings,
      title: 'State-of-the-Art Technology',
      description: 'Modern equipment and techniques'
    },
    {
      icon: FiShield,
      title: 'Comfort-First Experience',
      description: 'Relaxing environment and gentle care'
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-[#F8F6F3] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12">
        
          <h2 className="text-4xl font-bold text-black mb-4">
            What Makes Us Different
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white p-4 md:p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#D3BEA2] rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <SafeIcon icon={feature.icon} className="w-6 h-6 md:w-8 md:h-8 text-black" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-black mb-2 md:mb-4">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Image Gallery */}
        <div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://cdn.prod.website-files.com/65773589c411ef66c988a4f9/65773589c411ef66c988a5dd_upshaw-dental-studio-23.webp"
              alt="Modern dental office reception area"
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              alt="Professional dental equipment"
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              alt="Comfortable patient treatment room"
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-[#D3BEA2] p-8 rounded-xl">
            <h3 className="text-2xl font-semibold text-black mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-black mb-6">
              Join thousands of satisfied patients who trust their smiles with us
            </p>
            <button
              onClick={() => document.querySelector('#home .bg-white.p-6')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-lg"
            >
              Book Your Appointment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;