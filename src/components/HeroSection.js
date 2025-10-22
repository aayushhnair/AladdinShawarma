import React, { useEffect, useRef, useState } from 'react';
import { ShoppingBag, Calendar, ArrowDown, Sparkles, Star } from 'lucide-react';
import { hero, logo } from '../config/assets';

const HeroSection = () => {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Import assets from config (you'll need to import these at the top of your actual file)
  // import { logo, hero } from '../config/assets';
  
  // For demo purposes - replace these with your actual imports


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const heroElements = entry.target.querySelectorAll('.animate-on-scroll');
            heroElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('visible');
              }, index * 100);
            });
          }
        });
      },
      { 
        threshold: isMobile ? 0.1 : 0.2,
        rootMargin: '0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isMobile]);

  const handleOrderClick = () => {
    if (isMobile && navigator.vibrate) {
      navigator.vibrate(50);
    }
    const menuSection = document.querySelector('#menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleReservationClick = () => {
    if (isMobile && navigator.vibrate) {
      navigator.vibrate(50);
    }
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
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
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes scrollBounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(10px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }

        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-on-scroll {
          opacity: 0;
          transform: translateY(40px);
        }

        .animate-on-scroll.visible {
          animation: fadeInUp 0.8s ease forwards;
        }

        .hero-logo-entrance {
          animation: fadeInScale 1s ease 0.2s forwards;
          opacity: 0;
        }

        .hero-text-entrance {
          animation: fadeInUp 1s ease 0.4s forwards;
          opacity: 0;
        }

        .floating-element {
          animation: float 6s ease-in-out infinite;
        }

        .shimmer-text {
          animation: shimmer 3s ease-in-out infinite;
        }

        .gradient-text {
          background: linear-gradient(135deg, #FCB100, #FFA500, #FFD700);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 4s ease infinite;
        }

        .glass-effect {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .hover-lift {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hover-lift:hover {
          transform: translateY(-8px);
        }

        .btn-primary {
          position: relative;
          overflow: hidden;
        }

        .btn-primary::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .btn-primary:hover::before {
          width: 300px;
          height: 300px;
        }

        .ornamental-line {
          position: relative;
        }

        .ornamental-line::before,
        .ornamental-line::after {
          content: '';
          position: absolute;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(252, 177, 0, 0.5), transparent);
        }

        .ornamental-line::before {
          left: -100px;
          right: 50%;
          top: 50%;
        }

        .ornamental-line::after {
          right: -100px;
          left: 50%;
          top: 50%;
        }
      `}</style>

      <section 
        ref={sectionRef}
        id="home"
        style={{
          position: 'relative',
          overflow: 'hidden',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000000'
        }}
      >
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={hero.image}
          onLoadedData={handleVideoLoad}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            minWidth: '100%',
            minHeight: '100%',
            width: 'auto',
            height: 'auto',
            transform: `translate(-50%, -50%) scale(${1 + scrollY * 0.0002})`,
            zIndex: 0,
            objectFit: 'cover',
            transition: 'transform 0.1s ease',
            opacity: 1,
            filter: 'blur(4px)',
            
          }}
        >
          <source src={hero.backgroundvideo} type="video/mp4" />
        </video>
        
        {/* Fallback Image - Always visible as backup */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${hero.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0,
            opacity: 0.3,
            transition: 'opacity 0.5s ease'
          }}
        />
        
        {/* Sophisticated Gradient Overlay */}
        {/* <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(ellipse at center, rgba(8, 20, 79, 0.3) 0%, rgba(8, 20, 79, 0.7) 100%)',
            zIndex: 1
          }}
        /> */}

        {/* Premium Vignette Effect */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.6) 100%)',
            zIndex: 2
          }}
        />

        {/* Floating Decorative Elements */}
        {!isMobile && (
          <>
            <div className="floating-element" style={{
              position: 'absolute',
              top: '15%',
              right: '10%',
              width: '150px',
              height: '150px',
              border: '2px solid rgba(252, 177, 0, 0.2)',
              borderRadius: '50%',
              zIndex: 3,
              animationDelay: '0s'
            }} />
            <div className="floating-element" style={{
              position: 'absolute',
              bottom: '20%',
              left: '8%',
              width: '100px',
              height: '100px',
              border: '2px solid rgba(252, 177, 0, 0.15)',
              borderRadius: '50%',
              zIndex: 3,
              animationDelay: '2s'
            }} />
            <Star
              size={40}
              className="floating-element shimmer-text"
              style={{
                position: 'absolute',
                top: '25%',
                left: '15%',
                color: 'rgba(252, 177, 0, 0.3)',
                zIndex: 3,
                animationDelay: '1s'
              }}
            />
            <Sparkles
              size={50}
              className="floating-element shimmer-text"
              style={{
                position: 'absolute',
                bottom: '30%',
                right: '15%',
                color: 'rgba(252, 177, 0, 0.25)',
                zIndex: 3,
                animationDelay: '3s'
              }}
            />
          </>
        )}

        {/* Main Content Container */}
        <div style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: isMobile ? '2rem' : '5rem',
          maxWidth: '1400px',
          margin: '0 auto',
          padding: isMobile ? '2rem 1.5rem' : '4rem 2rem',
          flexDirection: isMobile ? 'column' : 'row',
          width: '100%'
        }}>
          {/* Logo Section */}
          <div className="hero-logo-entrance hover-lift" style={{
            flex: isMobile ? 'none' : '0 0 auto',
            padding: isMobile ? '2rem' : '3rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div style={{
              position: 'relative',
              width: isMobile ? '180px' : '350px',
              borderRadius: '20px',
              overflow: 'hidden',
            }}>
              <img 
                src={logo.main} 
                alt={logo.alt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  transition: 'transform 0.5s ease'
                }}
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="hero-text-entrance" style={{
            flex: isMobile ? 'none' : '1',
            textAlign: isMobile ? 'center' : 'left',
            display: 'flex',
            flexDirection: 'column',
            alignItems: isMobile ? 'center' : 'flex-start',
            gap: '1.5rem',
            maxWidth: isMobile ? '100%' : '700px'
          }}>
            {/* Premium Badge */}
            {/* <div className="animate-on-scroll glass-effect" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.75rem 1.5rem',
              borderRadius: '50px',
              fontSize: '0.85rem',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              color: '#FCB100',
              border: '1px solid rgba(252, 177, 0, 0.3)',
              boxShadow: '0 4px 20px rgba(252, 177, 0, 0.2)'
            }}>
              <Sparkles size={16} />
              <span>Authentic Arabian Cuisine</span>
            </div> */}

            {/* Main Title */}
            <h1 className="animate-on-scroll" style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: isMobile ? '2.5rem' : '5rem',
              fontWeight: '800',
              lineHeight: '1.1',
              color: '#FFFFFF',
              margin: 0,
              textShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
              letterSpacing: '-1px'
            }}>
              {/* <span className="gradient-text" style={{
                display: 'block',
                fontSize: isMobile ? '3rem' : '5.5rem',
                marginBottom: '0.5rem'
              }}>
                Aladdin
              </span> */}
              <span style={{
                display: 'block',
                fontSize: '0.4em',
                fontWeight: '400',
                fontFamily: "'Inter', sans-serif",
                color: 'rgba(255, 255, 255, 0.9)',
                letterSpacing: '3px',
                textTransform: 'uppercase'
              }}>
                The Legend on a Plate
              </span>
            </h1>

            {/* Decorative Line */}
            <div className="ornamental-line animate-on-scroll" style={{
              width: isMobile ? '80px' : '120px',
              height: '3px',
              background: 'linear-gradient(90deg, #FCB100, #FFA500)',
              borderRadius: '2px',
              position: 'relative',
              margin: '0.5rem 0'
            }} />

            {/* Tagline */}
            <p className="animate-on-scroll" style={{
              fontSize: isMobile ? '1rem' : '1.2rem',
              fontWeight: '400',
              color: 'rgba(255, 255, 255, 0.95)',
              lineHeight: '1.8',
              maxWidth: '650px',
              margin: 0,
              fontFamily: "'Inter', sans-serif",
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
            }}>
              {isMobile ? 
                "Arabian spice. Nadan soul. Pure taste." :
                "Born from Arabian nights and Kochi's streetlight hustle — each shawarma is a spell of spice and smoke. Crafted with ishtam, served with garvam, seasoned by the genie's touch."
              }
            </p>

            {/* Stats Row */}
            {/* {!isMobile && (
              <div className="animate-on-scroll glass-effect" style={{
                display: 'flex',
                gap: '2rem',
                padding: '1.5rem 2rem',
                borderRadius: '20px',
                marginTop: '1rem'
              }}>
                {[
                  { number: '10+', label: 'Years Experience' },
                  { number: '50k+', label: 'Happy Customers' },
                  { number: '4.9', label: 'Rating' }
                ].map((stat, idx) => (
                  <div key={idx} style={{ textAlign: 'center' }}>
                    <div style={{
                      fontSize: '2rem',
                      fontWeight: '700',
                      color: '#FCB100',
                      fontFamily: "'Playfair Display', serif",
                      marginBottom: '0.25rem'
                    }}>
                      {stat.number}
                    </div>
                    <div style={{
                      fontSize: '0.75rem',
                      color: 'rgba(255, 255, 255, 0.7)',
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )} */}

            {/* Action Buttons */}
            <div className="animate-on-scroll" style={{
              display: 'flex',
              gap: '1rem',
              marginTop: '1rem',
              flexWrap: 'wrap',
              justifyContent: isMobile ? 'center' : 'flex-start'
            }}>
              <button 
                className="btn-primary hover-lift"
                onClick={handleOrderClick}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  background: 'linear-gradient(135deg, #FCB100, #FFA500)',
                  color: '#08144F',
                  border: 'none',
                  borderRadius: '50px',
                  padding: '1.2rem 2.5rem',
                  fontSize: '1rem',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  cursor: 'pointer',
                  boxShadow: '0 10px 40px rgba(252, 177, 0, 0.4)',
                  minWidth: '200px',
                  justifyContent: 'center',
                  fontFamily: "'Inter', sans-serif"
                }}
              >
                <ShoppingBag size={20} />
                <span style={{ position: 'relative', zIndex: 1 }}>Order Now</span>
              </button>
              
              <button 
                className="glass-effect hover-lift"
                onClick={handleReservationClick}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  background: 'transparent',
                  color: '#FFFFFF',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '50px',
                  padding: '1.2rem 2.5rem',
                  fontSize: '1rem',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  cursor: 'pointer',
                  minWidth: '200px',
                  justifyContent: 'center',
                  fontFamily: "'Inter', sans-serif",
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#FCB100';
                  e.currentTarget.style.color = '#FCB100';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
              >
                <Calendar size={20} />
                Reserve Table
              </button>
            </div>
          </div>
        </div>

        {/* Elegant Scroll Indicator */}
        {!isMobile && (
          <div style={{
            position: 'absolute',
            bottom: '3rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
            zIndex: 10,
            animation: 'scrollBounce 2s ease-in-out infinite'
          }}>
            <div style={{
              fontSize: '0.7rem',
              fontWeight: '600',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: 'rgba(255, 255, 255, 0.6)'
            }}>
              Discover More
            </div>
            <div className="glass-effect" style={{
              width: '40px',
              height: '60px',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              padding: '8px',
              border: '2px solid rgba(252, 177, 0, 0.3)'
            }}>
              <div style={{
                width: '4px',
                height: '12px',
                background: '#FCB100',
                borderRadius: '2px',
                animation: 'pulse 2s ease-in-out infinite'
              }} />
            </div>
            <ArrowDown size={20} color="rgba(252, 177, 0, 0.6)" />
          </div>
        )}
      </section>
    </>
  );
};

export default HeroSection;