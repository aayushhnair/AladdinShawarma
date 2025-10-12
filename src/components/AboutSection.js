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
    <div className="section-column" id="about" ref={sectionRef} style={{ color: 'var(--color-tertiary)' }}>
      {/* About Content */}
      <div className="animate-on-scroll slide-right delay-200">
        <div className="section-header" style={{ textAlign: 'left', marginBottom: 'var(--space-8)' }}>
          <div className="section-badge">{strings.about.badge}</div>
          <h2 className="section-title" style={{ color: 'var(--color-secondary)' }}>{strings.about.title}</h2>
          <p className="section-subtitle" style={{ marginLeft: 0, color: 'rgba(255, 255, 255, 0.9)' }}>
            {strings.about.subtitle}
          </p>
        </div>
        
        <div className="card-content">
          <p className="card-text" style={{ 
            fontSize: 'var(--text-lg)', 
            lineHeight: '1.8',
            color: 'rgba(255, 255, 255, 0.8)'
          }}>
            {strings.about.description}
          </p>

          {/* About Highlights */}
          <div className="grid grid-cols-1" style={{ gap: 'var(--space-4)', marginTop: 'var(--space-6)' }}>
            {strings.about.highlights.slice(0, 2).map((highlight, index) => (
              <div key={index} className={`animate-on-scroll slide-up stagger-${index + 1}`}>
                <div style={{ 
                  padding: 'var(--space-4)', 
                  background: 'rgba(252, 177, 0, 0.1)',
                  borderRadius: 'var(--radius-lg)',
                  borderLeft: '4px solid var(--color-secondary)',
                  transition: 'var(--transition-normal)'
                }}>
                  <h4 style={{ 
                    color: 'var(--color-secondary)', 
                    marginBottom: 'var(--space-2)',
                    fontSize: 'var(--text-base)',
                    fontWeight: '600'
                  }}>
                    {highlight.title}
                  </h4>
                  <p style={{ 
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
              <div key={index} className={`text-center animate-on-scroll scale-in stagger-${index + 3}`}>
                <div style={{
                  background: 'linear-gradient(135deg, var(--color-secondary), var(--color-secondary-light))',
                  color: 'var(--color-primary)',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'var(--space-16)',
                  boxShadow: 'var(--shadow-secondary)',
                  transition: 'var(--transition-normal)'
                }}>
                  <div style={{ 
                    fontSize: 'var(--text-xl)', 
                    fontWeight: '800',
                    fontFamily: 'var(--font-secondary)',
                    marginBottom: 'var(--space-1)'
                  }}>
                    {stat.number}
                  </div>
                  <div style={{ 
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