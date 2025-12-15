
const SmilesBanner = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12">
        
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Over <span className="text-[#D3BEA2]">1 Million+</span> Smiles
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transforming lives, one smile at a time
          </p>
        </div>

        {/* Full Width Banner Image */}
        <div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative -mx-4 sm:-mx-6 lg:-mx-8"
        >
          <div className="relative overflow-hidden rounded-none lg:rounded-2xl shadow-2xl">
            <img
              src="https://res.cloudinary.com/damfndmrm/image/upload/v1765798394/Smile-banner_vmpiho.png"
              alt="Over 1 Million Smiles - Happy Patients at Upshaw Dental Studio"
              className="w-full h-64 md:h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            
            {/* Overlay text - hidden on mobile */}
            <div className="hidden md:block absolute bottom-8 left-8 right-8 text-center">
              <div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-white"
              >
                <p className="text-xl md:text-2xl font-semibold mb-2">
                  Join Our Family of Happy Patients
                </p>
                <p className="text-lg opacity-90">
                  Experience the difference at Upshaw Dental Studio
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-8">
          <button
            onClick={() => document.querySelector('#home .bg-white.p-6')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-lg"
          >
            Join Our Happy Patients Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default SmilesBanner;