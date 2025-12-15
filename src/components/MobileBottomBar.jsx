import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiPhone, FiCalendar } = FiIcons;

const MobileBottomBar = () => {
  const scrollToHeroForm = () => {
    const heroForm = document.querySelector('#home .bg-white.p-6');
    if (heroForm) {
      heroForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-3 py-2 z-40 md:hidden">
      <div className="flex gap-2">
        <button
          onClick={scrollToHeroForm}
          className="flex-1 bg-[#D3BEA2] text-black py-2 px-3 rounded-md text-sm font-medium hover:bg-[#c4ad8f] transition-colors flex items-center justify-center space-x-1"
        >
          <SafeIcon icon={FiCalendar} className="w-4 h-4" />
          <span>Book</span>
        </button>
        
        <a
          href="tel:813-582-4006"
          className="flex-1 bg-black text-white py-2 px-3 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors flex items-center justify-center space-x-1"
        >
          <SafeIcon icon={FiPhone} className="w-4 h-4" />
          <span>Call</span>
        </a>
      </div>
    </div>
  );
};

export default MobileBottomBar;