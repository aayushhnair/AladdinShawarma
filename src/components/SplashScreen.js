import React, { useState, useEffect } from 'react';
import { logo } from '../config/assets';
import strings from '../config/strings.json';

const SplashScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [animationPhase, setAnimationPhase] = useState('loading');
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    console.log('SplashScreen mounted'); // Debug log
    
    // Progressive loading animation
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 3; // Slightly faster progress
      });
    }, 60);

    // Phase 1: Loading animation (longer initial phase)
    const timer1 = setTimeout(() => {
      console.log('Setting phase to loaded'); // Debug log
      setAnimationPhase('loaded');
    }, 3000);

    // Phase 2: Fade out and complete
    const timer2 = setTimeout(() => {
      console.log('Setting phase to fadeOut'); // Debug log
      setAnimationPhase('fadeOut');
    }, 3500);

    const timer3 = setTimeout(() => {
      console.log('Completing splash screen'); // Debug log
      setIsVisible(false);
      onComplete();
    }, 4200);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  console.log('SplashScreen render:', { isVisible, animationPhase }); // Debug log

  if (!isVisible) return null;

  return (
    <div className={`modern-splash-screen ${animationPhase}`}>
      {/* Animated Background */}
      <div className="splash-background">
        <div className="bg-layer primary-bg"></div>
        <div className="bg-layer secondary-bg"></div>
        <div className="floating-elements">
          <div className="float-element el-1"></div>
          <div className="float-element el-2"></div>
          <div className="float-element el-3"></div>
          <div className="float-element el-4"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="splash-main-content">
        {/* Logo Section */}
        <div className="logo-section">
          <div className="logo-container">
            <img 
              src={logo.main} 
              alt={logo.alt}
              className="splash-logo-image"
            />
          </div>
          
          {/* <div className="brand-text-container">
            <h1 className="brand-title">
              <span className="brand-name">{strings.branding.name}</span>
            </h1>
            <p className="brand-tagline">{strings.branding.tagline}</p>
          </div> */}
        </div>

        {/* Loading Section */}
        {/* <div className="loading-section">
          <div className="loading-text">
            <span>Preparing Your Experience</span>
            <span className="loading-dots">
              <span>.</span><span>.</span><span>.</span>
            </span>
          </div>
          
          <div className="modern-loading-bar">
            <div className="loading-track">
              <div 
                className="loading-fill" 
                style={{ width: `${loadingProgress}%` }}
              ></div>
            </div>
            <div className="loading-percentage">{loadingProgress}%</div>
          </div>
        </div> */}

        {/* Bottom Section */}
        {/* <div className="splash-footer">
          <div className="quality-badges">
            <div className="badge">
              <span className="badge-icon">🍽️</span>
              <span className="badge-text">Authentic</span>
            </div>
            <div className="badge">
              <span className="badge-icon">✨</span>
              <span className="badge-text">Fresh</span>
            </div>
            <div className="badge">
              <span className="badge-icon">🏆</span>
              <span className="badge-text">Premium</span>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default SplashScreen;