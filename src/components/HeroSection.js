import React, { useEffect, useRef, useState } from 'react';
import { logo, hero } from '../config/assets';
import strings from '../config/strings.json';

const HeroSection = () => {
  const sectionRef = useRef(null);
  const orderButtonRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [rubCount, setRubCount] = useState(0);
  const [isRubbing, setIsRubbing] = useState(false);
  const [sparkles, setSparkles] = useState([]);
  const [showGenieMessage, setShowGenieMessage] = useState(false);
  const rubTimerRef = useRef(null);
  const messageTimerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger animations for hero content when in view
            const heroElements = entry.target.querySelectorAll('.animate-on-scroll');
            heroElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('visible');
              }, index * (isMobile ? 100 : 150)); // Smoother faster animations
            });
          }
        });
      },
      { 
        threshold: isMobile ? 0.2 : 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isMobile]);

  const handleOrderClick = () => {
    const currentCount = rubCount;
    
    // Increment rub count
    setRubCount(prev => prev + 1);
    setIsRubbing(true);
    
    // Show genie message on first click
    if (currentCount === 0) {
      setShowGenieMessage(true);
      
      // Clear existing message timer
      if (messageTimerRef.current) {
        clearTimeout(messageTimerRef.current);
      }
      
      // Hide message after 3 seconds
      messageTimerRef.current = setTimeout(() => {
        setShowGenieMessage(false);
      }, 3000);
    }
    
    // Create sparkles
    createSparkles();
    
    // Add haptic feedback for mobile
    if (isMobile && navigator.vibrate) {
      navigator.vibrate(50);
    }
    
    // Reset rub timer
    if (rubTimerRef.current) {
      clearTimeout(rubTimerRef.current);
    }
    
    // Reset rub state after 2 seconds of no rubbing
    rubTimerRef.current = setTimeout(() => {
      setIsRubbing(false);
      if (rubCount < 3) {
        setRubCount(0);
        setShowGenieMessage(false);
      }
    }, 2000);
    
    // After 3 rubs, trigger genie effect and scroll
    if (currentCount >= 2) {
      setShowGenieMessage(false);
      setTimeout(() => {
        triggerGenieEffect();
      }, 300);
    }
  };
  
  const createSparkles = () => {
    if (!orderButtonRef.current) return;
    
    const rect = orderButtonRef.current.getBoundingClientRect();
    const newSparkles = [];
    
    // Create 8 sparkles in circular pattern
    for (let i = 0; i < 8; i++) {
      const angle = (i * 45) * (Math.PI / 180);
      const distance = 150; // Final distance sparkle travels
      
      newSparkles.push({
        id: Date.now() + i,
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
        angle: angle,
        targetX: Math.cos(angle) * distance,
        targetY: Math.sin(angle) * distance,
        size: Math.random() * 8 + 4
      });
    }
    
    setSparkles(prev => [...prev, ...newSparkles]);
    
    // Remove sparkles after animation
    setTimeout(() => {
      setSparkles(prev => prev.filter(s => !newSparkles.find(ns => ns.id === s.id)));
    }, 1000);
  };
  
  const triggerGenieEffect = () => {
    // Add haptic feedback for mobile
    if (isMobile && navigator.vibrate) {
      navigator.vibrate([100, 50, 100, 50, 200]);
    }
    
    // Scroll to menu section with genie effect
    const menuSection = document.querySelector('#menu');
    if (menuSection) {
      // Add genie animation class to button
      if (orderButtonRef.current) {
        orderButtonRef.current.classList.add('summoning');
        setTimeout(() => {
          orderButtonRef.current.classList.remove('summoning');
        }, 1000);
      }
      
      // Scroll after a short delay
      setTimeout(() => {
        menuSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        setRubCount(0);
      }, 800);
    }
  };

  const handleReservationClick = () => {
    // Add haptic feedback for mobile
    if (isMobile && navigator.vibrate) {
      navigator.vibrate(50);
    }
    
    // Smooth scroll to contact/reservation section
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  return (
    <section 
      className={`hero-section professional-hero ${isMobile ? 'mobile-hero' : ''}`}
      id="home"
      ref={sectionRef}
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000'
      }}
    >
      {/* Video Background - Optimized for all devices */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={hero.image}
        onLoadedData={handleVideoLoad}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          minWidth: '100%',
          minHeight: '100%',
          width: 'auto',
          height: 'auto',
          transform: 'translate(-50%, -50%)',
          zIndex: 0,
          objectFit: 'cover',
          transition: 'ease-in-out',
        }}
      >
        <source src={hero.backgroundvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Fallback Background Image for very slow connections */}
      {!isVideoLoaded && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${hero.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: 0
          }}
        />
      )}
      
      {/* Professional Gradient Overlay - LIGHTER FOR CLASSY LOOK */}
      {/* <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(0deg, rgba(4, 10, 39, 0.7) 0%, rgba(5, 15, 158, 0.5) 50%, rgba(8, 20, 79, 0.7) 100%)',
          zIndex: 1,
          backdropFilter: 'blur(2px)'
        }}
      ></div> */}

            <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(46, 46, 46, 0.4) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(56, 56, 56, 0.4) 100%)',
          zIndex: 1,
          // backdropFilter: 'blur(12px)'
        }}
      ></div>
      

      {/* Geometric Elements */}
      <div className="hero-geometric-elements" style={{ position: 'absolute', inset: 0, zIndex: 2, overflow: 'hidden' }}>
        <div className="geometric-line geometric-line-1"></div>
        <div className="geometric-line geometric-line-2"></div>
        <div className="geometric-circle geometric-circle-1"></div>
        <div className="geometric-circle geometric-circle-2"></div>
      </div>

      {/* Main Hero Content - Professional Layout */}
        <div className="professional-hero-content hero-content-entrance" style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: isMobile ? '2rem' : '4rem',
          maxWidth: isMobile ? '90%' : '1200px',
          margin: '0 auto',
          padding: isMobile ? '2rem 1rem' : '3rem 2rem',
          flexDirection: isMobile ? 'column' : 'row',
          width: '100%'
        }}>
          {/* Logo - Left Column */}
          <div className="hero-logo professional-logo-container hero-logo-entrance" style={{
            flex: isMobile ? 'none' : '0 0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img 
          src={logo.main} 
          alt={logo.alt}
          style={{
            width: isMobile ? '200px' : '400px',
            height: 'auto',
            filter: 'drop-shadow(0 15px 40px rgba(252, 177, 0, 0.3))',
            transition: 'all 0.5s ease'
          }}
            />
          </div>

          {/* Content - Right Column */}
          <div className="hero-text-content hero-text-entrance" style={{
            flex: isMobile ? 'none' : '1',
            textAlign: isMobile ? 'center' : 'left',
            display: 'flex',
            flexDirection: 'column',
            alignItems: isMobile ? 'center' : 'flex-start',
            justifyContent: 'center'
          }}>
            {/* Main Headline */}
            <h1 className="professional-hero-title" style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: isMobile ? '2.5rem' : '4rem',
          fontWeight: '700',
          lineHeight: '1.2',
          color: '#FFFFFF',
          marginBottom: '1rem',
          textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
            }}>
          <span style={{ 
            display: 'block', 
            fontSize: '0.6em', 
            fontWeight: '400',
            fontFamily: "'Inter', sans-serif",
            color: 'rgba(255, 255, 255, 0.9)',
            marginTop: '0.5rem',
            letterSpacing: '1px'
          }}>Experience</span>
            </h1>

            {/* Tagline - Refined */}
            <div className="hero-refined-tagline" style={{
          fontSize: isMobile ? '1rem' : '1.25rem',
          fontWeight: '500',
          color: 'rgba(255, 255, 255, 0.9)',
          marginBottom: '2rem',
          letterSpacing: '1px',
          lineHeight: '1.6',
          maxWidth: '600px',
          margin: isMobile ? '0 auto 2rem auto' : '0 0 2rem 0'
            }}>
          {isMobile ? 
            "Fresh ingredients, traditional recipes, exceptional taste." :
            "Crafted with passion, served with pride. Where traditional Middle Eastern flavors meet modern culinary excellence."
          }
            </div>

            {/* Professional Action Buttons */}
            <div className="hero-professional-actions" style={{
          display: 'flex',
          gap: isMobile ? '1rem' : '1.5rem',
          justifyContent: isMobile ? 'center' : 'flex-start',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
          marginBottom: '3rem'
            }}>
          <button 
            ref={orderButtonRef}
            className="professional-btn primary-btn genie-button" 
            onClick={handleOrderClick}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'linear-gradient(45deg, #FCB100, #FFC943)',
              color: '#08144F',
              border: 'none',
              borderRadius: '50px',
              padding: isMobile ? '1rem 2rem' : '1.2rem 2.5rem',
              fontSize: '1rem',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: rubCount > 0 ? '0 0 30px rgba(252, 177, 0, 0.8), 0 0 60px rgba(255, 215, 0, 0.6)' : '0 10px 30px rgba(252, 177, 0, 0.3)',
              minWidth: isMobile ? '200px' : '180px',
              justifyContent: 'center',
              touchAction: 'manipulation',
              WebkitTapHighlightColor: 'transparent',
              position: 'relative'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px) scale(1.05)';
              e.target.style.boxShadow = '0 15px 40px rgba(252, 177, 0, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0) scale(1)';
              e.target.style.boxShadow = '0 10px 30px rgba(252, 177, 0, 0.3)';
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4m1.6 8L6 5H3M7 13v8a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-8"/>
              <circle cx="9" cy="19" r="1"/>
              <circle cx="20" cy="19" r="1"/>
            </svg>
            Order Now
          </button>
          
          {/* Genie Instruction Message - First Click - Fixed positioning */}
          {showGenieMessage && orderButtonRef.current && (
            <div style={{
              position: 'fixed',
              top: `${orderButtonRef.current.getBoundingClientRect().bottom + 8}px`,
              left: `${orderButtonRef.current.getBoundingClientRect().right - 40}px`,
              transform: 'translateX(-100%)',
              background: '#FFFFFF',
              color: '#666666',
              padding: '0.5rem 0.75rem',
              borderRadius: '10px',
              fontSize: isMobile ? '0.8rem' : '0.85rem',
              fontWeight: '600',
              whiteSpace: 'nowrap',
              animation: 'genieMessageSlide 0.5s ease-out',
              border: '0.5px solid #999999',
              zIndex: 10000,
              textAlign: 'left',
              lineHeight: '1.3',
              pointerEvents: 'none'
            }}>
              Rub <strong>2 more times</strong> to fulfill your wish!
            </div>
          )}
            
          {/* Rub Counter Indicator - Fixed positioning */}
          {rubCount > 0 && rubCount < 3 && !showGenieMessage && orderButtonRef.current && (
            <div style={{
              position: 'fixed',
              top: `${orderButtonRef.current.getBoundingClientRect().top - 35}px`,
              left: `${orderButtonRef.current.getBoundingClientRect().left + orderButtonRef.current.getBoundingClientRect().width / 2}px`,
              transform: 'translateX(-50%)',
              background: 'rgba(252, 177, 0, 0.95)',
              color: '#08144F',
              padding: '0.3rem 0.8rem',
              borderRadius: '20px',
              fontSize: '0.75rem',
              fontWeight: '700',
              whiteSpace: 'nowrap',
              animation: 'rubPulse 0.5s ease',
              boxShadow: '0 0 20px rgba(252, 177, 0, 0.8)',
              zIndex: 10000,
              pointerEvents: 'none'
            }}>
              ✨ Rub {rubCount}/3
            </div>
          )}
          
          {/* Sparkles Overlay */}
          {sparkles.length > 0 && (
            <div style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
              zIndex: 9999
            }}>
              {sparkles.map(sparkle => (
                <div
                  key={sparkle.id}
                  className="magic-sparkle"
                  style={{
                    position: 'absolute',
                    left: `${sparkle.x}px`,
                    top: `${sparkle.y}px`,
                    width: `${sparkle.size}px`,
                    height: `${sparkle.size}px`,
                    background: 'radial-gradient(circle, #FFD700, #FCB100, transparent)',
                    borderRadius: '50%',
                    boxShadow: '0 0 10px #FFD700, 0 0 20px #FCB100',
                    animation: `sparkleFloat 1s ease-out forwards, sparkleRotate 1s linear infinite`,
                    '--target-x': `${sparkle.targetX}px`,
                    '--target-y': `${sparkle.targetY}px`
                  }}
                />
              ))}
            </div>
          )}
          
          <button 
            className="professional-btn secondary-btn" 
            onClick={handleReservationClick}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'transparent',
              color: '#FFFFFF',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '50px',
              padding: isMobile ? '1rem 2rem' : '1.2rem 2.5rem',
              fontSize: '1rem',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)',
              minWidth: isMobile ? '200px' : '180px',
              justifyContent: 'center',
              touchAction: 'manipulation',
              WebkitTapHighlightColor: 'transparent'
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = '#FCB100';
              e.target.style.color = '#FCB100';
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 10px 30px rgba(252, 177, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
              e.target.style.color = '#FFFFFF';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            Reserve Table
          </button>
            </div>

          </div>
        </div>

        {/* Minimal Scroll Indicator - Hidden on mobile */}
      {!isMobile && (
        <div className="minimal-scroll-indicator" style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          color: 'rgba(255, 255, 255, 0.7)',
          zIndex: 10
        }}>
          <div style={{
            fontSize: '0.75rem',
            fontWeight: '500',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: '1rem'
          }}>
            Scroll
          </div>
          <div style={{
            width: '2px',
            height: '40px',
            background: 'linear-gradient(to bottom, #FCB100, transparent)',
            borderRadius: '1px',
            position: 'relative',
            animation: 'breath 2s ease-in-out infinite'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '6px',
              height: '6px',
              background: '#FCB100',
              borderRadius: '50%',
              animation: 'particleFloat 2s ease-in-out infinite'
            }}></div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;