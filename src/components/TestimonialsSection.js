import React, { useState, useEffect, useRef } from 'react';
import strings from '../config/strings.json';
import { getImageByKey } from '../config/assets';

const TestimonialsSection = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const sectionRef = useRef(null);

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
              }, index * (isMobile ? 100 : 200)); // Faster on mobile
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

  // Auto-slide testimonials - slower on mobile
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => 
        prev === strings.testimonials.reviews.length - 1 ? 0 : prev + 1
      );
    }, isMobile ? 7000 : 5000); // Slower auto-advance on mobile

    return () => clearInterval(interval);
  }, [isMobile]);

  const nextReview = () => {
    if (isMobile && navigator.vibrate) {
      navigator.vibrate(30);
    }
    setCurrentReview((prev) => 
      prev === strings.testimonials.reviews.length - 1 ? 0 : prev + 1
    );
  };

  const prevReview = () => {
    if (isMobile && navigator.vibrate) {
      navigator.vibrate(30);
    }
    setCurrentReview((prev) => 
      prev === 0 ? strings.testimonials.reviews.length - 1 : prev - 1
    );
  };

  const goToReview = (index) => {
    if (isMobile && navigator.vibrate) {
      navigator.vibrate(20);
    }
    setCurrentReview(index);
  };

  // Touch handlers for swipe navigation
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextReview();
    } else if (isRightSwipe) {
      prevReview();
    }
  };

  return (
    <div className={`section-column ${isMobile ? 'mobile-testimonials' : ''}`} id="testimonials" ref={sectionRef} style={{ color: 'var(--color-tertiary)' }}>
      {/* Section Header */}
      <div className={`section-header ${isMobile ? 'mobile-testimonials-header' : ''}`} style={{ 
        marginBottom: isMobile ? 'var(--space-6)' : 'var(--space-8)',
        textAlign: isMobile ? 'center' : 'left',
        padding: isMobile ? '0 1rem' : '0'
      }}>
        <div className="section-badge animate-on-scroll slide-down delay-1" style={{ background: 'rgba(255, 255, 255, 0.1)', color: 'var(--color-secondary)' }}>
          {strings.testimonials.subtitle}
        </div>
        <h2 className={`section-title animate-on-scroll fade-in-up delay-2 ${isMobile ? 'mobile-testimonials-title' : ''}`} style={{ color: 'var(--color-secondary)' }}>
          {strings.testimonials.title}
        </h2>
      </div>

      {/* Testimonials Carousel */}
      <div className="animate-on-scroll scale-in delay-3" style={{ 
        position: 'relative',
        padding: isMobile ? '0 1rem' : '0'
      }}>
        <div 
          className={`testimonial-card ${isMobile ? 'mobile-testimonial-card' : ''}`}
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: 'var(--radius-xl)',
            padding: isMobile ? 'var(--space-4)' : 'var(--space-8)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            minHeight: isMobile ? '250px' : '300px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            transition: 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            touchAction: 'pan-y pinch-zoom'
          }}
          onTouchStart={isMobile ? onTouchStart : undefined}
          onTouchMove={isMobile ? onTouchMove : undefined}
          onTouchEnd={isMobile ? onTouchEnd : undefined}
        >
          {/* Swipe Indicator for Mobile */}
          {isMobile && (
            <div style={{
              position: 'absolute',
              top: 'var(--space-2)',
              right: 'var(--space-2)',
              fontSize: '12px',
              color: 'rgba(255, 255, 255, 0.6)',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-1)'
            }}>
              ← Swipe →
            </div>
          )}

          {/* Current Review */}
          <div style={{
            transition: 'all 0.5s ease-in-out',
            opacity: 1,
            transform: 'translateX(0)'
          }}>
            {/* Customer Image */}
            <div className="animate-on-scroll zoom-in delay-4" style={{
              width: isMobile ? '60px' : '80px',
              height: isMobile ? '60px' : '80px',
              borderRadius: 'var(--radius-full)',
              backgroundImage: `url('${strings.testimonials.reviews[currentReview].image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              margin: `0 auto ${isMobile ? 'var(--space-3)' : 'var(--space-4)'}`,
              border: '3px solid var(--color-secondary)',
              boxShadow: '0 8px 25px rgba(252, 177, 0, 0.3)',
              transition: 'all 0.6s ease'
            }}></div>

            {/* Rating Stars */}
            <div className="animate-on-scroll bounce-in delay-5" style={{ 
              marginBottom: isMobile ? 'var(--space-3)' : 'var(--space-4)'
            }}>
              {[...Array(5)].map((_, index) => (
                <span key={index} style={{
                  color: index < strings.testimonials.reviews[currentReview].rating 
                    ? 'var(--color-secondary)' 
                    : 'rgba(255, 255, 255, 0.3)',
                  fontSize: isMobile ? 'var(--text-lg)' : 'var(--text-xl)',
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
              fontSize: isMobile ? 'var(--text-base)' : 'var(--text-lg)',
              lineHeight: '1.8',
              color: 'var(--color-tertiary)',
              marginBottom: isMobile ? 'var(--space-4)' : 'var(--space-6)',
              fontStyle: 'italic',
              maxWidth: '600px',
              margin: `0 auto ${isMobile ? 'var(--space-4)' : 'var(--space-6)'}`,
              position: 'relative',
              padding: isMobile ? '0 var(--space-4)' : '0'
            }}>
              <span className="animate-on-scroll slide-right delay-7" style={{
                fontSize: isMobile ? '2rem' : '3rem',
                color: 'var(--color-secondary)',
                position: 'absolute',
                top: isMobile ? '-15px' : '-20px',
                left: isMobile ? '-15px' : '-20px',
                lineHeight: '1'
              }}>"</span>
              {isMobile 
                ? strings.testimonials.reviews[currentReview].comment.substring(0, 120) + '...'
                : strings.testimonials.reviews[currentReview].comment
              }
              <span className="animate-on-scroll slide-left delay-8" style={{
                fontSize: isMobile ? '2rem' : '3rem',
                color: 'var(--color-secondary)',
                position: 'absolute',
                bottom: isMobile ? '-30px' : '-40px',
                right: isMobile ? '-15px' : '-20px',
                lineHeight: '1'
              }}>"</span>
            </blockquote>

            {/* Customer Info */}
            <div className="animate-on-scroll fade-in-up delay-9">
              <h4 className="animate-on-scroll slide-up" style={{
                fontSize: isMobile ? 'var(--text-lg)' : 'var(--text-xl)',
                fontWeight: '700',
                color: 'var(--color-secondary)',
                marginBottom: 'var(--space-1)'
              }}>
                {strings.testimonials.reviews[currentReview].name}
              </h4>
              <p className="animate-on-scroll fade-in" style={{
                fontSize: isMobile ? 'var(--text-xs)' : 'var(--text-sm)',
                color: 'rgba(255, 255, 255, 0.8)',
                marginBottom: 'var(--space-1)'
              }}>
                {strings.testimonials.reviews[currentReview].role}
              </p>
              <p className="animate-on-scroll slide-up" style={{
                fontSize: isMobile ? 'var(--text-xs)' : 'var(--text-sm)',
                color: 'var(--color-secondary)',
                margin: 0
              }}>
                📍 {strings.testimonials.reviews[currentReview].location}
              </p>
            </div>
          </div>

          {/* Navigation Arrows - Hidden on mobile */}
          {!isMobile && (
            <>
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
            </>
          )}
        </div>

        {/* Dots Indicator */}
        <div className="animate-on-scroll fade-in-up delay-11" style={{
          display: 'flex',
          justifyContent: 'center',
          gap: isMobile ? 'var(--space-2)' : 'var(--space-2)',
          marginTop: isMobile ? 'var(--space-4)' : 'var(--space-6)'
        }}>
          {strings.testimonials.reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => goToReview(index)}
              style={{
                width: isMobile ? '10px' : '12px',
                height: isMobile ? '10px' : '12px',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                background: index === currentReview 
                  ? 'var(--color-secondary)' 
                  : 'rgba(255, 255, 255, 0.3)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                transform: index === currentReview ? 'scale(1.3)' : 'scale(1)',
                touchAction: 'manipulation',
                minWidth: isMobile ? '32px' : 'auto',
                minHeight: isMobile ? '32px' : 'auto'
              }}
            />
          ))}
        </div>
      </div>

      {/* Overall Rating Summary */}
      <div className="animate-on-scroll scale-in delay-12" style={{
        marginTop: isMobile ? 'var(--space-6)' : 'var(--space-8)',
        textAlign: 'center',
        padding: isMobile ? 'var(--space-3)' : 'var(--space-4)',
        borderRadius: 'var(--radius-lg)',
        border: '3px solid var(--color-secondary)',
        transition: 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        margin: isMobile ? 'var(--space-6) 1rem 0' : 'var(--space-8) 0 0'
      }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          gap: isMobile ? 'var(--space-3)' : 'var(--space-4)',
          flexDirection: isMobile ? 'column' : 'row'
        }}>
          <div className="animate-on-scroll zoom-in delay-13" style={{ 
            textAlign: 'center'
          }}>
            <div style={{ 
              fontSize: isMobile ? 'var(--text-2xl)' : 'var(--text-3xl)', 
              fontWeight: '700', 
              color: 'var(--color-secondary)' 
            }}>
              4.9
            </div>
            <div style={{ 
              fontSize: isMobile ? '11px' : 'var(--text-sm)', 
              color: 'rgba(255, 255, 255, 0.8)' 
            }}>
              Average Rating
            </div>
          </div>
          <div className="animate-on-scroll bounce-in delay-14" style={{ 
            textAlign: 'center'
          }}>
            <div style={{ 
              fontSize: isMobile ? 'var(--text-xl)' : 'var(--text-2xl)', 
              fontWeight: '700', 
              color: 'var(--color-secondary)' 
            }}>
              ★★★★★
            </div>
            <div style={{ 
              fontSize: isMobile ? '11px' : 'var(--text-sm)', 
              color: 'rgba(255, 255, 255, 0.8)' 
            }}>
              Based on 500+ reviews
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
