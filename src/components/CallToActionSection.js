import React, { useRef, useEffect } from 'react';
import { hero } from '../config/assets';

const CallToActionSection = () => {
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
    <section className="section section-cta section-dark" ref={sectionRef}
          style={{
            backgroundImage: `url(${hero.background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed'
          }}>
      {/* Primary Color Overlay */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(8, 20, 79, 0.8)',
          zIndex: 1
        }}
      ></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="grid-center">
          <div className="animate-on-scroll fade-in" style={{ textAlign: 'center' }}>
            <h2 className="hero-title" style={{
              fontSize: 'var(--text-4xl)',
              marginBottom: 'var(--space-8)',
              background: 'linear-gradient(135deg, var(--color-secondary), var(--color-secondary-light))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'var(--color-secondary)',
              backgroundClip: 'text',
              maxWidth: '800px',
              margin: '0 auto var(--space-8)'
            }}>
              We Make Delicious &amp; Nutritious Food
            </h2>
            
            <p className="hero-subtitle" style={{
              fontSize: 'var(--text-xl)',
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: 'var(--space-10)',
              maxWidth: '600px',
              margin: '0 auto var(--space-10)'
            }}>
              Experience authentic Middle Eastern flavors prepared with the finest ingredients and time-honored recipes.
            </p>

            <div style={{ display: 'flex', gap: 'var(--space-6)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#contact" className="btn btn-secondary btn-lg">
                <span>Book A Table Now</span>
              </a>
              <a href="#menu" className="btn btn-secondary btn-lg">
                <span>View Our Menu</span>
              </a>
            </div>

            {/* Features */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 'var(--space-8)',
              marginTop: 'var(--space-16)',
              maxWidth: '800px',
              margin: 'var(--space-16) auto 0'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: 'var(--text-3xl)',
                  marginBottom: 'var(--space-3)',
                  color: 'var(--color-secondary)'
                }}>
                  🥗
                </div>
                <h4 style={{
                  fontSize: 'var(--text-lg)',
                  fontWeight: '600',
                  marginBottom: 'var(--space-2)',
                  color: 'var(--color-secondary)'
                }}>
                  Fresh & Healthy
                </h4>
                <p style={{
                  fontSize: 'var(--text-base)',
                  color: 'rgba(255, 255, 255, 0.8)',
                  margin: 0
                }}>
                  Prepared daily with fresh ingredients
                </p>
              </div>

              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: 'var(--text-3xl)',
                  marginBottom: 'var(--space-3)',
                  color: 'var(--color-secondary)'
                }}>
                  ⚡
                </div>
                <h4 style={{
                  fontSize: 'var(--text-lg)',
                  fontWeight: '600',
                  marginBottom: 'var(--space-2)',
                  color: 'var(--color-secondary)'
                }}>
                  Fast Service
                </h4>
                <p style={{
                  fontSize: 'var(--text-base)',
                  color: 'rgba(255, 255, 255, 0.8)',
                  margin: 0
                }}>
                  Quick preparation without compromising quality
                </p>
              </div>

              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: 'var(--text-3xl)',
                  marginBottom: 'var(--space-3)',
                  color: 'var(--color-secondary)'
                }}>
                  🏺
                </div>
                <h4 style={{
                  fontSize: 'var(--text-lg)',
                  fontWeight: '600',
                  marginBottom: 'var(--space-2)',
                  color: 'var(--color-secondary)'
                }}>
                  Authentic Taste
                </h4>
                <p style={{
                  fontSize: 'var(--text-base)',
                  color: 'rgba(255, 255, 255, 0.8)',
                  margin: 0
                }}>
                  Traditional recipes from the Middle East
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="floating-particles" style={{ position: 'relative', zIndex: 2 }}>
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${10 + i * 12}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${4 + i * 0.3}s`
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default CallToActionSection;