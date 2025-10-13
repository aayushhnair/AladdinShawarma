import React, { useEffect, useRef, useState } from 'react';
import { logo, hero } from '../config/assets';
import strings from '../config/strings.json';

const HeroSection = () => {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

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
              }, index * (isMobile ? 150 : 200)); // Faster animations on mobile
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
    // Add haptic feedback for mobile
    if (isMobile && navigator.vibrate) {
      navigator.vibrate(50);
    }
    
    // Smooth scroll to menu section
    const menuSection = document.querySelector('#menu');
    if (menuSection) {
      menuSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
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
      className={`hero-section ${isMobile ? 'mobile-hero' : ''}`}
      id="home"
      ref={sectionRef}
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: isMobile ? '100vh' : '100vh'
      }}
    >
      {/* Video Background - Optimized for mobile */}
      {!isMobile && (
        <video
          autoPlay
          muted
          loop
          playsInline
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
            opacity: isVideoLoaded ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out'
          }}
        >
          <source src={hero.backgroundvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      
      {/* Mobile Background Image */}
      {isMobile && (
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
      
      {/* Base overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(8, 20, 79, 0.7)',
          zIndex: 0
        }}
      ></div>

      {/* Primary Color Overlay */}
      <div 
        className="hero-overlay"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(8, 20, 79, 0.6)',
          zIndex: 1
        }}
      ></div>

      {/* Main Hero Content */}
      <div className={`hero-content ${isMobile ? 'mobile-content' : ''}`}>
        {/* Logo */}
        <div className="hero-logo animate-on-scroll fade-in delay-1">
          <img 
            src={logo.main} 
            alt={logo.alt}
            className={`hero-logo-image ${isMobile ? 'mobile-logo' : ''}`}
          />
        </div>

        {/* Tagline */}
        <div className={`hero-tagline animate-on-scroll slide-up delay-2 ${isMobile ? 'mobile-tagline' : ''}`}>
          {strings.branding.tagline}
        </div>

        {/* Hero Description */}
        <p className={`hero-description animate-on-scroll fade-in delay-3 ${isMobile ? 'mobile-description' : ''}`}>
          {isMobile ? strings.hero.description.substring(0, 120) + '...' : strings.hero.description}
        </p>

        {/* Hero Actions */}
        <div className={`hero-actions animate-on-scroll scale-in delay-4 ${isMobile ? 'mobile-actions' : ''}`}>
          <button 
            className="btn btn-primary mobile-btn" 
            onClick={handleOrderClick}
            style={{
              touchAction: 'manipulation',
              WebkitTapHighlightColor: 'transparent'
            }}
          >
            <span>{strings.hero.cta.primary}</span>
          </button>
          <button 
            className="btn btn-secondary mobile-btn" 
            onClick={handleReservationClick}
            style={{
              touchAction: 'manipulation',
              WebkitTapHighlightColor: 'transparent'
            }}
          >
            <span>{strings.hero.cta.secondary}</span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      {!isMobile && (
        <div className="scroll-indicator animate-on-scroll fade-in delay-5">
          <div className="scroll-text">Scroll</div>
          <div className="scroll-line"></div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;