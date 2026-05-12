import React, { useRef, useEffect, useState } from 'react';
import * as FiIcons from 'react-icons/fi';
import * as FaIcons from 'react-icons/fa';

const { FiStar, FiCheckCircle, FiChevronLeft, FiChevronRight } = FiIcons;
const { FaQuoteLeft } = FaIcons;

const reviews = [
  { 
    name: "Wes Burke", 
    text: "Five stars doesn't even begin to cover it. This is not just a dental office. It is a place where excellence and genuine care truly come together. Dr. Maria Upshaw and her entire staff are bar none.", 
    rating: 5 
  },
  { 
    name: "Marc Schmitz", 
    text: "Hands down, the best dental office ever! Extremely friendly staff, top tier technology, reasonable priced and transparent. They really take their time and treat you like family. HIGHLY RECOMMENDED!", 
    rating: 5 
  },
  { 
    name: "Brian Goldbeck", 
    text: "Upshaw Dental Studio is truly in a league of its own. From the moment you walk in, you're greeted with warmth, care, and a genuine concierge-level experience that makes you look forward to your dental visits.", 
    rating: 5 
  },
  { 
    name: "Alysia Santos", 
    text: "I have been a patient of Dr. Upshaw's for over 15 years, and I can honestly say she is the best dentist I've ever had. She has such a gentle touch and a soothing way about her that makes every visit comfortable.", 
    rating: 5 
  },
  { 
    name: "Norrine Russell", 
    text: "Truly am in awe of the amazing, PERSONAL service this office offers. The care and attention they gave to us for a dental emergency on a Friday afternoon was simply unbelievable. Absolute best.", 
    rating: 5 
  },
  { 
    name: "M Soliman", 
    text: "Clinic is well organized, welcoming, and clean. Clearly Dr. Upshaw is knowledgeable, personalized in her approach with her patients and quickly put me at ease. I highly recommend Dr. Upshaw.", 
    rating: 5 
  },
  { 
    name: "eric cupps", 
    text: "I was referred to Dr. Upshaw by a friend and I wish I would've known about this practice sooner! Everyone here is so friendly and helpful. I feel valued as a patient and I also feel very informed.", 
    rating: 5 
  },
  { 
    name: "Attila Hevesy", 
    text: "Dr. Upshaw was very personable and took her time in explaining all my options. Nice modern office with very friendly and accommodating Staff! I'll be going back for sure!", 
    rating: 5 
  },
  { 
    name: "Jasmine Taylor", 
    text: "Dr. Upshaw has the most amazing practice and team! This is the best dentist I have ever been to. Every staff member is so kind and has affected my experience for the better. I recommend her to anyone!", 
    rating: 5 
  },
  { 
    name: "Natalie Dubaj", 
    text: "The most luxurious dental experience. The staff is amazing. You can have a pillow and fuzzy blanket while you wait. The atmosphere is the best I've EVER had for a dentist. It feels like a spa for your teeth!", 
    rating: 5 
  },
  { 
    name: "Kate Guscette", 
    text: "Dr. Upshaw and her staff are one of one! As a healthcare provider myself, I can be picky on who I trust, but they continue to deliver the best results and make you feel so comfortable and at home.", 
    rating: 5 
  },
  { 
    name: "Erika Olivero", 
    text: "Always a great experience. The entire staff makes you feel so at home. The office is incredibly tranquil, calm and peaceful. Dr Upshaw is an absolute delight.", 
    rating: 5 
  },
  { 
    name: "John Fox", 
    text: "I simply cannot overstate how amazing everyone at Upshaw Dental Studio is—they truly treat you like family. After years of dreading every dentist appointment, it's legitimately refreshing to walk into here.", 
    rating: 5 
  },
  { 
    name: "Eva Lee", 
    text: "The most pleasant dental experience I've ever had! Dr. Upshaw and staff have been nothing but attentive and pleasant each visit. They have a personal touch and really care about my wellbeing.", 
    rating: 5 
  },
  { 
    name: "Monica H", 
    text: "I was greeted with the warmest welcoming from the moment I placed my call looking for help with an emergency tooth ache. The staff was professional and kind throughout my entire visit.", 
    rating: 5 
  },
  { 
    name: "Anna Quinones", 
    text: "I highly recommend Dr. Upshaw and her amazing team! Everyone was welcoming and friendly, and the office is state of the art. Their hygienist Lela was so sweet, knowledgeable and thorough.", 
    rating: 5 
  },
  { 
    name: "Elaine Petrarca", 
    text: "Dr. Upshaw and her team are amazing! I'm so thrilled to have found them. The office is spa-like and truly makes going to the dentist less stressful.", 
    rating: 5 
  },
  { 
    name: "Katiana", 
    text: "I love Dr Upshaw! My teeth have never been in better condition. Her staff are attentive and friendly. They are very communicative and the office has a lovely ambiance.", 
    rating: 5 
  },
  { 
    name: "Passed Pawn", 
    text: "Soft piano/jazz music in the background, a clean and modern office, genuinely caring staff, and a dentist who is not only thorough with you but takes pride in her work.", 
    rating: 5 
  },
  { 
    name: "Kelly Reymers", 
    text: "The staff is so professional and kind, I ended up making an appointment and I'm so happy I did! I look forward to caring for my family with Dr. Upshaw for many years to come.", 
    rating: 5 
  }
];

const ReviewCarousel = () => {
  const scrollRef = useRef(null);
  const [speed, setSpeed] = useState(0.5); // Default slow forward speed
  const [isHovered, setIsHovered] = useState(false);

  // Double the reviews for seamless loop
  const duplicatedReviews = [...reviews, ...reviews];

  useEffect(() => {
    let animationFrameId;
    
    const scroll = () => {
      if (scrollRef.current && !isHovered) {
        scrollRef.current.scrollLeft += speed;
        
        // Reset scroll position for infinite loop
        const halfWidth = scrollRef.current.scrollWidth / 2;
        if (scrollRef.current.scrollLeft >= halfWidth) {
          scrollRef.current.scrollLeft = 0;
        } else if (scrollRef.current.scrollLeft <= 0 && speed < 0) {
          scrollRef.current.scrollLeft = halfWidth;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [speed, isHovered]);

  const handleManualScroll = (direction) => {
    // Briefly increase speed in the desired direction
    const boost = direction === 'next' ? 15 : -15;
    const originalSpeed = speed;
    
    // Smoothly scroll a chunk
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'next' ? 400 : -400,
        behavior: 'smooth'
      });
    }

    // Optional: temporarily change speed for "fast forward" effect
    setSpeed(boost);
    setTimeout(() => {
      setSpeed(originalSpeed);
    }, 500);
  };

  return (
    <section className="py-20 bg-[#F9F7F5] overflow-hidden relative">
      <div className="container mx-auto px-4 mb-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-serif text-[#1A1A1A] leading-tight">What Our Patients Say</h2>
            <div className="h-1 w-20 bg-[#D3BEA2] mt-4 mx-auto md:mx-0"></div>
            <p className="text-gray-600 mt-4 max-w-md">Experience the excellence that has earned us a 4.9-star rating from over 140 patients.</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-4">
            {/* Manual Controls */}
            <div className="flex gap-4 mb-2">
              <button 
                onClick={() => handleManualScroll('prev')}
                onMouseDown={() => setSpeed(-5)}
                onMouseUp={() => setSpeed(0.5)}
                className="w-12 h-12 rounded-full border-2 border-[#D3BEA2] text-[#D3BEA2] flex items-center justify-center hover:bg-[#D3BEA2] hover:text-white transition-all duration-300 shadow-sm group"
                aria-label="Reverse"
              >
                <FiChevronLeft className="w-6 h-6 group-hover:scale-125 transition-transform" />
              </button>
              <button 
                onClick={() => handleManualScroll('next')}
                onMouseDown={() => setSpeed(5)}
                onMouseUp={() => setSpeed(0.5)}
                className="w-12 h-12 rounded-full border-2 border-[#D3BEA2] text-[#D3BEA2] flex items-center justify-center hover:bg-[#D3BEA2] hover:text-white transition-all duration-300 shadow-sm group"
                aria-label="Fast Forward"
              >
                <FiChevronRight className="w-6 h-6 group-hover:scale-125 transition-transform" />
              </button>
            </div>

            <div className="flex items-center gap-2 text-sm text-green-600 font-semibold bg-green-50 px-3 py-1 rounded-full border border-green-100">
              <FiCheckCircle className="w-4 h-4" />
              <span>Google Verified</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative group">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-[#F9F7F5] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-[#F9F7F5] to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling Container */}
        <div 
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setSpeed(0.5); // Reset to normal speed
          }}
          className="flex overflow-x-hidden whitespace-nowrap py-4 scroll-smooth"
        >
          {duplicatedReviews.map((review, index) => (
            <div 
              key={index}
              className="flex-shrink-0 w-[300px] md:w-[450px] mx-6 bg-white p-8 rounded-3xl shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] border border-white/50 relative overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(211,190,162,0.2)] hover:-translate-y-1 whitespace-normal flex flex-col justify-between select-none"
            >
              <FaQuoteLeft className="absolute -top-4 -right-4 w-24 h-24 text-gray-50 opacity-10 pointer-events-none" />
              
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-0.5 text-[#D3BEA2]">
                    {[...Array(review.rating)].map((_, i) => (
                      <FiStar key={i} className="fill-current w-4 h-4" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-gray-400 font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    Verified
                  </div>
                </div>

                <p className="text-[#333333] leading-relaxed text-lg font-serif italic relative z-10">
                  "{review.text}"
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-50 flex items-center gap-4">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D3BEA2] to-[#BFA98D] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-inner">
                    {review.name.charAt(0)}
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm">
                    <FiCheckCircle className="w-4 h-4 text-blue-500 fill-white" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-[#1A1A1A] text-lg leading-none">{review.name}</h4>
                  <p className="text-sm text-gray-400 mt-1">Patient Experience</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewCarousel;
