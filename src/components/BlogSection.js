import React, { useRef, useState } from 'react';
import strings from '../config/strings.json';
import { getImageByKey } from '../config/assets';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// Import poster images
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
  const sectionRef = useRef(null);
  const [selectedPoster, setSelectedPoster] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
  // Apply advanced scroll animations to all elements
  useScrollAnimation(sectionRef, 'fade-in', 0.1);

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

  return (
    <div className="gallery-section" id="gallery" ref={sectionRef} style={{ 
      position: 'relative',
      color: '#FFFFFF',
      padding: isMobile ? '3rem 0' : '5rem 0'
    }}>
      {/* Arabic Decorative Corner Ornaments */}
      <div style={{
        position: 'absolute',
        top: '2rem',
        left: '2rem',
        width: '100px',
        height: '100px',
        border: '3px solid rgba(252, 177, 0, 0.3)',
        borderRight: 'none',
        borderBottom: 'none',
        borderRadius: '0',
        zIndex: 1,
        opacity: 0.6
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
        borderRadius: '0',
        zIndex: 1,
        opacity: 0.6
      }} />
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        left: '2rem',
        width: '100px',
        height: '100px',
        border: '3px solid rgba(252, 177, 0, 0.3)',
        borderRight: 'none',
        borderTop: 'none',
        borderRadius: '0',
        zIndex: 1,
        opacity: 0.6
      }} />
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        right: '2rem',
        width: '100px',
        height: '100px',
        border: '3px solid rgba(252, 177, 0, 0.3)',
        borderLeft: 'none',
        borderTop: 'none',
        borderRadius: '0',
        zIndex: 1,
        opacity: 0.6
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header with Arabic Style */}
        <div className="section-header animate-on-scroll dissolve" style={{ 
          marginBottom: isMobile ? '2rem' : '4rem',
          textAlign: 'center'
        }}>
          {/* Decorative Line with Center Ornament */}
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

          <div className="section-badge animate-on-scroll flip-in delay-200" style={{ 
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

          <h2 className="section-title animate-on-scroll zoom-in delay-300" style={{ 
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
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: isMobile ? '1rem' : '1.1rem',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6',
            fontWeight: '300'
          }}>
            Discover the artistry behind our authentic Middle Eastern cuisine
          </p>

          {/* Decorative Bottom Line */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            marginTop: '1.5rem'
          }}>
            <div style={{
              width: '8px',
              height: '8px',
              background: '#FCB100',
              borderRadius: '50%'
            }} />
            <div style={{
              width: '4px',
              height: '4px',
              background: 'rgba(252, 177, 0, 0.6)',
              borderRadius: '50%'
            }} />
            <div style={{
              width: '4px',
              height: '4px',
              background: 'rgba(252, 177, 0, 0.6)',
              borderRadius: '50%'
            }} />
          </div>
        </div>

        {/* Gallery Grid - Masonry Style */}
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: isMobile ? '1.5rem' : '2rem',
          padding: isMobile ? '0 1rem' : '0'
        }}>
          {posters.map((poster, index) => (
            <div 
              key={poster.id} 
              className={`animate-on-scroll ${index % 3 === 0 ? 'slide-up' : index % 3 === 1 ? 'scale-in' : 'fade-in'} delay-${index % 6 + 1}`}
              style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '15px',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                background: 'rgba(8, 20, 79, 0.3)',
                border: '2px solid rgba(252, 177, 0, 0.2)',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
                backdropFilter: 'blur(10px)'
              }}
              onClick={() => setSelectedPoster(poster)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                e.currentTarget.style.borderColor = 'rgba(252, 177, 0, 0.6)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(252, 177, 0, 0.3), 0 0 40px rgba(252, 177, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.borderColor = 'rgba(252, 177, 0, 0.2)';
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.3)';
              }}
            >
              {/* Corner Decorations */}
              <div style={{
                position: 'absolute',
                top: '10px',
                left: '10px',
                width: '30px',
                height: '30px',
                border: '2px solid rgba(252, 177, 0, 0.4)',
                borderRight: 'none',
                borderBottom: 'none',
                zIndex: 2,
                opacity: 0.7
              }} />
              <div style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                width: '30px',
                height: '30px',
                border: '2px solid rgba(252, 177, 0, 0.4)',
                borderLeft: 'none',
                borderBottom: 'none',
                zIndex: 2,
                opacity: 0.7
              }} />

              {/* Category Badge */}
              <div style={{
                position: 'absolute',
                top: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'rgba(252, 177, 0, 0.95)',
                color: '#08144F',
                padding: '0.4rem 1rem',
                borderRadius: '20px',
                fontSize: '0.75rem',
                fontWeight: '700',
                zIndex: 3,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                border: '1px solid rgba(255, 255, 255, 0.3)'
              }}>
                {poster.category}
              </div>

              {/* Poster Image */}
              <div style={{
                position: 'relative',
                paddingBottom: '140%',
                overflow: 'hidden'
              }}>
                <img 
                  src={poster.src}
                  alt={poster.title}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                  }}
                />
                
                {/* Gradient Overlay */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '60%',
                  background: 'linear-gradient(to top, rgba(8, 20, 79, 0.95), transparent)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '1.5rem',
                  zIndex: 1
                }}>
                  <h3 style={{
                    color: '#FFFFFF',
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    margin: 0,
                    textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
                    lineHeight: '1.3'
                  }}>
                    {poster.title}
                  </h3>
                </div>
              </div>

              {/* Hover Effect - View Details */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(252, 177, 0, 0)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0,
                transition: 'all 0.3s ease',
                zIndex: 2
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.background = 'rgba(8, 20, 79, 0.85)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '0';
                e.currentTarget.style.background = 'rgba(252, 177, 0, 0)';
              }}
              >
                <span style={{
                  background: '#FCB100',
                  color: '#08144F',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '25px',
                  fontWeight: '700',
                  fontSize: '0.9rem',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  boxShadow: '0 4px 20px rgba(252, 177, 0, 0.4)'
                }}>
                  View Details
                </span>
              </div>
            </div>
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
            {/* Close Button */}
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
                e.target.style.transform = 'scale(1.1) rotate(90deg)';
                e.target.style.background = '#FCB100';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1) rotate(0deg)';
                e.target.style.background = 'rgba(252, 177, 0, 0.9)';
              }}
            >
              ×
            </button>

            {/* Poster Image */}
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

            {/* Poster Info */}
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
