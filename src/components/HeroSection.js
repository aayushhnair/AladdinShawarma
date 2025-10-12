import React, { useEffect, useRef } from 'react';
import { logo, hero } from '../config/assets';
import strings from '../config/strings.json';

const HeroSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger animations for hero content when in view
            const heroElements = entry.target.querySelectorAll('.animate-on-scroll');
            heroElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('visible');
              }, index * 200);
            });
          }
        });
      },
      { 
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleOrderClick = () => {
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
    // Smooth scroll to contact/reservation section
    const contactSection = document.querySelector('#menu');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section 
      className="hero-section" 
      id="home"
      ref={sectionRef}
      style={{
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
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
          objectFit: 'cover'
        }}
      >
        <source src={hero.backgroundvideo} type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        Your browser does not support the video tag.
      </video>
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
      <div className="hero-content">
        {/* Logo */}
        <div className="hero-logo animate-on-scroll fade-in delay-1">
          <img 
            src={logo.main} 
            alt={logo.alt}
            className="hero-logo-image"
          />
        </div>

        {/* Tagline */}
        <div className="hero-tagline animate-on-scroll slide-up delay-2">
          {strings.branding.tagline}
        </div>

        {/* Hero Description */}
        <p className="hero-description animate-on-scroll fade-in delay-3">
          {strings.hero.description}
        </p>

        {/* Hero Actions */}
        <div className="hero-actions animate-on-scroll scale-in delay-4">
          <button className="btn btn-primary" onClick={handleOrderClick}>
            <span>{strings.hero.cta.primary}</span>
          </button>
          <button className="btn btn-secondary" onClick={handleReservationClick}>
            <span>{strings.hero.cta.secondary}</span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator animate-on-scroll fade-in delay-5">
        <div className="scroll-text">Scroll</div>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default HeroSection;