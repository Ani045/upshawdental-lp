import React from 'react';

const Header = () => {


  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="https://cdn.prod.website-files.com/65773589c411ef66c988a4f9/65773589c411ef66c988a540_TRANSPARENT%20(SIDE)%20(2).png"
              alt="Upshaw Dental Studio"
              className="h-10 md:h-12 w-auto"
            />
          </div>

          {/* Desktop Only CTA Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => document.querySelector('#home .bg-white.p-6')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#D3BEA2] text-black px-6 py-2 rounded-lg font-medium hover:bg-[#c4ad8f] transition-colors"
            >
              Book An Appointment
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;