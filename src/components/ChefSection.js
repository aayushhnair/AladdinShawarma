import React, { useEffect, useRef } from 'react';
import strings from '../config/strings.json';
import { getImageByKey } from '../config/assets';

const ChefSection = () => {
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
    <div className="section-column" id="chef" ref={sectionRef} style={{ color: 'var(--color-tertiary)' }}>
      {/* Section Header */}
      <div className="section-header animate-on-scroll fade-in" style={{ marginBottom: 'var(--space-8)' }}>
        <div className="section-badge" style={{ background: 'rgba(255, 255, 255, 0.1)', color: 'var(--color-secondary)' }}>
          {strings.chef.subtitle}
        </div>
        <h2 className="section-title" style={{ color: 'var(--color-secondary)' }}>
          {strings.chef.title}
        </h2>
        <div className="section-decoration"></div>
      </div>

      {/* Compact Chef Card */}
      <div className="animate-on-scroll scale-in delay-200">
        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          padding: 'var(--space-6)',
          borderRadius: 'var(--radius-xl)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Chef Image */}
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: 'var(--radius-full)',
            backgroundImage: `url('${getImageByKey('chef.portrait')}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            margin: '0 auto var(--space-4)',
            border: '3px solid var(--color-secondary)',
            boxShadow: 'var(--shadow-secondary)'
          }}></div>

          <h3 style={{
            fontSize: 'var(--text-xl)',
            fontWeight: '700',
            color: 'var(--color-secondary)',
            marginBottom: 'var(--space-2)'
          }}>
            {strings.chef.chef.name}
          </h3>
          
          <p style={{
            fontSize: 'var(--text-sm)',
            color: 'rgba(255, 255, 255, 0.8)',
            marginBottom: 'var(--space-4)',
            fontStyle: 'italic'
          }}>
            {strings.chef.chef.title}
          </p>

          {/* Brief Description */}
          <p style={{
            fontSize: 'var(--text-sm)',
            lineHeight: '1.6',
            color: 'var(--color-tertiary)',
            marginBottom: 'var(--space-4)',
            maxWidth: '300px',
            margin: '0 auto var(--space-4)'
          }}>
            {strings.chef.chef.description.substring(0, 120)}...
          </p>

          {/* Experience Badges */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
            <div style={{
              background: 'var(--color-secondary)',
              color: 'var(--color-primary)',
              padding: 'var(--space-1) var(--space-3)',
              borderRadius: 'var(--radius-full)',
              fontSize: 'var(--text-xs)',
              fontWeight: '600'
            }}>
              15+ Years
            </div>
            <div style={{
              background: 'var(--color-secondary)',
              color: 'var(--color-primary)',
              padding: 'var(--space-1) var(--space-3)',
              borderRadius: 'var(--radius-full)',
              fontSize: 'var(--text-xs)',
              fontWeight: '600'
            }}>
              Expert Chef
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefSection;