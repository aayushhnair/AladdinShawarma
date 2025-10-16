import React, { useState, useEffect } from 'react';
import { logo, header } from '../config/assets';
import strings from '../config/strings.json';

const SplashScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [animationPhase, setAnimationPhase] = useState('loading');
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Smooth loading animation
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        // Smooth, eased progress
        const increment = prev < 20 ? 8 : prev < 60 ? 4 : prev < 90 ? 2 : 1;
        return Math.min(prev + increment, 100);
      });
    }, 80);

    // Shortened, more professional timing
    const timer1 = setTimeout(() => {
      setAnimationPhase('loaded');
    }, 2000);

    const timer2 = setTimeout(() => {
      setAnimationPhase('fadeOut');
    }, 2300);

    const timer3 = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 2800);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className={`professional-splash ${animationPhase}`}>
      {/* Theatrical Curtains - Opening Effect */}
      <div className="splash-curtain-left">
        <img src={header.curtain} alt="Curtain" style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover',
          transform: 'scaleX(-1)' // Mirror the left curtain
        }} />
      </div>
      <div className="splash-curtain-right">
        <img src={header.curtain} alt="Curtain" style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover'
        }} />
      </div>

      {/* Hanging Lamps with Glow */}
      <div className="splash-lamps">
        <img src={header.lamps} alt="Hanging Lamps" />
      </div>

      {/* Minimal Background with Subtle Animation */}
      <div className="splash-background">
        <div className="gradient-overlay"></div>
        <div className="geometric-pattern">
          <div className="pattern-line line-1"></div>
          <div className="pattern-line line-2"></div>
          <div className="pattern-line line-3"></div>
        </div>
      </div>

      {/* Centered Content */}
      <div className="splash-content">
        {/* Premium Logo Presentation */}
        <div className="logo-presentation">
          <div className="logo-wrapper">
            <img 
              src={logo.main} 
              alt={logo.alt}
              className="premium-logo"
            />
          </div>
          
          <div className="brand-identity">
            <h1 className="brand-name">{strings.branding.name}</h1>
            <div className="brand-separator"></div>
            <p className="brand-essence">Authentic Middle Eastern Excellence</p>
          </div>
        </div>

        {/* Minimal Loading Indicator */}
        <div className="loading-indicator">
          <div className="progress-container">
            <div className="progress-track">
              <div 
                className="progress-fill" 
                style={{ 
                  transform: `scaleX(${loadingProgress / 100})`,
                  transformOrigin: 'left center'
                }}
              ></div>
            </div>
          </div>
          <div className="loading-text">
            <span className="loading-label">Preparing Your Magical Experience</span>
          </div>
        </div>
      </div>

      {/* Subtle Brand Mark */}
      <div className="splash-brand-mark">
        <div className="mark-text">Est. 2024</div>
      </div>
    </div>
  );
};

export default SplashScreen;