import React, { useRef, useState, useEffect } from 'react';
import strings from '../config/strings.json';
import { getImageByKey } from '../config/assets';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ChefSection = () => {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Apply advanced scroll animations to all elements
  useScrollAnimation(sectionRef, 'fade-in', 0.1);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="section-column" id="chef" ref={sectionRef} style={{ color: '#08144F' }}>
      {/* Section Header */}
      <div className="section-header animate-on-scroll dissolve" style={{ marginBottom: 'var(--space-8)' }}>
        <div className="section-badge animate-on-scroll flip-in delay-200" style={{ 
          background: 'rgba(252, 177, 0, 0.15)', 
          color: '#FCB100',
          border: '1px solid rgba(252, 177, 0, 0.3)',
          display: 'inline-block',
          padding: '0.4rem 1rem',
          borderRadius: '20px',
          fontSize: '0.8rem',
          fontWeight: '600',
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>
          {strings.chef.subtitle}
        </div>
        <h2 className="section-title animate-on-scroll zoom-in delay-300" style={{ color: '#08144F' }}>
          {strings.chef.title}
        </h2>
      </div>

      {/* Responsive Chef Layout */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
        gap: isMobile ? 'var(--space-8)' : 'var(--space-6)', 
        alignItems: 'center' 
      }}>
        {/* Chef Image */}
        <div className="animate-on-scroll rotate-in delay-400" style={{ 
          textAlign: 'center',
          order: isMobile ? 1 : 0 
        }}>
          <div style={{
            width: isMobile ? '180px' : '200px',
            height: isMobile ? '180px' : '200px',
            borderRadius: 'var(--radius-full)',
            backgroundImage: `url('${strings.chef.chef.image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            margin: '0 auto',
            border: '4px solid var(--color-secondary)',
            boxShadow: '0 10px 30px rgba(252, 177, 0, 0.3)',
            position: 'relative'
          }}>
            {/* Experience Badge */}
            <div style={{
              position: 'absolute',
              bottom: '-10px',
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'var(--color-secondary)',
              color: 'var(--color-primary)',
              padding: isMobile ? 'var(--space-1) var(--space-3)' : 'var(--space-2) var(--space-4)',
              borderRadius: 'var(--radius-full)',
              fontSize: isMobile ? 'var(--text-xs)' : 'var(--text-sm)',
              fontWeight: '700',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
              whiteSpace: 'nowrap'
            }}>
              15+ Years Experience
            </div>
          </div>
        </div>

        {/* Chef Info */}
        <div className="animate-on-scroll slide-in-diagonal delay-500" style={{
          background: '#FFFFFF',
          backdropFilter: 'blur(20px)',
          border: '2px solid rgba(252, 177, 0, 0.2)',
          padding: isMobile ? 'var(--space-4)' : 'var(--space-6)',
          borderRadius: 'var(--radius-xl)',
          position: 'relative',
          textAlign: isMobile ? 'center' : 'left',
          order: isMobile ? 2 : 0,
          boxShadow: '0 4px 20px rgba(8, 20, 79, 0.08)'
        }}>
          <h3 style={{
            fontSize: isMobile ? 'var(--text-xl)' : 'var(--text-2xl)',
            fontWeight: '700',
            color: '#08144F',
            marginBottom: 'var(--space-2)',
            fontFamily: 'var(--font-secondary)'
          }}>
            {strings.chef.chef.name}
          </h3>
          
          <p style={{
            fontSize: isMobile ? 'var(--text-sm)' : 'var(--text-base)',
            color: 'var(--color-secondary)',
            marginBottom: 'var(--space-4)',
            fontStyle: 'italic',
            fontWeight: '600'
          }}>
            {strings.chef.chef.title}
          </p>

          <p style={{
            fontSize: isMobile ? 'var(--text-xs)' : 'var(--text-sm)',
            lineHeight: '1.6',
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: 'var(--space-6)'
          }}>
            {strings.chef.chef.description}
          </p>

          {/* Skills/Specialties */}
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: 'var(--space-2)',
            justifyContent: isMobile ? 'center' : 'flex-start'
          }}>
            {['Traditional Recipes', 'Authentic Flavors', 'Premium Quality', 'Middle Eastern Cuisine'].map((skill, index) => (
              <div key={index} className={`animate-on-scroll bounce-in delay-${index + 6}`} style={{
                color: 'var(--color-secondary)',
                padding: isMobile ? 'var(--space-1) var(--space-2)' : 'var(--space-2) var(--space-3)',
                borderRadius: '10px',
                fontSize: isMobile ? '10px' : 'var(--text-xs)',
                fontWeight: '600',
                border: '1px solid var(--color-secondary)',
                textAlign: 'center'
              }}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefSection;