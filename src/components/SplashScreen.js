import React, { useState, useEffect } from 'react';

const SplashScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [animationPhase, setAnimationPhase] = useState('loading');

  useEffect(() => {
    // Phase 1: Loading animation
    const timer1 = setTimeout(() => {
      setAnimationPhase('fadeOut');
    }, 2000);

    // Phase 2: Fade out and complete
    const timer2 = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 2800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className={`splash-screen ${animationPhase}`}>
      <div className="splash-content">
        <div className="logo-animation">
          <h1 className="splash-logo">
            Taste<span>.it</span>
          </h1>
          <div className="loading-bar">
            <div className="loading-progress"></div>
          </div>
          <p className="splash-tagline">Authentic Flavors Since 1958</p>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;