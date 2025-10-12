import React, { useState, useEffect } from 'react';
import { logo, hero } from '../config/assets';
import strings from '../config/strings.json';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
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
    const contactSection = document.querySelector('#contact');
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
        <div className="hero-logo">
          <img 
            src={logo.main} 
            alt={logo.alt}
            className="hero-logo-image"
          />
        </div>

        {/* Tagline */}
        <div className="hero-tagline">
          {strings.branding.tagline}
        </div>

        {/* Hero Description */}
        <p className="hero-description">
          {strings.hero.description}
        </p>

        {/* Hero Actions */}
        <div className="hero-actions">
          <button className="btn btn-primary" onClick={handleOrderClick}>
            <span>{strings.hero.cta.primary}</span>
          </button>
          <button className="btn btn-secondary" onClick={handleReservationClick}>
            <span>{strings.hero.cta.secondary}</span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-text">Scroll</div>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default HeroSection;