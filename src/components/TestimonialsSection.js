import React, { useState, useEffect, useRef } from 'react';
import strings from '../config/strings.json';
import { getImageByKey } from '../config/assets';

const TestimonialsSection = () => {
  const [currentReview, setCurrentReview] = useState(0);
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

  // Auto-slide testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => 
        prev === strings.testimonials.reviews.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextReview = () => {
    setCurrentReview((prev) => 
      prev === strings.testimonials.reviews.length - 1 ? 0 : prev + 1
    );
  };

  const prevReview = () => {
    setCurrentReview((prev) => 
      prev === 0 ? strings.testimonials.reviews.length - 1 : prev - 1
    );
  };

  const goToReview = (index) => {
    setCurrentReview(index);
  };

  return (
    <div className="section-column" id="testimonials" ref={sectionRef} style={{ color: 'var(--color-tertiary)' }}>
      {/* Section Header */}
      <div className="section-header animate-on-scroll fade-in" style={{ marginBottom: 'var(--space-8)' }}>
        <div className="section-badge" style={{ background: 'rgba(255, 255, 255, 0.1)', color: 'var(--color-secondary)' }}>
          {strings.testimonials.subtitle}
        </div>
        <h2 className="section-title" style={{ color: 'var(--color-secondary)' }}>
          {strings.testimonials.title}
        </h2>
      </div>

      {/* Testimonials Carousel */}
      <div className="animate-on-scroll scale-in delay-200" style={{ position: 'relative' }}>
        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: 'var(--radius-xl)',
          padding: 'var(--space-8)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          minHeight: '300px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          {/* Current Review */}
          <div style={{
            transition: 'all 0.5s ease-in-out',
            opacity: 1,
            transform: 'translateX(0)'
          }}>
            {/* Customer Image */}
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: 'var(--radius-full)',
              backgroundImage: `url('${getImageByKey(strings.testimonials.reviews[currentReview].image)}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              margin: '0 auto var(--space-4)',
              border: '3px solid var(--color-secondary)',
              boxShadow: '0 8px 25px rgba(252, 177, 0, 0.3)'
            }}></div>

            {/* Rating Stars */}
            <div style={{ marginBottom: 'var(--space-4)' }}>
              {[...Array(5)].map((_, index) => (
                <span key={index} style={{
                  color: index < strings.testimonials.reviews[currentReview].rating 
                    ? 'var(--color-secondary)' 
                    : 'rgba(255, 255, 255, 0.3)',
                  fontSize: 'var(--text-xl)',
                  marginRight: 'var(--space-1)'
                }}>
                  ★
                </span>
              ))}
            </div>

            {/* Review Text */}
            <blockquote style={{
              fontSize: 'var(--text-lg)',
              lineHeight: '1.8',
              color: 'var(--color-tertiary)',
              marginBottom: 'var(--space-6)',
              fontStyle: 'italic',
              maxWidth: '600px',
              margin: '0 auto var(--space-6)',
              position: 'relative'
            }}>
              <span style={{
                fontSize: '3rem',
                color: 'var(--color-secondary)',
                position: 'absolute',
                top: '-20px',
                left: '-20px',
                lineHeight: '1'
              }}>"</span>
              {strings.testimonials.reviews[currentReview].comment}
              <span style={{
                fontSize: '3rem',
                color: 'var(--color-secondary)',
                position: 'absolute',
                bottom: '-40px',
                right: '-20px',
                lineHeight: '1'
              }}>"</span>
            </blockquote>

            {/* Customer Info */}
            <div>
              <h4 style={{
                fontSize: 'var(--text-xl)',
                fontWeight: '700',
                color: 'var(--color-secondary)',
                marginBottom: 'var(--space-1)'
              }}>
                {strings.testimonials.reviews[currentReview].name}
              </h4>
              <p style={{
                fontSize: 'var(--text-sm)',
                color: 'rgba(255, 255, 255, 0.8)',
                marginBottom: 'var(--space-1)'
              }}>
                {strings.testimonials.reviews[currentReview].role}
              </p>
              <p style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--color-secondary)',
                margin: 0
              }}>
                📍 {strings.testimonials.reviews[currentReview].location}
              </p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevReview}
            style={{
              position: 'absolute',
              left: 'var(--space-4)',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: 'var(--radius-full)',
              width: '50px',
              height: '50px',
              color: 'white',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'var(--transition-normal)',
              fontSize: 'var(--text-xl)'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'var(--color-secondary)';
              e.target.style.color = 'var(--color-primary)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.1)';
              e.target.style.color = 'white';
            }}
          >
            ←
          </button>

          <button
            onClick={nextReview}
            style={{
              position: 'absolute',
              right: 'var(--space-4)',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: 'var(--radius-full)',
              width: '50px',
              height: '50px',
              color: 'white',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'var(--transition-normal)',
              fontSize: 'var(--text-xl)'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'var(--color-secondary)';
              e.target.style.color = 'var(--color-primary)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.1)';
              e.target.style.color = 'white';
            }}
          >
            →
          </button>
        </div>

        {/* Dots Indicator */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 'var(--space-2)',
          marginTop: 'var(--space-6)'
        }}>
          {strings.testimonials.reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => goToReview(index)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                background: index === currentReview 
                  ? 'var(--color-secondary)' 
                  : 'rgba(255, 255, 255, 0.3)',
                cursor: 'pointer',
                transition: 'var(--transition-normal)'
              }}
            />
          ))}
        </div>
      </div>

      {/* Overall Rating Summary */}
      <div className="animate-on-scroll fade-in delay-400" style={{
        marginTop: 'var(--space-8)',
        textAlign: 'center',
        background: 'rgba(252, 177, 0, 0.1)',
        padding: 'var(--space-4)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid rgba(252, 177, 0, 0.3)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 'var(--space-4)' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 'var(--text-3xl)', fontWeight: '700', color: 'var(--color-secondary)' }}>
              4.9
            </div>
            <div style={{ fontSize: 'var(--text-sm)', color: 'rgba(255, 255, 255, 0.8)' }}>
              Average Rating
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 'var(--text-2xl)', color: 'var(--color-secondary)' }}>
              ★★★★★
            </div>
            <div style={{ fontSize: 'var(--text-sm)', color: 'rgba(255, 255, 255, 0.8)' }}>
              Based on 500+ reviews
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
