import React, { useRef } from 'react';
import strings from '../config/strings.json';
import { getImageByKey } from '../config/assets';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ChefSection = () => {
  const sectionRef = useRef(null);
  
  // Apply advanced scroll animations to all elements
  useScrollAnimation(sectionRef, 'fade-in', 0.1);

  return (
    <div className="section-column" id="chef" ref={sectionRef} style={{ color: 'var(--color-tertiary)' }}>
      {/* Section Header */}
      <div className="section-header animate-on-scroll dissolve" style={{ marginBottom: 'var(--space-8)' }}>
        <div className="section-badge animate-on-scroll flip-in delay-200" style={{ background: 'rgba(255, 255, 255, 0.1)', color: 'var(--color-secondary)' }}>
          {strings.chef.subtitle}
        </div>
        <h2 className="section-title animate-on-scroll zoom-in delay-300" style={{ color: 'var(--color-secondary)' }}>
          {strings.chef.title}
        </h2>
      </div>

      {/* Two Column Chef Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-6)', alignItems: 'center' }}>
        {/* Left Column - Chef Image */}
        <div className="animate-on-scroll rotate-in delay-400" style={{ textAlign: 'center' }}>
          <div style={{
            width: '200px',
            height: '200px',
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
              padding: 'var(--space-2) var(--space-4)',
              borderRadius: 'var(--radius-full)',
              fontSize: 'var(--text-sm)',
              fontWeight: '700',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
            }}>
              15+ Years Experience
            </div>
          </div>
        </div>

        {/* Right Column - Chef Info */}
        <div className="animate-on-scroll slide-in-diagonal delay-500" style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          padding: 'var(--space-6)',
          borderRadius: 'var(--radius-xl)',
          position: 'relative'
        }}>
          <h3 style={{
            fontSize: 'var(--text-2xl)',
            fontWeight: '700',
            color: 'var(--color-secondary)',
            marginBottom: 'var(--space-2)',
            fontFamily: 'var(--font-secondary)'
          }}>
            {strings.chef.chef.name}
          </h3>
          
          <p style={{
            fontSize: 'var(--text-base)',
            color: 'var(--color-secondary)',
            marginBottom: 'var(--space-4)',
            fontStyle: 'italic',
            fontWeight: '600'
          }}>
            {strings.chef.chef.title}
          </p>

          <p style={{
            fontSize: 'var(--text-sm)',
            lineHeight: '1.6',
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: 'var(--space-6)'
          }}>
            {strings.chef.chef.description}
          </p>

          {/* Skills/Specialties */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
            {['Traditional Recipes', 'Authentic Flavors', 'Premium Quality', 'Middle Eastern Cuisine'].map((skill, index) => (
              <div key={index} className={`animate-on-scroll bounce-in delay-${index + 6}`} style={{
                // background: 'rgba(252, 177, 0, 0.2)',
                color: 'var(--color-secondary)',
                padding: 'var(--space-2) var(--space-3)',
                borderRadius: '10px',
                fontSize: 'var(--text-xs)',
                fontWeight: '600',
                border: '1px solid var(--color-secondary)'
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