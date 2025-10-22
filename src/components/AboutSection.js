import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, Star, Award, Users, TrendingUp, Heart } from 'lucide-react';
import { about } from '../config/assets';

const AboutSection = () => {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

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
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
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

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(5deg);
          }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(252, 177, 0, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(252, 177, 0, 0.6);
          }
        }

        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
        }

        .animate-on-scroll.visible {
          animation: fadeInUp 0.8s ease forwards;
        }

        .shimmer-bg {
          background: linear-gradient(90deg, 
            rgba(252, 177, 0, 0.1) 0%, 
            rgba(252, 177, 0, 0.3) 50%, 
            rgba(252, 177, 0, 0.1) 100%);
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }

        .floating-lamp {
          animation: float 6s ease-in-out infinite;
        }

        .glow-card {
          animation: glow 3s ease-in-out infinite;
        }

        .gradient-text {
          background: linear-gradient(135deg, #FCB100, #FFA500, #FFD700);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(252, 177, 0, 0.1);
        }

        .hover-scale {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hover-scale:hover {
          transform: translateY(-8px) scale(1.02);
        }
      `}</style>

      <section 
        id="about" 
        ref={sectionRef}
        style={{
          position: 'relative',
          color: '#08144F',
          padding: isMobile ? '4rem 1rem' : '6rem 2rem',
          overflow: 'hidden'
        }}
      >
        {/* Decorative Background Elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(252, 177, 0, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 0
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(252, 177, 0, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 0
        }} />

        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1
        }}>
          {/* Header Section */}
          <div style={{
            display: isMobile ? 'block' : 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1.2fr 0.8fr',
            gap: isMobile ? '3rem' : '5rem',
            marginBottom: '5rem',
            alignItems: 'center'
          }}>
            {/* Left Column - Text Content */}
            <div style={{
              textAlign: isMobile ? 'center' : 'left'
            }}>
              {/* Badge */}
              <div className="animate-on-scroll" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                background: 'linear-gradient(135deg, rgba(252, 177, 0, 0.15), rgba(255, 165, 0, 0.15))',
                color: '#FCB100',
                padding: '0.75rem 1.5rem',
                borderRadius: '50px',
                fontSize: '0.85rem',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                marginBottom: '2rem',
                border: '2px solid rgba(252, 177, 0, 0.3)',
                boxShadow: '0 4px 15px rgba(252, 177, 0, 0.2)'
              }}>
                <Star size={18} fill="currentColor" />
                <span>Our Story</span>
              </div>

              {/* Title */}
              <h2 className="animate-on-scroll" style={{
                color: '#08144F',
                fontSize: isMobile ? '2.5rem' : '4rem',
                fontWeight: '800',
                fontFamily: "'Playfair Display', serif",
                lineHeight: '1.1',
                marginBottom: '1.5rem',
                letterSpacing: '-1px'
              }}>
                Authentic Arabian
                <span className="gradient-text" style={{
                  display: 'block',
                  fontSize: '1em'
                }}>
                  Flavors & Magic
                </span>
              </h2>

              {/* Decorative Line */}
              <div className="animate-on-scroll" style={{
                width: '100px',
                height: '4px',
                background: 'linear-gradient(90deg, #FCB100, #FFA500)',
                borderRadius: '2px',
                margin: isMobile ? '1.5rem auto' : '1.5rem 0',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '12px',
                  height: '12px',
                  background: '#FCB100',
                  borderRadius: '50%',
                  boxShadow: '0 0 20px rgba(252, 177, 0, 0.6)'
                }} />
              </div>

              {/* Description */}
              <p className="animate-on-scroll" style={{
                color: 'rgba(8, 20, 79, 0.8)',
                fontSize: isMobile ? '1.05rem' : '1.25rem',
                lineHeight: '1.8',
                fontWeight: '400',
                maxWidth: '600px',
                margin: isMobile ? '0 auto 2rem auto' : '0 0 2rem 0',
                fontFamily: "'Inter', sans-serif"
              }}>
                {isMobile ?
                  "Desert spices, fresh ingredients, and magic in every bite." :
                  "Where Arabian legend meets Kerala flavor. Fresh ingredients, passionate craftsmanship, and magical taste in every bite. Experience the enchantment of authentic Middle Eastern cuisine."
                }
              </p>

              {/* Feature Pills */}
              <div className="animate-on-scroll" style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                justifyContent: isMobile ? 'center' : 'flex-start',
                marginTop: '2rem'
              }}>
                {['100% Halal', 'Fresh Daily', 'Premium Quality'].map((tag, idx) => (
                  <div key={idx} style={{
                    background: 'white',
                    color: '#08144F',
                    padding: '0.6rem 1.2rem',
                    borderRadius: '25px',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    border: '2px solid rgba(252, 177, 0, 0.3)',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
                    transition: 'all 0.3s ease',
                    cursor: 'default'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#FCB100';
                    e.currentTarget.style.color = '#08144F';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'white';
                    e.currentTarget.style.color = '#08144F';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}>
                    {tag}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Lamp Image */}
            <div className="animate-on-scroll floating-lamp" style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative'
            }}>
              <div style={{
                position: 'relative',
                width: isMobile ? '250px' : '400px',
                height: isMobile ? '250px' : '400px',
                background: 'radial-gradient(circle, rgba(252, 177, 0, 0.1) 0%, transparent 70%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img
                  src={about.lamp}
                  alt="Aladdin's Lamp"
                  style={{
                    width: '80%',
                    height: '80%',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 10px 30px rgba(252, 177, 0, 0.4))',
                    position: 'relative',
                    zIndex: 2
                  }}
                />
                {/* Sparkle effects */}
                <Sparkles 
                  size={30}
                  style={{
                    position: 'absolute',
                    top: '15%',
                    right: '20%',
                    color: '#FCB100',
                    opacity: 0.6,
                    animation: 'float 4s ease-in-out infinite'
                  }}
                />
                <Star 
                  size={25}
                  fill="#FCB100"
                  style={{
                    position: 'absolute',
                    bottom: '20%',
                    left: '15%',
                    color: '#FCB100',
                    opacity: 0.5,
                    animation: 'float 5s ease-in-out infinite'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: isMobile ? '1.5rem' : '2.5rem',
            marginBottom: '4rem'
          }}>
            {[
              {
                icon: <Award size={40} strokeWidth={1.5} />,
                title: 'Legendary Taste',
                description: 'Step into a world where every shawarma is more than a meal — it\'s a story. Infused with Arabian magic and tempered with Kerala freshness, each bite delivers layers of spice, aroma, and tradition that linger long after the last bite.'
              },
              {
                icon: <Heart size={40} strokeWidth={1.5} />,
                title: 'Fresh Magic',
                description: 'Our commitment to freshness transforms ordinary ingredients into extraordinary flavors. Handpicked herbs, premium meats, and vibrant vegetables are wrapped in desert spices and cooked to perfection daily.'
              }
            ].map((point, index) => (
              <div 
                key={index} 
                className="animate-on-scroll glass-card hover-scale"
                style={{
                  borderRadius: '25px',
                  padding: isMobile ? '2rem 1.5rem' : '3rem 2.5rem',
                  border: '2px solid rgba(252, 177, 0, 0.2)',
                  textAlign: isMobile ? 'center' : 'left',
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Shimmer effect on hover */}
                <div className="shimmer-bg" style={{
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  opacity: 0,
                  transition: 'opacity 0.3s ease'
                }} />
                
                <div style={{
                  color: '#FCB100',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  justifyContent: isMobile ? 'center' : 'flex-start',
                  position: 'relative',
                  zIndex: 1
                }}>
                  {point.icon}
                </div>
                <h4 style={{
                  color: '#08144F',
                  fontSize: isMobile ? '1.3rem' : '1.6rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  fontFamily: "'Playfair Display', serif",
                  position: 'relative',
                  zIndex: 1
                }}>
                  {point.title}
                </h4>
                <p style={{
                  color: 'rgba(8, 20, 79, 0.75)',
                  fontSize: isMobile ? '0.95rem' : '1.05rem',
                  lineHeight: '1.7',
                  margin: 0,
                  fontFamily: "'Inter', sans-serif",
                  position: 'relative',
                  zIndex: 1
                }}>
                  {point.description}
                </p>
              </div>
            ))}
          </div>

          {/* Statistics Grid */}
          <div className="animate-on-scroll" style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
            gap: isMobile ? '1rem' : '2rem',
            marginBottom: '4rem'
          }}>
            {[
              { icon: <TrendingUp size={24} />, number: '15+', label: 'Years Experience' },
              { icon: <Users size={24} />, number: '50K+', label: 'Happy Customers' },
              { icon: <Award size={24} />, number: '25+', label: 'Menu Items' },
              { icon: <Star size={24} fill="currentColor" />, number: '4.9', label: 'Customer Rating' }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="glow-card hover-scale"
                style={{
                  background: 'linear-gradient(135deg, #FCB100, #FFA500)',
                  color: '#08144F',
                  borderRadius: '20px',
                  padding: isMobile ? '1.5rem 1rem' : '2rem 1.5rem',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  marginBottom: '1rem',
                  display: 'flex',
                  justifyContent: 'center',
                  opacity: 0.8
                }}>
                  {stat.icon}
                </div>
                <div style={{
                  fontSize: isMobile ? '2rem' : '2.5rem',
                  fontWeight: '800',
                  fontFamily: "'Playfair Display', serif",
                  marginBottom: '0.5rem',
                  lineHeight: 1
                }}>
                  {stat.number}
                </div>
                <div style={{
                  fontSize: isMobile ? '0.75rem' : '0.85rem',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  opacity: 0.9,
                  fontFamily: "'Inter', sans-serif"
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="animate-on-scroll" style={{
            textAlign: 'center'
          }}>
            <button 
              style={{
                background: 'transparent',
                color: '#FCB100',
                border: '3px solid #FCB100',
                borderRadius: '50px',
                padding: isMobile ? '1rem 2rem' : '1.2rem 3rem',
                fontSize: isMobile ? '1rem' : '1.1rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                fontFamily: "'Inter', sans-serif",
                position: 'relative',
                overflow: 'hidden',
                zIndex: 1
              }}
              onClick={() => {
                const menuSection = document.querySelector('#menu');
                if (menuSection) {
                  menuSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#FCB100';
                e.currentTarget.style.color = '#08144F';
                e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(252, 177, 0, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#FCB100';
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Explore Our Menu
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;