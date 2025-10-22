import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star, MapPin, TrendingUp } from 'lucide-react';
import strings from '../config/strings.json';

const TestimonialsSection = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sectionRef = useRef(null);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatedElements = entry.target.querySelectorAll('.animate-on-scroll');
            animatedElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('visible');
              }, index * 100);
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

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        nextReview();
      }
    }, isMobile ? 7000 : 5000);

    return () => clearInterval(interval);
  }, [isMobile, isTransitioning, currentReview]);

  const nextReview = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    if (isMobile && navigator.vibrate) {
      navigator.vibrate(30);
    }
    setCurrentReview((prev) =>
      prev === strings.testimonials.reviews.length - 1 ? 0 : prev + 1
    );
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const prevReview = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    if (isMobile && navigator.vibrate) {
      navigator.vibrate(30);
    }
    setCurrentReview((prev) =>
      prev === 0 ? testimonials.reviews.length - 1 : prev - 1
    );
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const goToReview = (index) => {
    if (isTransitioning || index === currentReview) return;
    setIsTransitioning(true);
    if (isMobile && navigator.vibrate) {
      navigator.vibrate(20);
    }
    setCurrentReview(index);
    setTimeout(() => setIsTransitioning(false), 600);
  };

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
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        @keyframes starPulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }

        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
        }

        .animate-on-scroll.visible {
          animation: fadeInUp 0.8s ease forwards;
        }

        .testimonial-transition {
          animation: fadeIn 0.6s ease;
        }

        .star-icon {
          animation: starPulse 2s ease-in-out infinite;
        }

        .floating-quote {
          animation: float 4s ease-in-out infinite;
        }

        .gradient-border {
          position: relative;
        }

        .gradient-border::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 3px;
          background: linear-gradient(135deg, #FCB100, #FFA500, #FFD700);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }

        .shimmer-bg {
          background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(252, 177, 0, 0.1) 50%, 
            transparent 100%);
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }
      `}</style>

      <section
        id="testimonials"
        ref={sectionRef}
        style={{
          position: 'relative',
          color: '#FFFFFF',
          padding: isMobile ? '4rem 1rem' : '6rem 2rem',
          overflow: 'hidden'
        }}
      >
        {/* Decorative Background Elements */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '-10%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(252, 177, 0, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '20%',
          right: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(252, 177, 0, 0.12) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          pointerEvents: 'none'
        }} />

        {/* Floating Quote Decorations */}
        {!isMobile && (
          <>
            <Quote
              size={100}
              className="floating-quote"
              style={{
                position: 'absolute',
                top: '15%',
                left: '8%',
                color: 'rgba(252, 177, 0, 0.1)',
                transform: 'rotate(-15deg)'
              }}
            />
            <Quote
              size={120}
              className="floating-quote"
              style={{
                position: 'absolute',
                bottom: '15%',
                right: '8%',
                color: 'rgba(252, 177, 0, 0.08)',
                transform: 'rotate(15deg)',
                animationDelay: '2s'
              }}
            />
          </>
        )}

        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1
        }}>
          {/* Section Header */}
          <div className="animate-on-scroll" style={{
            textAlign: 'center',
            marginBottom: isMobile ? '3rem' : '4rem'
          }}>
            {/* Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              background: 'rgba(252, 177, 0, 0.15)',
              color: '#FCB100',
              padding: '0.75rem 1.5rem',
              borderRadius: '50px',
              fontSize: '0.85rem',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              marginBottom: '2rem',
              border: '2px solid rgba(252, 177, 0, 0.3)',
              boxShadow: '0 4px 20px rgba(252, 177, 0, 0.2)'
            }}>
              <Star size={18} fill="currentColor" />
              <span>Testimonials</span>
            </div>

            {/* Title */}
            <h2 style={{
              fontSize: isMobile ? '2.5rem' : '4rem',
              fontWeight: '800',
              fontFamily: "'Playfair Display', serif",
              marginBottom: '1rem',
              lineHeight: '1.1',
              letterSpacing: '-1px',
              color: '#FCB100'
            }}>
              What Our <span style={{
                background: 'linear-gradient(135deg, #FCB100, #FFA500)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Customers Say</span>
            </h2>

            <p style={{
              fontSize: isMobile ? '1rem' : '1.2rem',
              color: 'rgba(255, 255, 255, 0.8)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Real experiences from food lovers around the world
            </p>
          </div>

          {/* Testimonial Card */}
          <div
            className="animate-on-scroll gradient-border"
            style={{
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(30px)',
              borderRadius: '30px',
              padding: isMobile ? '3rem 2rem' : '5rem 4rem',
              position: 'relative',
              minHeight: isMobile ? '400px' : '450px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
            }}
            onTouchStart={isMobile ? onTouchStart : undefined}
            onTouchMove={isMobile ? onTouchMove : undefined}
            onTouchEnd={isMobile ? onTouchEnd : undefined}
          >
            {/* Swipe Indicator for Mobile */}
            {isMobile && (
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                fontSize: '0.75rem',
                color: 'rgba(255, 255, 255, 0.5)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontWeight: '500'
              }}>
                <ChevronLeft size={16} />
                Swipe
                <ChevronRight size={16} />
              </div>
            )}

            <div
              key={currentReview}
              className="testimonial-transition"
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
              }}
            >
              {/* Customer Image */}
              <div style={{
                position: 'relative',
                marginBottom: '2rem'
              }}>
                <div style={{
                  width: isMobile ? '100px' : '120px',
                  height: isMobile ? '100px' : '120px',
                  borderRadius: '50%',
                  backgroundImage: `url('${strings.testimonials.reviews[currentReview].image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  border: '4px solid #FCB100',
                  boxShadow: '0 10px 40px rgba(252, 177, 0, 0.4)',
                  position: 'relative',
                  zIndex: 2
                }} />

                {/* Glow Effect */}
                <div style={{
                  position: 'absolute',
                  inset: '-10px',
                  background: 'radial-gradient(circle, rgba(252, 177, 0, 0.3) 0%, transparent 70%)',
                  borderRadius: '50%',
                  zIndex: 1
                }} />
              </div>

              {/* Rating Stars */}
              <div style={{
                display: 'flex',
                gap: '0.5rem',
                marginBottom: '2rem'
              }}>
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={isMobile ? 24 : 28}
                    fill={index < strings.testimonials.reviews[currentReview].rating ? '#FCB100' : 'transparent'}
                    color={index < strings.testimonials.reviews[currentReview].rating ? '#FCB100' : 'rgba(255, 255, 255, 0.3)'}
                    className={index < strings.testimonials.reviews[currentReview].rating ? 'star-icon' : ''}
                    style={{
                      animationDelay: `${index * 0.1}s`
                    }}
                  />
                ))}
              </div>

              {/* Review Text */}
              <blockquote style={{
                fontSize: isMobile ? '1.1rem' : '1.5rem',
                lineHeight: '1.8',
                color: 'rgba(0, 0, 0, 0.95)',
                marginBottom: '2.5rem',
                fontStyle: 'italic',
                maxWidth: '800px',
                position: 'relative',
                fontWeight: '400',
                padding: isMobile ? '0' : '0 2rem'
              }}>
                <Quote
                  size={isMobile ? 30 : 40}
                  style={{
                    position: 'absolute',
                    top: '-20px',
                    left: isMobile ? '-10px' : '0',
                    color: 'rgba(252, 177, 0, 0.4)'
                  }}
                />
                "{isMobile && strings.testimonials.reviews[currentReview].comment.length > 150
                  ? strings.testimonials.reviews[currentReview].comment.substring(0, 150) + '...'
                  : strings.testimonials.reviews[currentReview].comment}"
                <Quote
                  size={isMobile ? 30 : 40}
                  style={{
                    position: 'absolute',
                    bottom: '-20px',
                    right: isMobile ? '-10px' : '0',
                    color: 'rgba(252, 177, 0, 0.4)',
                    transform: 'rotate(180deg)'
                  }}
                />
              </blockquote>

              {/* Customer Info */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <h4 style={{
                  fontSize: isMobile ? '1.3rem' : '1.5rem',
                  fontWeight: '700',
                  color: '#FCB100',
                  margin: 0,
                  fontFamily: "'Playfair Display', serif"
                }}>
                  {strings.testimonials.reviews[currentReview].name}
                </h4>
                <p style={{
                  fontSize: isMobile ? '0.9rem' : '1rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                  margin: 0,
                  fontWeight: '500'
                }}>
                  {strings.testimonials.reviews[currentReview].role}
                </p>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#FCB100',
                  fontSize: isMobile ? '0.85rem' : '0.95rem',
                  fontWeight: '600'
                }}>
                  <MapPin size={16} />
                  {strings.testimonials.reviews[currentReview].location}
                </div>
              </div>
            </div>

            {/* Navigation Arrows - Desktop Only */}
            {!isMobile && (
              <>
                <button
                  onClick={prevReview}
                  disabled={isTransitioning}
                  style={{
                    position: 'absolute',
                    left: '2rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(252, 177, 0, 0.1)',
                    border: '2px solid rgba(252, 177, 0, 0.3)',
                    borderRadius: '50%',
                    width: '60px',
                    height: '60px',
                    color: '#FCB100',
                    cursor: isTransitioning ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    opacity: isTransitioning ? 0.5 : 1,
                    backdropFilter: 'blur(10px)'
                  }}
                  onMouseEnter={(e) => {
                    if (!isTransitioning) {
                      e.currentTarget.style.background = '#FCB100';
                      e.currentTarget.style.color = '#08144F';
                      e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(252, 177, 0, 0.1)';
                    e.currentTarget.style.color = '#FCB100';
                    e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                  }}
                >
                  <ChevronLeft size={28} strokeWidth={2.5} />
                </button>

                <button
                  onClick={nextReview}
                  disabled={isTransitioning}
                  style={{
                    position: 'absolute',
                    right: '2rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(252, 177, 0, 0.1)',
                    border: '2px solid rgba(252, 177, 0, 0.3)',
                    borderRadius: '50%',
                    width: '60px',
                    height: '60px',
                    color: '#FCB100',
                    cursor: isTransitioning ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    opacity: isTransitioning ? 0.5 : 1,
                    backdropFilter: 'blur(10px)'
                  }}
                  onMouseEnter={(e) => {
                    if (!isTransitioning) {
                      e.currentTarget.style.background = '#FCB100';
                      e.currentTarget.style.color = '#08144F';
                      e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(252, 177, 0, 0.1)';
                    e.currentTarget.style.color = '#FCB100';
                    e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                  }}
                >
                  <ChevronRight size={28} strokeWidth={2.5} />
                </button>
              </>
            )}
          </div>

          {/* Dots Indicator */}
          <div className="animate-on-scroll" style={{
            display: 'flex',
            justifyContent: 'center',
            gap: isMobile ? '0.75rem' : '1rem',
            marginTop: '3rem'
          }}>
            {strings.testimonials.reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToReview(index)}
                disabled={isTransitioning}
                style={{
                  width: index === currentReview ? (isMobile ? '40px' : '50px') : (isMobile ? '12px' : '15px'),
                  height: isMobile ? '12px' : '15px',
                  borderRadius: '10px',
                  border: 'none',
                  background: index === currentReview
                    ? 'linear-gradient(135deg, #FCB100, #FFA500)'
                    : 'rgba(255, 255, 255, 0.3)',
                  cursor: isTransitioning ? 'not-allowed' : 'pointer',
                  transition: 'all 0.4s ease',
                  boxShadow: index === currentReview ? '0 0 20px rgba(252, 177, 0, 0.6)' : 'none',
                  minWidth: isMobile ? '40px' : 'auto',
                  minHeight: isMobile ? '40px' : 'auto',
                  opacity: isTransitioning ? 0.5 : 1
                }}
              />
            ))}
          </div>

          {/* Overall Rating Summary */}
          <div className="animate-on-scroll" style={{
            marginTop: isMobile ? '3rem' : '4rem',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            borderRadius: '25px',
            padding: isMobile ? '2rem 1.5rem' : '3rem 2rem',
            border: '2px solid rgba(252, 177, 0, 0.3)',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: isMobile ? '2rem' : '4rem',
              flexWrap: 'wrap'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: isMobile ? '3rem' : '4rem',
                  fontWeight: '800',
                  color: '#FCB100',
                  fontFamily: "'Playfair Display', serif",
                  lineHeight: 1,
                  marginBottom: '0.5rem'
                }}>
                  4.9
                </div>
                <div style={{
                  fontSize: isMobile ? '0.9rem' : '1rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  Average Rating
                </div>
              </div>

              <div style={{
                width: '2px',
                height: '60px',
                background: 'rgba(252, 177, 0, 0.3)',
                display: isMobile ? 'none' : 'block'
              }} />

              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: isMobile ? '2rem' : '2.5rem',
                  color: '#FCB100',
                  marginBottom: '0.5rem',
                  display: 'flex',
                  gap: '0.25rem',
                  justifyContent: 'center'
                }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={isMobile ? 24 : 32} fill="#FCB100" color="#FCB100" />
                  ))}
                </div>
                <div style={{
                  fontSize: isMobile ? '0.9rem' : '1rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  Based on 500+ Reviews
                </div>
              </div>

              <div style={{
                width: '2px',
                height: '60px',
                background: 'rgba(252, 177, 0, 0.3)',
                display: isMobile ? 'none' : 'block'
              }} />

              <div style={{ textAlign: 'center' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  marginBottom: '0.5rem'
                }}>
                  <TrendingUp size={isMobile ? 28 : 36} color="#FCB100" strokeWidth={2.5} />
                  <div style={{
                    fontSize: isMobile ? '2rem' : '2.5rem',
                    fontWeight: '800',
                    color: '#FCB100',
                    fontFamily: "'Playfair Display', serif"
                  }}>
                    98%
                  </div>
                </div>
                <div style={{
                  fontSize: isMobile ? '0.9rem' : '1rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  Satisfaction Rate
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;