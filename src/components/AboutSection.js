import React, { useEffect, useRef } from 'react';
import ReservationForm from './ReservationForm';
import strings from '../config/strings.json';

const AboutSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add staggered animations to child elements
            const animatedElements = entry.target.querySelectorAll('.animate-on-scroll');
            animatedElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('visible');
              }, index * 150);
            });
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
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

  return (
    <div className="section-column" id="about" ref={sectionRef} style={{ color: 'var(--color-tertiary)' }}>
      {/* About Content */}
      <div className="about-content-wrapper">
        <div className="section-header animate-on-scroll fade-in-up" style={{ textAlign: 'left', marginBottom: 'var(--space-8)' }}>
          <div className="section-badge animate-on-scroll slide-right delay-1">{strings.about.badge}</div>
          <h2 className="section-title animate-on-scroll slide-left delay-2" style={{ color: 'var(--color-secondary)' }}>{strings.about.title}</h2>
          <p className="section-subtitle animate-on-scroll fade-in delay-3" style={{ marginLeft: 0, color: 'rgba(255, 255, 255, 0.9)' }}>
            {strings.about.subtitle}
          </p>
        </div>
        
        <div className="card-content">
          <p className="card-text animate-on-scroll dissolve-in delay-4" style={{ 
            fontSize: 'var(--text-lg)', 
            lineHeight: '1.8',
            color: 'rgba(255, 255, 255, 0.8)'
          }}>
            {strings.about.description}
          </p>

          {/* About Highlights */}
          <div className="grid grid-cols-1" style={{ gap: 'var(--space-4)', marginTop: 'var(--space-6)' }}>
            {strings.about.highlights.slice(0, 2).map((highlight, index) => (
              <div key={index} className={`animate-on-scroll slide-up delay-${5 + index}`}>
                <div className="highlight-card" style={{ 
                  padding: 'var(--space-4)', 
                  background: 'rgba(252, 177, 0, 0.1)',
                  borderRadius: 'var(--radius-lg)',
                  borderLeft: '4px solid var(--color-secondary)',
                  transition: 'all 0.3s ease'
                }}>
                  <h4 className="animate-on-scroll bounce-in" style={{ 
                    color: 'var(--color-secondary)', 
                    marginBottom: 'var(--space-2)',
                    fontSize: 'var(--text-base)',
                    fontWeight: '600'
                  }}>
                    {highlight.title}
                  </h4>
                  <p className="animate-on-scroll fade-in-left" style={{ 
                    color: 'rgba(255, 255, 255, 0.7)', 
                    margin: 0,
                    lineHeight: '1.6',
                    fontSize: 'var(--text-sm)'
                  }}>
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2" style={{ gap: 'var(--space-4)', marginTop: 'var(--space-8)' }}>
            {strings.about.stats.slice(0, 4).map((stat, index) => (
              <div key={index} className={`text-center animate-on-scroll scale-in delay-${7 + index}`}>
                <div className="stat-card" style={{
                  background: 'linear-gradient(135deg, var(--color-secondary), var(--color-secondary-light))',
                  color: 'var(--color-primary)',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'var(--space-16)',
                  boxShadow: 'var(--shadow-secondary)',
                  transition: 'all 0.5s ease'
                }}>
                  <div className="animate-on-scroll zoom-in" style={{ 
                    fontSize: 'var(--text-xl)', 
                    fontWeight: '800',
                    fontFamily: 'var(--font-secondary)',
                    marginBottom: 'var(--space-1)'
                  }}>
                    {stat.number}
                  </div>
                  <div className="animate-on-scroll slide-up" style={{ 
                    fontSize: 'var(--text-xs)', 
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