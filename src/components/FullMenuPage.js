import React, { useEffect, useRef, useState } from 'react';
import { getImageByKey } from '../config/assets';
import strings from '../config/strings.json';

const FullMenuPage = ({ isOpen, onClose }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Prevent body scroll when menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Handle escape key
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="full-menu-overlay"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(8, 20, 79, 0.95)',
        backdropFilter: 'blur(10px)',
        zIndex: 9999,
        overflowY: 'auto',
        animation: 'fadeIn 0.3s ease-out'
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div 
        ref={menuRef}
        className="full-menu-container"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: isMobile ? '2rem 1rem' : '4rem 2rem',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '3rem',
          paddingBottom: '2rem',
          borderBottom: '2px solid rgba(252, 177, 0, 0.3)'
        }}>
          <div>
            <h1 style={{
              fontSize: isMobile ? '2rem' : '3rem',
              fontWeight: '700',
              color: '#FCB100',
              marginBottom: '0.5rem',
              fontFamily: "'Playfair Display', serif"
            }}>
              Our Complete Menu
            </h1>
            <p style={{
              fontSize: isMobile ? '1rem' : '1.2rem',
              color: 'rgba(255, 255, 255, 0.8)',
              margin: 0
            }}>
              Authentic Middle Eastern cuisine crafted with passion
            </p>
          </div>
          
          {/* Close Button */}
          <button
            onClick={onClose}
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: '2px solid rgba(252, 177, 0, 0.5)',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FCB100',
              fontSize: '1.5rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(252, 177, 0, 0.2)';
              e.target.style.borderColor = '#FCB100';
              e.target.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.1)';
              e.target.style.borderColor = 'rgba(252, 177, 0, 0.5)';
              e.target.style.transform = 'scale(1)';
            }}
          >
            ×
          </button>
        </div>

        {/* Category Navigation */}
        <div 
          className="category-nav-scroll"
          style={{
            display: 'flex',
            gap: isMobile ? '0.5rem' : '1rem',
            marginBottom: '3rem',
            overflowX: 'auto',
            padding: '0.5rem 0'
          }}
        >
          {strings.menu.categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              style={{
                background: activeCategory === index 
                  ? 'linear-gradient(135deg, #FCB100, #FFC943)'
                  : 'rgba(255, 255, 255, 0.1)',
                color: activeCategory === index ? '#08144F' : '#FFFFFF',
                border: activeCategory === index 
                  ? 'none'
                  : '1px solid rgba(252, 177, 0, 0.3)',
                padding: isMobile ? '0.75rem 1.5rem' : '1rem 2rem',
                borderRadius: '50px',
                fontSize: isMobile ? '0.9rem' : '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
              onMouseEnter={(e) => {
                if (activeCategory !== index) {
                  e.target.style.background = 'rgba(252, 177, 0, 0.2)';
                  e.target.style.borderColor = '#FCB100';
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== index) {
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.borderColor = 'rgba(252, 177, 0, 0.3)';
                }
              }}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Content */}
        <div style={{ flex: 1 }}>
          {strings.menu.categories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              style={{
                display: activeCategory === categoryIndex ? 'block' : 'none',
                animation: activeCategory === categoryIndex ? 'slideInUp 0.4s ease-out' : 'none'
              }}
            >
              {/* Category Header */}
              <div style={{
                textAlign: 'center',
                marginBottom: '3rem',
                padding: '2rem',
                background: 'rgba(252, 177, 0, 0.1)',
                borderRadius: '20px',
                border: '1px solid rgba(252, 177, 0, 0.2)'
              }}>
                <h2 style={{
                  fontSize: isMobile ? '1.8rem' : '2.5rem',
                  fontWeight: '700',
                  color: '#FCB100',
                  marginBottom: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  fontFamily: "'Playfair Display', serif"
                }}>
                  {category.name}
                </h2>
                <p style={{
                  fontSize: isMobile ? '1rem' : '1.2rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  maxWidth: '600px',
                  margin: '0 auto',
                  lineHeight: '1.6'
                }}>
                  {category.description || `Discover our authentic ${category.name.toLowerCase()} prepared with traditional recipes and the finest ingredients.`}
                </p>
              </div>

              {/* Menu Items Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(400px, 1fr))',
                gap: isMobile ? '1.5rem' : '2rem'
              }}>
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: '20px',
                      padding: '1.5rem',
                      border: '1px solid rgba(252, 177, 0, 0.2)',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = '0 15px 40px rgba(252, 177, 0, 0.2)';
                      e.currentTarget.style.borderColor = '#FCB100';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.borderColor = 'rgba(252, 177, 0, 0.2)';
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      gap: '1.5rem',
                      alignItems: 'flex-start'
                    }}>
                      {/* Item Image */}
                      <div
                        style={{
                          width: isMobile ? '70px' : '80px',
                          height: isMobile ? '70px' : '80px',
                          borderRadius: '15px',
                          backgroundImage: `url(${item.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          flexShrink: 0,
                          border: '3px solid #FCB100',
                          boxShadow: '0 8px 25px rgba(252, 177, 0, 0.3)'
                        }}
                      />

                      {/* Item Content */}
                      <div style={{ flex: 1 }}>
                        <div style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          marginBottom: '0.5rem'
                        }}>
                          <h3 style={{
                            fontSize: isMobile ? '1.1rem' : '1.3rem',
                            fontWeight: '700',
                            color: '#FCB100',
                            margin: 0,
                            lineHeight: '1.3'
                          }}>
                            {item.name}
                          </h3>
                          <span style={{
                            fontSize: isMobile ? '1.2rem' : '1.4rem',
                            fontWeight: '700',
                            color: '#FCB100',
                            flexShrink: 0,
                            marginLeft: '1rem',
                            background: 'rgba(252, 177, 0, 0.1)',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '10px'
                          }}>
                            {item.price}
                          </span>
                        </div>

                        {/* Item Description */}
                        <p style={{
                          fontSize: isMobile ? '0.9rem' : '1rem',
                          color: 'rgba(255, 255, 255, 0.8)',
                          lineHeight: '1.5',
                          margin: '0 0 1rem 0'
                        }}>
                          {item.description}
                        </p>

                        {/* Item Tags/Features */}
                        {item.tags && (
                          <div style={{
                            display: 'flex',
                            gap: '0.5rem',
                            flexWrap: 'wrap'
                          }}>
                            {item.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                style={{
                                  background: 'rgba(252, 177, 0, 0.2)',
                                  color: '#FCB100',
                                  padding: '0.25rem 0.75rem',
                                  borderRadius: '15px',
                                  fontSize: '0.75rem',
                                  fontWeight: '600',
                                  textTransform: 'uppercase',
                                  letterSpacing: '0.5px'
                                }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Actions */}
        <div style={{
          marginTop: '3rem',
          paddingTop: '2rem',
          borderTop: '2px solid rgba(252, 177, 0, 0.3)',
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <button
            style={{
              background: 'linear-gradient(135deg, #FCB100, #FFC943)',
              color: '#08144F',
              border: 'none',
              padding: '1rem 2rem',
              borderRadius: '50px',
              fontSize: '1rem',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              minWidth: '150px'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 10px 30px rgba(252, 177, 0, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
            onClick={() => {
              onClose();
              // Scroll to hero section order button
              setTimeout(() => {
                const orderBtn = document.querySelector('.hero-btn.primary-btn');
                if (orderBtn) {
                  orderBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
              }, 300);
            }}
          >
            Order Now
          </button>

          <button
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              color: '#FCB100',
              border: '2px solid #FCB100',
              padding: '1rem 2rem',
              borderRadius: '50px',
              fontSize: '1rem',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              minWidth: '150px'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(252, 177, 0, 0.1)';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.1)';
              e.target.style.transform = 'translateY(0)';
            }}
            onClick={() => {
              onClose();
              // Scroll to contact section
              setTimeout(() => {
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }, 300);
            }}
          >
            Reserve Table
          </button>
        </div>
      </div>
    </div>
  );
};

export default FullMenuPage;