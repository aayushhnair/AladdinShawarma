import React, { useRef, useEffect } from 'react';
import strings from '../config/strings.json';
import { getImageByKey } from '../config/assets';

const PerfectIngredientsSection = () => {
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
    <div className="section-column" ref={sectionRef} style={{ color: 'var(--color-tertiary)' }}>
      {/* Section Header */}
      <div className="section-header animate-on-scroll fade-in" style={{ marginBottom: 'var(--space-8)' }}>
        <div className="section-badge" style={{ background: 'rgba(255, 255, 255, 0.1)', color: 'var(--color-secondary)' }}>
          {strings.perfectIngredients.subtitle}
        </div>
        <h2 className="section-title" style={{ color: 'var(--color-secondary)' }}>
          {strings.perfectIngredients.title}
        </h2>
        <div className="section-decoration"></div>
      </div>

      {/* Compact Ingredients Display */}
      <div className="animate-on-scroll scale-in delay-200">
        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          padding: 'var(--space-6)',
          borderRadius: 'var(--radius-xl)',
          textAlign: 'center',
          marginBottom: 'var(--space-6)'
        }}>
          {/* Feature Image */}
          <div style={{
            width: '100px',
            height: '100px',
            borderRadius: 'var(--radius-xl)',
            backgroundImage: `url('${getImageByKey('ingredients.featured')}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            margin: '0 auto var(--space-4)',
            border: '3px solid var(--color-secondary)',
            boxShadow: 'var(--shadow-secondary)'
          }}></div>

          {/* Description */}
          <p style={{
            fontSize: 'var(--text-base)',
            lineHeight: '1.6',
            color: 'var(--color-tertiary)',
            marginBottom: 'var(--space-4)',
            maxWidth: '350px',
            margin: '0 auto var(--space-4)'
          }}>
            {strings.perfectIngredients.description.substring(0, 150)}...
          </p>

          {/* Key Ingredients */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
            {strings.perfectIngredients.ingredients.slice(0, 3).map((ingredient, index) => (
              <div key={index} style={{
                background: 'var(--color-secondary)',
                color: 'var(--color-primary)',
                padding: 'var(--space-1) var(--space-3)',
                borderRadius: 'var(--radius-full)',
                fontSize: 'var(--text-xs)',
                fontWeight: '600'
              }}>
                {ingredient.name}
              </div>
            ))}
            <div style={{
              background: 'rgba(255, 255, 255, 0.2)',
              color: 'var(--color-tertiary)',
              padding: 'var(--space-1) var(--space-3)',
              borderRadius: 'var(--radius-full)',
              fontSize: 'var(--text-xs)',
              fontWeight: '600'
            }}>
              +{strings.perfectIngredients.ingredients.length - 3} more
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfectIngredientsSection;