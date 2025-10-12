import React, { useRef, useEffect } from 'react';
import strings from '../config/strings.json';
import { hero } from '../config/assets';

const IntroSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    animatedElements?.forEach((el) => observer.observe(el));

    return () => {
      animatedElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="section section-cta" ref={sectionRef}
          style={{
            backgroundImage: `url(${hero.background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed'
          }}>
      {/* Primary Color Overlay */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(8, 20, 79, 0.7)',
          zIndex: 1
        }}
      ></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="grid-center">
          <div className="animate-on-scroll fade-in delay-200">
            <div 
              className="animate-on-scroll slide-up delay-1"
              style={{
                justifyContent: 'center',
                textAlign: 'center'
              }}
            >
              🎉 Now Booking
            </div>
            <h2 
              className="hero-title animate-on-scroll slide-up delay-2" 
              style={{
                justifyContent: 'center',
                textAlign: 'center',
                fontSize: 'var(--text-4xl)',
                marginBottom: 'var(--space-6)',
                background: 'linear-gradient(135deg, var(--color-secondary), var(--color-secondary-light))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'var(--color-secondary)',
                backgroundClip: 'text'
              }}
            >
              Private Dinners &amp; Happy Hours
            </h2>
            <p 
              className="hero-subtitle animate-on-scroll fade-in delay-3" 
              style={{
                fontSize: 'var(--text-xl)',
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: 'var(--space-8)',
                textAlign: 'center',
                maxWidth: '600px',
                margin: '0 auto var(--space-8)'
              }}
            >
              Experience the authentic flavors of the Middle East in an intimate setting. Perfect for celebrations, business dinners, and special occasions.
            </p>
            <div 
              className="animate-on-scroll scale-in delay-4"
              style={{ 
                display: 'flex', 
                gap: 'var(--space-4)', 
                justifyContent: 'center', 
                flexWrap: 'wrap' 
              }}
            >
              <a href="#contact" className="btn btn-secondary">
                <span>Book Private Event</span>
              </a>
              <a href="#menu" className="btn btn-secondary btn-outline">
                <span>View Menu</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="floating-particles" style={{ position: 'relative', zIndex: 2 }}>
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${20 + i * 15}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default IntroSection;