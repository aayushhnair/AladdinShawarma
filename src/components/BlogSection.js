import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Poster1 from '../assets/Poster (1).jpg';
import Poster2 from '../assets/Poster (2).jpg';
import Poster3 from '../assets/Poster (3).jpg';
import Poster4 from '../assets/Poster (4).jpg';
import Poster5 from '../assets/Poster (5).jpg';
import Poster6 from '../assets/Poster (6).jpg';
import Poster7 from '../assets/Poster (7).jpg';
import Poster8 from '../assets/Poster (8).jpg';
import Poster9 from '../assets/Poster (9).jpg';

const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedPoster, setSelectedPoster] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const posters = [
    { id: 1, src: Poster1, title: 'Authentic Shawarma Experience', category: 'Signature Dishes' },
    { id: 2, src: Poster2, title: 'Fresh Daily Ingredients', category: 'Quality' },
    { id: 3, src: Poster3, title: 'Traditional Middle Eastern Cuisine', category: 'Heritage' },
    { id: 4, src: Poster4, title: 'Crafted with Passion', category: 'Artisan' },
    { id: 5, src: Poster5, title: 'Family Recipes', category: 'Tradition' },
    { id: 6, src: Poster6, title: 'Premium Platters', category: 'Special Offers' },
    { id: 7, src: Poster7, title: 'Exotic Flavors', category: 'Menu Highlights' },
    { id: 8, src: Poster8, title: 'Fresh Juices & Beverages', category: 'Drinks' },
    { id: 9, src: Poster9, title: 'Desserts & Sweets', category: 'Sweet Treats' },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % posters.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + posters.length) % posters.length);
  };

  const getPrevIndex = () => (currentIndex - 1 + posters.length) % posters.length;
  const getNextIndex = () => (currentIndex + 1) % posters.length;

  return (
    <div style={{ 
      position: 'relative',
      color: '#08144F',
      padding: isMobile ? '3rem 0' : '5rem 0',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden'
    }}>
      {/* Background Decorative Elements */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at 20% 50%, rgba(252, 177, 0, 0.1) 0%, transparent 50%)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at 80% 50%, rgba(252, 177, 0, 0.08) 0%, transparent 50%)',
        pointerEvents: 'none'
      }} />

      {/* Corner Ornaments */}
      {!isMobile && (
        <>
          <div style={{
            position: 'absolute',
            top: '2rem',
            left: '2rem',
            width: '100px',
            height: '100px',
            border: '3px solid rgba(252, 177, 0, 0.3)',
            borderRight: 'none',
            borderBottom: 'none',
            zIndex: 1
          }} />
          <div style={{
            position: 'absolute',
            top: '2rem',
            right: '2rem',
            width: '100px',
            height: '100px',
            border: '3px solid rgba(252, 177, 0, 0.3)',
            borderLeft: 'none',
            borderBottom: 'none',
            zIndex: 1
          }} />
        </>
      )}

      <div style={{ 
        width: '100%',
        position: 'relative',
        zIndex: 2 ,
         maxWidth: '1400px',
          margin: '0 auto'
      }}>
        {/* Section Header */}
        <div style={{ 
          marginBottom: isMobile ? '2rem' : '4rem',
          textAlign: 'center',
          padding: '0 1rem'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '1.5rem'
          }}>
            <div style={{
              width: isMobile ? '60px' : '120px',
              height: '2px',
              background: 'linear-gradient(to right, transparent, rgba(252, 177, 0, 0.6))'
            }} />
            <div style={{
              width: '12px',
              height: '12px',
              background: '#FCB100',
              transform: 'rotate(45deg)',
              boxShadow: '0 0 20px rgba(252, 177, 0, 0.5)'
            }} />
            <div style={{
              width: isMobile ? '60px' : '120px',
              height: '2px',
              background: 'linear-gradient(to left, transparent, rgba(252, 177, 0, 0.6))'
            }} />
          </div>

          <div style={{ 
            background: 'rgba(252, 177, 0, 0.2)', 
            color: '#FCB100',
            border: '1px solid rgba(252, 177, 0, 0.4)',
            display: 'inline-block',
            padding: '0.5rem 1.5rem',
            borderRadius: '25px',
            fontSize: '0.85rem',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            marginBottom: '1rem',
            backdropFilter: 'blur(10px)'
          }}>
            ✦ VISUAL SHOWCASE ✦
          </div>

          <h2 style={{ 
            color: '#FCB100',
            fontSize: isMobile ? '2rem' : '3rem',
            fontWeight: '700',
            marginBottom: '1rem',
            fontFamily: "'Playfair Display', serif",
            textShadow: '0 2px 20px rgba(252, 177, 0, 0.3)',
            letterSpacing: '2px'
          }}>
            Our Gallery
          </h2>

          <p style={{
            color: 'rgba(0, 0, 0, 0.89)',
            fontSize: isMobile ? '1rem' : '1.1rem',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6',
            fontWeight: '300'
          }}>
            Discover the artistry behind our authentic Middle Eastern cuisine
          </p>
        </div>

        {/* Horizontal Gallery */}
        <div style={{
          position: 'relative',
          height: isMobile ? '500px' : '600px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          perspective: '2000px'
        }}>
          {/* Previous Image (Left) */}
          <div style={{
            position: 'absolute',
            left: isMobile ? '5%' : '15%',
            width: isMobile ? '120px' : '280px',
            height: isMobile ? '180px' : '420px',
            transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: 'scale(0.75) translateX(-20px)',
            opacity: 0.4,
            filter: 'blur(2px)',
            zIndex: 1,
            cursor: 'pointer'
          }}
          onClick={prevSlide}>
            <div style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              borderRadius: '15px',
              overflow: 'hidden',
              border: '2px solid rgba(252, 177, 0, 0.3)',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)'
            }}>
              <img 
                src={posters[getPrevIndex()].src}
                alt={posters[getPrevIndex()].title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>

          {/* Current Image (Center) */}
          <div style={{
            position: 'relative',
            width: isMobile ? '250px' : '400px',
            height: isMobile ? '375px' : '600px',
            transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: 'scale(1)',
            opacity: 1,
            zIndex: 3,
            cursor: 'pointer'
          }}
          onClick={() => setSelectedPoster(posters[currentIndex])}>
            <div style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              borderRadius: '20px',
              overflow: 'hidden',
              border: '3px solid rgba(252, 177, 0, 0.8)',
              boxShadow: '0 30px 80px rgba(252, 177, 0, 0.4), 0 0 60px rgba(252, 177, 0, 0.2)',
              background: 'rgba(8, 20, 79, 0.3)',
              backdropFilter: 'blur(10px)'
            }}>
              {/* Corner Decorations */}
              <div style={{
                position: 'absolute',
                top: '15px',
                left: '15px',
                width: '40px',
                height: '40px',
                border: '3px solid rgba(252, 177, 0, 0.6)',
                borderRight: 'none',
                borderBottom: 'none',
                zIndex: 2
              }} />
              <div style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                width: '40px',
                height: '40px',
                border: '3px solid rgba(252, 177, 0, 0.6)',
                borderLeft: 'none',
                borderBottom: 'none',
                zIndex: 2
              }} />

              {/* Category Badge */}
              <div style={{
                position: 'absolute',
                top: '25px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'rgba(252, 177, 0, 0.95)',
                color: '#08144F',
                padding: '0.5rem 1.2rem',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: '700',
                zIndex: 3,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)'
              }}>
                {posters[currentIndex].category}
              </div>

              <img 
                src={posters[currentIndex].src}
                alt={posters[currentIndex].title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              
              {/* Gradient Overlay */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '50%',
                background: 'linear-gradient(to top, rgba(8, 20, 79, 0.95), transparent)',
                display: 'flex',
                alignItems: 'flex-end',
                padding: isMobile ? '1.5rem' : '2rem',
                zIndex: 1
              }}>
                <h3 style={{
                  color: '#FFFFFF',
                  fontSize: isMobile ? '1.1rem' : '1.5rem',
                  fontWeight: '600',
                  margin: 0,
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)',
                  lineHeight: '1.3'
                }}>
                  {posters[currentIndex].title}
                </h3>
              </div>
            </div>
          </div>

          {/* Next Image (Right) */}
          <div style={{
            position: 'absolute',
            right: isMobile ? '5%' : '15%',
            width: isMobile ? '120px' : '280px',
            height: isMobile ? '180px' : '420px',
            transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: 'scale(0.75) translateX(20px)',
            opacity: 0.4,
            filter: 'blur(2px)',
            zIndex: 1,
            cursor: 'pointer'
          }}
          onClick={nextSlide}>
            <div style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              borderRadius: '15px',
              overflow: 'hidden',
              border: '2px solid rgba(252, 177, 0, 0.3)',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)'
            }}>
              <img 
                src={posters[getNextIndex()].src}
                alt={posters[getNextIndex()].title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            style={{
              position: 'absolute',
              left: isMobile ? '1rem' : '5%',
              width: isMobile ? '45px' : '60px',
              height: isMobile ? '45px' : '60px',
              background: 'rgba(252, 177, 0, 0.9)',
              border: '2px solid rgba(252, 177, 0, 0.5)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 5,
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 20px rgba(252, 177, 0, 0.4)',
              backdropFilter: 'blur(10px)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.15)';
              e.currentTarget.style.background = '#FCB100';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(252, 177, 0, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.background = 'rgba(252, 177, 0, 0.9)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(252, 177, 0, 0.4)';
            }}
          >
            <ChevronLeft size={isMobile ? 28 : 36} color="#08144F" strokeWidth={3} />
          </button>

          <button
            onClick={nextSlide}
            style={{
              position: 'absolute',
              right: isMobile ? '1rem' : '5%',
              width: isMobile ? '45px' : '60px',
              height: isMobile ? '45px' : '60px',
              background: 'rgba(252, 177, 0, 0.9)',
              border: '2px solid rgba(252, 177, 0, 0.5)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 5,
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 20px rgba(252, 177, 0, 0.4)',
              backdropFilter: 'blur(10px)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.15)';
              e.currentTarget.style.background = '#FCB100';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(252, 177, 0, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.background = 'rgba(252, 177, 0, 0.9)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(252, 177, 0, 0.4)';
            }}
          >
            <ChevronRight size={isMobile ? 28 : 36} color="#08144F" strokeWidth={3} />
          </button>
        </div>

        {/* Dots Indicator */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.8rem',
          marginTop: isMobile ? '2rem' : '3rem'
        }}>
          {posters.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              style={{
                width: currentIndex === index ? '40px' : '12px',
                height: '12px',
                borderRadius: '6px',
                background: currentIndex === index 
                  ? 'linear-gradient(135deg, #FCB100, #FFA500)' 
                  : 'rgba(252, 177, 0, 0.3)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: currentIndex === index 
                  ? '0 0 20px rgba(252, 177, 0, 0.6)' 
                  : 'none'
              }}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPoster && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.95)',
            backdropFilter: 'blur(10px)',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: isMobile ? '1rem' : '2rem',
            animation: 'fadeIn 0.3s ease'
          }}
          onClick={() => setSelectedPoster(null)}
        >
          <div style={{
            position: 'relative',
            maxWidth: '900px',
            maxHeight: '90vh',
            width: '100%'
          }}
          onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPoster(null)}
              style={{
                position: 'absolute',
                top: '-50px',
                right: '0',
                background: 'rgba(252, 177, 0, 0.9)',
                border: 'none',
                color: '#08144F',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                fontSize: '1.5rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '700',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(252, 177, 0, 0.4)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1) rotate(90deg)';
                e.currentTarget.style.background = '#FCB100';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                e.currentTarget.style.background = 'rgba(252, 177, 0, 0.9)';
              }}
            >
              ×
            </button>

            <img 
              src={selectedPoster.src}
              alt={selectedPoster.title}
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '90vh',
                objectFit: 'contain',
                borderRadius: '10px',
                boxShadow: '0 20px 80px rgba(252, 177, 0, 0.3)',
                border: '3px solid rgba(252, 177, 0, 0.5)'
              }}
            />

            <div style={{
              position: 'absolute',
              bottom: '0',
              left: '0',
              right: '0',
              background: 'linear-gradient(to top, rgba(8, 20, 79, 0.95), transparent)',
              padding: '2rem',
              borderRadius: '0 0 10px 10px'
            }}>
              <div style={{
                background: 'rgba(252, 177, 0, 0.9)',
                color: '#08144F',
                display: 'inline-block',
                padding: '0.3rem 1rem',
                borderRadius: '15px',
                fontSize: '0.75rem',
                fontWeight: '700',
                marginBottom: '0.5rem',
                textTransform: 'uppercase'
              }}>
                {selectedPoster.category}
              </div>
              <h3 style={{
                color: '#FFFFFF',
                fontSize: isMobile ? '1.3rem' : '1.8rem',
                margin: 0,
                fontWeight: '700',
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)'
              }}>
                {selectedPoster.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GallerySection;