import React, { useEffect, useRef } from 'react';
import { getImageByKey } from '../config/assets';
import strings from '../config/strings.json';

const MenuSection = () => {
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
    <div className="section-column" id="menu" ref={sectionRef} style={{ color: 'var(--color-tertiary)' }}>
      {/* Section Header */}
      <div className="section-header animate-on-scroll fade-in" style={{ marginBottom: 'var(--space-8)' }}>
        <div className="section-badge">{strings.menu.subtitle}</div>
        <h2 className="section-title" style={{ color: 'var(--color-secondary)' }}>{strings.menu.title}</h2>
        <p className="section-subtitle" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>{strings.menu.description}</p>
        <div className="section-decoration"></div>
      </div>

      {/* Menu Categories - Compact Version */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
        {strings.menu.categories.slice(0, 2).map((category, categoryIndex) => (
          <div key={categoryIndex} className={`animate-on-scroll slide-up stagger-${categoryIndex + 1}`}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: 'var(--radius-xl)',
              padding: 'var(--space-6)',
              border: '1px solid rgba(252, 177, 0, 0.2)'
            }}>
              {/* Category Header */}
              <div style={{ 
                textAlign: 'center', 
                marginBottom: 'var(--space-6)',
                paddingBottom: 'var(--space-3)',
                borderBottom: '2px solid var(--color-secondary)',
                position: 'relative'
              }}>
                <h3 style={{ 
                  fontSize: 'var(--text-xl)', 
                  fontWeight: '700',
                  color: 'var(--color-secondary)',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  fontFamily: 'var(--font-secondary)'
                }}>
                  {category.name}
                </h3>
              </div>

              {/* Menu Items - Show top 3 items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                {category.items.slice(0, 3).map((item, itemIndex) => (
                  <div key={itemIndex} style={{
                    display: 'flex',
                    gap: 'var(--space-3)',
                    padding: 'var(--space-3)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: 'var(--radius-lg)',
                    transition: 'var(--transition-normal)',
                    border: '1px solid rgba(252, 177, 0, 0.1)'
                  }}>
                    <div 
                      style={{ 
                        width: '50px',
                        height: '50px',
                        borderRadius: 'var(--radius-full)',
                        backgroundImage: `url(${getImageByKey(item.image)})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        flexShrink: 0,
                        border: '2px solid var(--color-secondary)'
                      }}
                    ></div>
                    <div style={{ flex: 1 }}>
                      <div style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                        marginBottom: 'var(--space-1)'
                      }}>
                        <h4 style={{
                          fontSize: 'var(--text-base)',
                          fontWeight: '600',
                          color: 'var(--color-secondary)',
                          margin: 0
                        }}>
                          {item.name}
                        </h4>
                        <span style={{
                          fontSize: 'var(--text-lg)',
                          fontWeight: '700',
                          color: 'var(--color-secondary)'
                        }}>
                          {item.price}
                        </span>
                      </div>
                      <p style={{
                        fontSize: 'var(--text-sm)',
                        color: 'rgba(255, 255, 255, 0.7)',
                        margin: 0,
                        lineHeight: '1.4'
                      }}>
                        {item.description}
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
      <div className="text-center animate-on-scroll scale-in" style={{ marginTop: 'var(--space-8)' }}>
        <button className="btn btn-secondary" style={{
          padding: 'var(--space-3) var(--space-6)',
          fontSize: 'var(--text-base)',
          fontWeight: '600'
        }}>
          <span>View Full Menu</span>
        </button>
      </div>
    </div>
  );
};

export default MenuSection;