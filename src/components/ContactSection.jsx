import React from 'react';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMapPin, FiPhone, FiClock } = FiIcons;

const ContactSection = () => {

  return (
    <section id="contact" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-black mb-4">
            Get in Touch
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-black mb-6">Contact Details</h3>
              
              <div className="space-y-12">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-[#D3BEA2] rounded-lg flex items-center justify-center flex-shrink-0">
                    <SafeIcon icon={FiMapPin} className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1">Address</h4>
                    <p className="text-gray-600">
                      1001 South MacDill Avenue, Ste 100<br />
                      Tampa, FL 33629
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-[#D3BEA2] rounded-lg flex items-center justify-center flex-shrink-0">
                    <SafeIcon icon={FiPhone} className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1">Phone</h4>
                    <p className="text-gray-600">813-582-4006</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-[#D3BEA2] rounded-lg flex items-center justify-center flex-shrink-0">
                    <SafeIcon icon={FiClock} className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1">Hours</h4>
                    <div className="text-gray-600 space-y-1">
                      <p>Mon–Thu: 9:00 AM – 5:00 PM</p>
                      <p>Fri: 9:00 AM – 2:00 PM</p>
                      <p>Sat–Sun: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

           
          </div>

          {/* Google Maps */}
          <div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-4 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-black mb-6">Find Us</h3>
            <div className="w-full h-96 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28199.760503766258!2d-82.493656!3d27.933563!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c32b113720e1%3A0xbdb2dbdcb3163786!2sUpshaw%20Dental%20Studio!5e0!3m2!1sen!2sph!4v1765800666855!5m2!1sen!2sph" 
                width="100%" 
                height="100%" 
                style={{border: 0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Upshaw Dental Studio Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;