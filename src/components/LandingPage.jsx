import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import Infographic from './Infographic';
import WhyChooseUs from './WhyChooseUs';
import Services from './Services';
import AboutDentist from './AboutDentist';
import SmilesBanner from './SmilesBanner';
import Testimonials from './Testimonials';
import ContactSection from './ContactSection';
import Footer from './Footer';
import MobileBottomBar from './MobileBottomBar';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <Services />
      <Infographic />
      <AboutDentist />
      <WhyChooseUs />
      <SmilesBanner />
      <Testimonials />
      <ContactSection />
      <Footer />
      
      {/* Mobile Bottom Bar */}
      <MobileBottomBar />
      
      {/* Add bottom padding for mobile to account for fixed bottom bar */}
      <div className="h-12 md:hidden"></div>
    </div>
  );
};

export default LandingPage;