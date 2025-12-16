// Infographic component
import React from 'react';

const Infographic = () => {
  const stats = [
    {
      image: 'https://res.cloudinary.com/damfndmrm/image/upload/v1765795784/Gemini_Generated_Image_3m90rw3m90rw3m90_vmkf0s.png',
      number: '5000+',
      label: 'Happy Patients',
      description: 'Trusted families'
    },
    {
      image: 'https://cdn.prod.website-files.com/65773589c411ef66c988a4f9/65773589c411ef66c988a61f_FotoBoho_003.webp',
      number: '25+',
      label: 'Years Experience',
      description: 'Expert dental care'
    },
    {
      image: 'https://res.cloudinary.com/damfndmrm/image/upload/v1765795294/Gemini_Generated_Image_wf4373wf4373wf43_ifapak.png',
      number: '24/7',
      label: 'Emergency Care',
      description: 'Always available'
    },
    {
      image: 'https://res.cloudinary.com/damfndmrm/image/upload/v1765795294/Gemini_Generated_Image_h5iq6ih5iq6ih5iq_modhjs.png',
      number: '99%',
      label: 'Satisfaction Rate',
      description: 'Outstanding results'
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-[#F8F6F3] to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-3">
            Why Patients Choose <span className="text-[#D3BEA2]">Upshaw Dental</span>
          </h2>
        </div>

        {/* Image-based Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={stat.image}
                  alt={stat.label}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <div className="text-3xl font-bold mb-1">{stat.number}</div>
                  <div className="text-lg font-semibold mb-1">{stat.label}</div>
                  <p className="text-sm opacity-90">{stat.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Compact Call to Action */}
        <div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-[#D3BEA2] rounded-xl p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-black mb-3">
              Ready to Experience Excellence?
            </h3>
            <p className="text-base text-black/80 mb-6 max-w-xl mx-auto">
              Join thousands of satisfied patients who trust us with their dental care
            </p>
            <button
              onClick={() => document.querySelector('#home .bg-white.p-6')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Schedule Your Appointment Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Infographic;