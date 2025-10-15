import React, { useEffect, useRef, useState } from 'react';
import { getImageByKey } from '../config/assets';
import strings from '../config/strings.json';
import FullMenuPage from './FullMenuPage';

const MenuSection = () => {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isFullMenuOpen, setIsFullMenuOpen] = useState(false);

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
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: isMobile ? 0.05 : 0.1 }
    );

    const animatedElements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    animatedElements?.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('resize', handleResize);
      animatedElements?.forEach((el) => observer.unobserve(el));
    };
  }, [isMobile]);

  return (
    <div className={`section-column ${isMobile ? 'mobile-menu' : ''}`} id="menu" ref={sectionRef} style={{ color: 'var(--color-tertiary)' }}>
      {/* Section Header */}
      <div className={`section-header animate-on-scroll fade-in ${isMobile ? 'mobile-menu-header' : ''}`} style={{ 
        marginBottom: isMobile ? 'var(--space-6)' : 'var(--space-8)',
        textAlign: isMobile ? 'center' : 'left',
        padding: isMobile ? '0 1rem' : '0'
      }}>
        <div className="section-badge">{strings.menu.subtitle}</div>
        <h2 className={`section-title ${isMobile ? 'mobile-menu-title' : ''}`} style={{ color: 'var(--color-secondary)' }}>
          {strings.menu.title}
        </h2>
        <p className={`section-subtitle ${isMobile ? 'mobile-menu-subtitle' : ''}`} style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
          {isMobile ? strings.menu.description.substring(0, 100) + '...' : strings.menu.description}
        </p>
      </div>

      {/* Menu Categories - Responsive Layout */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
        gap: isMobile ? 'var(--space-4)' : 'var(--space-6)',
        padding: isMobile ? '0 1rem' : '0'
      }}>
        {strings.menu.categories.slice(0, 2).map((category, categoryIndex) => (
          <div key={categoryIndex} className={`animate-on-scroll slide-up stagger-${categoryIndex + 1}`}>
            <div className={`menu-category-card ${isMobile ? 'mobile-category' : ''}`} style={{
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: 'var(--radius-xl)',
              padding: isMobile ? 'var(--space-4)' : 'var(--space-6)',
              border: '1px solid rgba(252, 177, 0, 0.2)',
              height: '100%'
            }}>
              {/* Category Header */}
              <div style={{ 
                textAlign: 'center', 
                marginBottom: isMobile ? 'var(--space-4)' : 'var(--space-6)',
                paddingBottom: 'var(--space-3)',
                borderBottom: '2px solid var(--color-secondary)',
                position: 'relative'
              }}>
                <h3 className={`category-title ${isMobile ? 'mobile-category-title' : ''}`} style={{ 
                  fontSize: isMobile ? 'var(--text-lg)' : 'var(--text-xl)', 
                  fontWeight: '700',
                  color: 'var(--color-secondary)',
                  textTransform: 'uppercase',
                  letterSpacing: isMobile ? '1px' : '2px',
                  fontFamily: 'var(--font-secondary)'
                }}>
                  {category.name}
                </h3>
              </div>

              {/* Menu Items - Show top 3 items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? 'var(--space-3)' : 'var(--space-4)' }}>
                {category.items.slice(0, isMobile ? 2 : 3).map((item, itemIndex) => (
                  <div key={itemIndex} className={`menu-item ${isMobile ? 'mobile-menu-item' : ''}`} style={{
                    display: 'flex',
                    gap: isMobile ? 'var(--space-2)' : 'var(--space-3)',
                    padding: isMobile ? 'var(--space-2)' : 'var(--space-3)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: 'var(--radius-lg)',
                    transition: 'var(--transition-normal)',
                    border: '1px solid rgba(252, 177, 0, 0.1)',
                    cursor: 'pointer'
                  }}
                  onTouchStart={() => {
                    // Add touch feedback
                    if (isMobile && navigator.vibrate) {
                      navigator.vibrate(20);
                    }
                  }}
                  >
                    <div 
                      className={`menu-item-image ${isMobile ? 'mobile-item-image' : ''}`}
                      style={{ 
                        width: isMobile ? '40px' : '50px',
                        height: isMobile ? '40px' : '50px',
                        borderRadius: 'var(--radius-full)',
                        backgroundImage: `url(${item.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        flexShrink: 0,
                        border: '2px solid var(--color-secondary)'
                      }}
                    ></div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: isMobile ? 'flex-start' : 'center',
                        marginBottom: 'var(--space-1)',
                        flexDirection: isMobile ? 'column' : 'row',
                        gap: isMobile ? 'var(--space-1)' : '0'
                      }}>
                        <h4 className={`menu-item-name ${isMobile ? 'mobile-item-name' : ''}`} style={{
                          fontSize: isMobile ? 'var(--text-sm)' : 'var(--text-base)',
                          fontWeight: '600',
                          color: 'var(--color-secondary)',
                          margin: 0,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: isMobile ? 'normal' : 'nowrap'
                        }}>
                          {item.name}
                        </h4>
                        <span className={`menu-item-price ${isMobile ? 'mobile-item-price' : ''}`} style={{
                          fontSize: isMobile ? 'var(--text-base)' : 'var(--text-lg)',
                          fontWeight: '700',
                          color: 'var(--color-secondary)',
                          flexShrink: 0
                        }}>
                          {item.price}
                        </span>
                      </div>
                      <p className={`menu-item-description ${isMobile ? 'mobile-item-description' : ''}`} style={{
                        fontSize: isMobile ? '11px' : 'var(--text-sm)',
                        color: 'rgba(255, 255, 255, 0.7)',
                        margin: 0,
                        lineHeight: '1.4',
                        overflow: 'hidden',
                        display: '-webkit-box',
                        WebkitLineClamp: isMobile ? 2 : 3,
                        WebkitBoxOrient: 'vertical'
                      }}>
                        {isMobile ? item.description.substring(0, 60) + '...' : item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View Full Menu Button */}
      <div className={`text-center animate-on-scroll scale-in ${isMobile ? 'mobile-menu-button' : ''}`} style={{ 
        marginTop: isMobile ? 'var(--space-6)' : 'var(--space-8)',
        padding: isMobile ? '0 1rem' : '0'
      }}>
        <button 
          className={`btn btn-secondary ${isMobile ? 'mobile-full-menu-btn' : ''}`} 
          style={{
            padding: isMobile ? 'var(--space-3) var(--space-8)' : 'var(--space-3) var(--space-6)',
            fontSize: 'var(--text-base)',
            fontWeight: '600',
            width: isMobile ? '100%' : 'auto',
            maxWidth: isMobile ? '280px' : 'none',
            touchAction: 'manipulation',
            WebkitTapHighlightColor: 'transparent',
            position: 'relative',
            overflow: 'hidden'
          }}
          onTouchStart={() => {
            if (isMobile && navigator.vibrate) {
              navigator.vibrate(30);
            }
          }}
          onClick={() => {
            setIsFullMenuOpen(true);
            // Add haptic feedback
            if (navigator.vibrate) {
              navigator.vibrate(50);
            }
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            // e.target.style.boxShadow = '0 10px 30px rgba(252, 177, 0, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
          }}
        >
          {/* Button Sparkle Effect */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
            animation: 'sparkleMove 3s ease-in-out infinite'
          }} />
          
          <span style={{ position: 'relative', zIndex: 2 }}>
            🍽️ View Full Menu
          </span>
        </button>
      </div>

      {/* Full Menu Page Modal */}
      <FullMenuPage 
        isOpen={isFullMenuOpen} 
        onClose={() => setIsFullMenuOpen(false)} 
      />
    </div>
  );
};

export default MenuSection;