import React, { useEffect, useRef, useState } from 'react';
import ReservationForm from './ReservationForm';
import strings from '../config/strings.json';

const AboutSection = () => {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

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
            // Add staggered animations to child elements
            const animatedElements = entry.target.querySelectorAll('.animate-on-scroll');
            animatedElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('visible');
              }, index * (isMobile ? 100 : 150)); // Faster animations on mobile
            });
          }
        });
      },
      { 
        threshold: isMobile ? 0.05 : 0.1,
        rootMargin: '0px 0px -50px 0px'
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

  return (
    <div className={`section-column ${isMobile ? 'mobile-about' : ''}`} id="about" ref={sectionRef} style={{ color: 'var(--color-tertiary)' }}>
      {/* About Content */}
      <div className={`about-content-wrapper ${isMobile ? 'mobile-wrapper' : ''}`}>
        <div className={`section-header animate-on-scroll fade-in-up ${isMobile ? 'mobile-header' : ''}`} style={{ 
          textAlign: isMobile ? 'center' : 'left', 
          marginBottom: isMobile ? 'var(--space-6)' : 'var(--space-8)' 
        }}>
          <div className="section-badge animate-on-scroll slide-right delay-1">{strings.about.badge}</div>
          <h2 className={`section-title animate-on-scroll slide-left delay-2 ${isMobile ? 'mobile-title' : ''}`} style={{ color: 'var(--color-secondary)' }}>
            {strings.about.title}
          </h2>
          <p className={`section-subtitle animate-on-scroll fade-in delay-3 ${isMobile ? 'mobile-subtitle' : ''}`} style={{ 
            marginLeft: 0, 
            color: 'rgba(255, 255, 255, 0.9)',
            textAlign: isMobile ? 'center' : 'left',
            padding: isMobile ? '0 1rem' : '0'
          }}>
            {strings.about.subtitle}
          </p>
        </div>
        
        <div className={`card-content ${isMobile ? 'mobile-content' : ''}`}>
          <p className={`card-text animate-on-scroll dissolve-in delay-4 ${isMobile ? 'mobile-text' : ''}`} style={{ 
            fontSize: isMobile ? 'var(--text-base)' : 'var(--text-lg)', 
            lineHeight: '1.8',
            color: 'rgba(255, 255, 255, 0.8)',
            textAlign: isMobile ? 'center' : 'left',
            padding: isMobile ? '0 1rem' : '0'
          }}>
            {isMobile ? strings.about.description.substring(0, 200) + '...' : strings.about.description}
          </p>

          {/* About Highlights */}
          <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-1'}`} style={{ 
            gap: isMobile ? 'var(--space-3)' : 'var(--space-4)', 
            marginTop: isMobile ? 'var(--space-4)' : 'var(--space-6)',
            padding: isMobile ? '0 1rem' : '0'
          }}>
            {strings.about.highlights.slice(0, isMobile ? 2 : 2).map((highlight, index) => (
              <div key={index} className={`animate-on-scroll slide-up delay-${5 + index}`}>
                <div className={`highlight-card ${isMobile ? 'mobile-highlight' : ''}`} style={{ 
                  padding: isMobile ? 'var(--space-3)' : 'var(--space-4)', 
                  background: 'rgba(252, 177, 0, 0.1)',
                  borderRadius: 'var(--radius-lg)',
                  borderLeft: '4px solid var(--color-secondary)',
                  transition: 'all 0.3s ease'
                }}>
                  <h4 className="animate-on-scroll bounce-in" style={{ 
                    color: 'var(--color-secondary)', 
                    marginBottom: 'var(--space-2)',
                    fontSize: isMobile ? 'var(--text-sm)' : 'var(--text-base)',
                    fontWeight: '600',
                    textAlign: isMobile ? 'center' : 'left'
                  }}>
                    {highlight.title}
                  </h4>
                  <p className="animate-on-scroll fade-in-left" style={{ 
                    color: 'rgba(255, 255, 255, 0.7)', 
                    margin: 0,
                    lineHeight: '1.6',
                    fontSize: isMobile ? 'var(--text-xs)' : 'var(--text-sm)',
                    textAlign: isMobile ? 'center' : 'left'
                  }}>
                    {isMobile ? highlight.description.substring(0, 100) + '...' : highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Statistics */}
          <div className={`grid ${isMobile ? 'grid-cols-2' : 'grid-cols-2'}`} style={{ 
            gap: isMobile ? 'var(--space-3)' : 'var(--space-4)', 
            marginTop: isMobile ? 'var(--space-6)' : 'var(--space-8)',
            padding: isMobile ? '0 1rem' : '0'
          }}>
            {strings.about.stats.slice(0, 4).map((stat, index) => (
              <div key={index} className={`text-center animate-on-scroll scale-in delay-${7 + index}`}>
                <div className={`stat-card ${isMobile ? 'mobile-stat' : ''}`} style={{
                  background: 'linear-gradient(135deg, var(--color-secondary), var(--color-secondary-light))',
                  color: 'var(--color-primary)',
                  borderRadius: 'var(--radius-xl)',
                  padding: isMobile ? 'var(--space-4)' : 'var(--space-16)',
                  boxShadow: 'var(--shadow-secondary)',
                  transition: 'all 0.5s ease',
                  minHeight: isMobile ? '80px' : 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}>
                  <div className="animate-on-scroll zoom-in" style={{ 
                    fontSize: isMobile ? 'var(--text-lg)' : 'var(--text-xl)', 
                    fontWeight: '800',
                    fontFamily: 'var(--font-secondary)',
                    marginBottom: 'var(--space-1)'
                  }}>
                    {stat.number}
                  </div>
                  <div className="animate-on-scroll slide-up" style={{ 
                    fontSize: isMobile ? '10px' : 'var(--text-xs)', 
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;