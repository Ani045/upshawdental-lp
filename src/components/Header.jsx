import logoImg from '../assets/logo.png';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Main Navbar */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src={logoImg}
                alt="Upshaw Dental Studio"
                className="h-10 md:h-12 w-auto"
              />
            </div>

            {/* Desktop Only CTA Button */}
            <div className="hidden md:flex items-center">
              <button
                onClick={() => {
                  document.querySelector('#home .bg-white.p-6')?.scrollIntoView({ behavior: 'smooth' });
                  if (typeof window.gtag === 'function') {
                    window.gtag('event', 'conversion', {
                      'send_to': 'AW-18075350064/NQRtCMq8rqccELDo_6pD'
                    });
                  }
                }}
                className="bg-[#D3BEA2] text-black px-6 py-2 rounded-lg font-medium hover:bg-[#c4ad8f] transition-colors"
              >
                Book An Appointment
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1A1A1A] text-white py-2 px-4 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-center items-center">
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-[#D3BEA2] fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs md:text-sm font-medium tracking-wide">
              5.0 Star Rating on Google | 100+ Reviews
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;