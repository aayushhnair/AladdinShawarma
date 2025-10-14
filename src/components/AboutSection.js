import React, { useEffect, useRef, useState } from 'react';
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
              }, index * (isMobile ? 80 : 120)); // Smoother animations
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
    <div className={`minimal-about-section ${isMobile ? 'mobile-about' : ''}`} id="about" ref={sectionRef} style={{ 
      color: 'var(--color-tertiary)',
      padding: isMobile ? '2rem 1rem' : '3rem 2rem'
    }}>
      {/* Minimal Section Header */}
      <div className="minimal-about-header" style={{ 
        textAlign: isMobile ? 'center' : 'left', 
        marginBottom: '3rem' 
      }}>
        {/* Professional Badge */}
        <div className="professional-badge animate-on-scroll scale-in delay-1" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          background: 'rgba(252, 177, 0, 0.1)',
          color: '#FCB100',
          padding: '0.4rem 1rem',
          borderRadius: '20px',
          fontSize: '0.8rem',
          fontWeight: '600',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          marginBottom: '1.5rem',
          border: '1px solid rgba(252, 177, 0, 0.2)'
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          Our Story
        </div>

        {/* Minimal Title */}
        <h2 className="minimal-title animate-on-scroll slide-up delay-2" style={{ 
          color: '#FFFFFF',
          fontSize: isMobile ? '2rem' : '2.8rem',
          fontWeight: '700',
          fontFamily: "'Playfair Display', serif",
          lineHeight: '1.2',
          marginBottom: '1rem'
        }}>
          Authentic Middle Eastern
          <span style={{ 
            color: '#FCB100',
            display: 'block',
            fontSize: '0.8em'
          }}>
            Culinary Excellence
          </span>
        </h2>

        {/* Essential Description */}
        <p className="minimal-description animate-on-scroll fade-in delay-3" style={{ 
          color: 'rgba(255, 255, 255, 0.8)',
          fontSize: isMobile ? '1rem' : '1.1rem',
          lineHeight: '1.6',
          fontWeight: '400',
          maxWidth: '500px',
          margin: isMobile ? '0 auto' : '0'
        }}>
          {isMobile ? 
            "Traditional recipes, fresh ingredients, and passionate craftsmanship in every bite." :
            "Where traditional Middle Eastern recipes meet modern culinary excellence. Fresh ingredients, passionate craftsmanship, and authentic flavors in every bite."
          }
        </p>
      </div>

      {/* Minimal Key Points */}
      <div className="minimal-key-points" style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
        gap: isMobile ? '1.5rem' : '2rem',
        marginBottom: '3rem'
      }}>
        {[
          {
            icon: (
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
                <path d="M4 22h16"/>
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
              </svg>
            ),
            title: 'Award Winning',
            description: 'Recognized for authentic flavors and exceptional quality.'
          },
          {
            icon: (
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 20h10"/>
                <path d="M10 20c5.5-2.5.8-6.4 3-10"/>
                <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/>
                <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.7 4.3-1.4 1-1.1 1.6-2.7 1.7-4.7-2.7.1-4 1-4.9 2.1z"/>
              </svg>
            ),
            title: 'Fresh Daily',
            description: 'Premium ingredients sourced and prepared fresh every day.'
          }
        ].map((point, index) => (
          <div key={index} className={`minimal-point animate-on-scroll slide-up delay-${4 + index}`} style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            borderRadius: '15px',
            padding: isMobile ? '1.5rem' : '2rem',
            border: '1px solid rgba(252, 177, 0, 0.1)',
            transition: 'all 0.3s ease',
            textAlign: isMobile ? 'center' : 'left'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(252, 177, 0, 0.1)';
            e.currentTarget.style.borderColor = 'rgba(252, 177, 0, 0.3)';
            e.currentTarget.style.transform = 'translateY(-5px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
            e.currentTarget.style.borderColor = 'rgba(252, 177, 0, 0.1)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
          >
            <div style={{ 
              color: '#FCB100',
              marginBottom: '1rem',
              display: 'flex',
              justifyContent: isMobile ? 'center' : 'flex-start'
            }}>
              {point.icon}
            </div>
            <h4 style={{ 
              color: '#FFFFFF',
              fontSize: isMobile ? '1.1rem' : '1.2rem',
              fontWeight: '600',
              marginBottom: '0.5rem',
              fontFamily: "'Inter', sans-serif"
            }}>
              {point.title}
            </h4>
            <p style={{ 
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '0.9rem',
              lineHeight: '1.5',
              margin: 0
            }}>
              {point.description}
            </p>
          </div>
        ))}
      </div>

      {/* Minimal Statistics - High Impact */}
      <div className="minimal-stats animate-on-scroll fade-in delay-6" style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
        gap: isMobile ? '1rem' : '1.5rem',
        textAlign: 'center'
      }}>
        {[
          { number: '15+', label: 'Years Experience' },
          { number: '50K+', label: 'Happy Customers' },
          { number: '25+', label: 'Menu Items' },
          { number: '99%', label: 'Customer Satisfaction' }
        ].map((stat, index) => (
          <div key={index} className={`minimal-stat animate-on-scroll scale-in delay-${7 + index}`} style={{
            background: 'linear-gradient(135deg, #FCB100, #FFC943)',
            color: '#08144F',
            borderRadius: '12px',
            padding: isMobile ? '1rem 0.5rem' : '1.5rem 1rem',
            boxShadow: '0 8px 25px rgba(252, 177, 0, 0.3)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
            e.currentTarget.style.boxShadow = '0 12px 35px rgba(252, 177, 0, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(252, 177, 0, 0.3)';
          }}
          >
            <div style={{ 
              fontSize: isMobile ? '1.5rem' : '2rem', 
              fontWeight: '800',
              fontFamily: "'Playfair Display', serif",
              marginBottom: '0.25rem'
            }}>
              {stat.number}
            </div>
            <div style={{ 
              fontSize: isMobile ? '0.7rem' : '0.8rem', 
              fontWeight: '500',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              opacity: 0.9
            }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Minimal Call to Action */}
      <div className="minimal-cta animate-on-scroll fade-in delay-8" style={{
        textAlign: 'center',
        marginTop: '3rem'
      }}>
        <button style={{
          background: 'transparent',
          color: '#FCB100',
          border: '2px solid #FCB100',
          borderRadius: '25px',
          padding: isMobile ? '0.8rem 1.5rem' : '1rem 2rem',
          fontSize: '0.9rem',
          fontWeight: '600',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          fontFamily: "'Inter', sans-serif"
        }}
        onMouseEnter={(e) => {
          e.target.style.background = '#FCB100';
          e.target.style.color = '#08144F';
          e.target.style.transform = 'translateY(-3px)';
          e.target.style.boxShadow = '0 10px 25px rgba(252, 177, 0, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'transparent';
          e.target.style.color = '#FCB100';
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = 'none';
        }}
        onClick={() => {
          const menuSection = document.querySelector('#menu');
          if (menuSection) {
            menuSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }}
        >
          Explore Our Menu
        </button>
      </div>
    </div>
  );
};

export default AboutSection;