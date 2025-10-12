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
            // Add staggered animations to child elements
            const animatedElements = entry.target.querySelectorAll('.animate-on-scroll');
            animatedElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('visible');
              }, index * 200);
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
      <div className="section-header" style={{ marginBottom: 'var(--space-8)' }}>
        <div className="section-badge animate-on-scroll slide-down delay-1" style={{ background: 'rgba(255, 255, 255, 0.1)', color: 'var(--color-secondary)' }}>
          {strings.testimonials.subtitle}
        </div>
        <h2 className="section-title animate-on-scroll fade-in-up delay-2" style={{ color: 'var(--color-secondary)' }}>
          {strings.testimonials.title}
        </h2>
      </div>

      {/* Testimonials Carousel */}
      <div className="animate-on-scroll scale-in delay-3" style={{ position: 'relative' }}>
        <div className="testimonial-card" style={{
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
          justifyContent: 'center',
          transition: 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
        }}>
          {/* Current Review */}
          <div style={{
            transition: 'all 0.5s ease-in-out',
            opacity: 1,
            transform: 'translateX(0)'
          }}>
            {/* Customer Image */}
            <div className="animate-on-scroll zoom-in delay-4" style={{
              width: '80px',
              height: '80px',
              borderRadius: 'var(--radius-full)',
              backgroundImage: `url('${strings.testimonials.reviews[currentReview].image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              margin: '0 auto var(--space-4)',
              border: '3px solid var(--color-secondary)',
              boxShadow: '0 8px 25px rgba(252, 177, 0, 0.3)',
              transition: 'all 0.6s ease'
            }}></div>

            {/* Rating Stars */}
            <div className="animate-on-scroll bounce-in delay-5" style={{ 
              marginBottom: 'var(--space-4)'
            }}>
              {[...Array(5)].map((_, index) => (
                <span key={index} style={{
                  color: index < strings.testimonials.reviews[currentReview].rating 
                    ? 'var(--color-secondary)' 
                    : 'rgba(255, 255, 255, 0.3)',
                  fontSize: 'var(--text-xl)',
                  marginRight: 'var(--space-1)',
                  display: 'inline-block',
                  animation: `starTwinkle 0.6s ease ${index * 0.1}s forwards`
                }}>
                  ★
                </span>
              ))}
            </div>

            {/* Review Text */}
            <blockquote className="animate-on-scroll dissolve-in delay-6" style={{
              fontSize: 'var(--text-lg)',
              lineHeight: '1.8',
              color: 'var(--color-tertiary)',
              marginBottom: 'var(--space-6)',
              fontStyle: 'italic',
              maxWidth: '600px',
              margin: '0 auto var(--space-6)',
              position: 'relative'
            }}>
              <span className="animate-on-scroll slide-right delay-7" style={{
                fontSize: '3rem',
                color: 'var(--color-secondary)',
                position: 'absolute',
                top: '-20px',
                left: '-20px',
                lineHeight: '1'
              }}>"</span>
              {strings.testimonials.reviews[currentReview].comment}
              <span className="animate-on-scroll slide-left delay-8" style={{
                fontSize: '3rem',
                color: 'var(--color-secondary)',
                position: 'absolute',
                bottom: '-40px',
                right: '-20px',
                lineHeight: '1'
              }}>"</span>
            </blockquote>

            {/* Customer Info */}
            <div className="animate-on-scroll fade-in-up delay-9">
              <h4 className="animate-on-scroll slide-up" style={{
                fontSize: 'var(--text-xl)',
                fontWeight: '700',
                color: 'var(--color-secondary)',
                marginBottom: 'var(--space-1)'
              }}>
                {strings.testimonials.reviews[currentReview].name}
              </h4>
              <p className="animate-on-scroll fade-in" style={{
                fontSize: 'var(--text-sm)',
                color: 'rgba(255, 255, 255, 0.8)',
                marginBottom: 'var(--space-1)'
              }}>
                {strings.testimonials.reviews[currentReview].role}
              </p>
              <p className="animate-on-scroll slide-up" style={{
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
            className="animate-on-scroll slide-right delay-10"
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
              transition: 'all 0.3s ease',
              fontSize: 'var(--text-xl)'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'var(--color-secondary)';
              e.target.style.color = 'var(--color-primary)';
              e.target.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.1)';
              e.target.style.color = 'white';
              e.target.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            ←
          </button>

          <button
            onClick={nextReview}
            className="animate-on-scroll slide-left delay-10"
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
              transition: 'all 0.3s ease',
              fontSize: 'var(--text-xl)'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'var(--color-secondary)';
              e.target.style.color = 'var(--color-primary)';
              e.target.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.1)';
              e.target.style.color = 'white';
              e.target.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            →
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="animate-on-scroll fade-in-up delay-11" style={{
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
                transition: 'all 0.3s ease',
                transform: index === currentReview ? 'scale(1.3)' : 'scale(1)'
              }}
            />
          ))}
        </div>
      </div>

      {/* Overall Rating Summary */}
      <div className="animate-on-scroll scale-in delay-12" style={{
        marginTop: 'var(--space-8)',
        textAlign: 'center',
        padding: 'var(--space-4)',
        borderRadius: 'var(--radius-lg)',
        border: '3px solid var(--color-secondary)',
        transition: 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 'var(--space-4)' }}>
          <div className="animate-on-scroll zoom-in delay-13" style={{ 
            textAlign: 'center'
          }}>
            <div style={{ fontSize: 'var(--text-3xl)', fontWeight: '700', color: 'var(--color-secondary)' }}>
              4.9
            </div>
            <div style={{ fontSize: 'var(--text-sm)', color: 'rgba(255, 255, 255, 0.8)' }}>
              Average Rating
            </div>
          </div>
          <div className="animate-on-scroll bounce-in delay-14" style={{ 
            textAlign: 'center'
          }}>
            <div style={{ fontSize: 'var(--text-2xl)', fontWeight: '700', color: 'var(--color-secondary)' }}>
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
