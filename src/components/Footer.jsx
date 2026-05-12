import React from 'react';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiFacebook, FiInstagram, FiMapPin, FiPhone } = FiIcons;

import logoImg from '../assets/logo.png';

const Footer = () => {

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <img
                src={logoImg}
                alt="Upshaw Dental Studio"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Your trusted dental studio in South Tampa, crafting healthy, beautiful smiles with exceptional comprehensive dentistry and a personal touch.
            </p>
            {/* <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-[#D3BEA2] rounded-full flex items-center justify-center hover:bg-[#c4ad8f] transition-colors"
              >
                <SafeIcon icon={FiFacebook} className="w-5 h-5 text-black" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#D3BEA2] rounded-full flex items-center justify-center hover:bg-[#c4ad8f] transition-colors"
              >
                <SafeIcon icon={FiInstagram} className="w-5 h-5 text-black" />
              </a>
            </div> */}
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <SafeIcon icon={FiMapPin} className="w-5 h-5 text-[#D3BEA2] mt-0.5 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>1001 South MacDill Avenue</p>
                  <p>Ste 100, Tampa, FL 33629</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiPhone} className="w-5 h-5 text-[#D3BEA2] flex-shrink-0" />
                <a href="tel:813-582-4006" className="text-gray-300 hover:text-[#D3BEA2] transition-colors">
                  813-582-4006
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Upshaw Dental Studio. All rights reserved.
          </p>
          {/* <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-[#D3BEA2] text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-[#D3BEA2] text-sm transition-colors">
              Terms of Service
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;