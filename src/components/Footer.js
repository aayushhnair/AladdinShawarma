import React, { useState, useRef, useEffect } from 'react';
import strings from '../config/strings.json';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { hero } from '../config/assets';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);

  // Apply advanced scroll animations to all elements
  useScrollAnimation(sectionRef, 'fade-in', 0.1);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    
    // Mobile haptic feedback
    if (isMobile && navigator.vibrate) {
      navigator.vibrate(50);
    }
    
    console.log('Newsletter subscription:', email);
    alert('Thank you for subscribing to our newsletter!');
    setEmail('');
  };

  return (
    <footer className={`${isMobile ? 'mobile-footer' : ''}`} ref={sectionRef} style={{
      position: 'relative',
      backgroundColor: 'var(--color-primary)',
      color: 'white',
      padding: isMobile ? 'var(--space-8) 0 var(--space-4) 0' : 'var(--space-16) 0 var(--space-8) 0'
    }}>
      <div className="container" style={{ padding: isMobile ? '0 1rem' : '0 15px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: isMobile ? 'var(--space-6)' : 'var(--space-8)',
          marginBottom: isMobile ? 'var(--space-6)' : 'var(--space-8)'
        }}>


          {/* Company Info Section */}
          <div className="animate-on-scroll slide-up delay-200">
            <h3 style={{
              fontSize: 'var(--text-xl)',
              fontWeight: '700',
              marginBottom: 'var(--space-4)',
              color: 'var(--color-secondary)',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              {strings.branding.name}
            </h3>
            <p style={{
              fontSize: 'var(--text-sm)',
              lineHeight: '1.6',
              color: 'rgba(255, 255, 255, 0.8)',
              marginBottom: 'var(--space-4)'
            }}>
              Experience authentic Middle Eastern flavors crafted with traditional recipes and premium ingredients.
            </p>

            {/* Contact Details */}
            <div style={{ marginBottom: 'var(--space-4)' }}>
              <div style={{ marginBottom: 'var(--space-2)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                <span style={{ color: 'var(--color-secondary)' }}>📍</span>
                <span style={{ fontSize: 'var(--text-sm)', color: 'rgba(255, 255, 255, 0.9)' }}>
                  {strings.contact.address.street}, {strings.contact.address.city}
                </span>
              </div>
              <div style={{ marginBottom: 'var(--space-2)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                <span style={{ color: 'var(--color-secondary)' }}>📞</span>
                <a href={`tel:${strings.contact.phone}`} style={{ color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none', fontSize: 'var(--text-sm)' }}>
                  {strings.contact.phone}
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                <span style={{ color: 'var(--color-secondary)' }}>📧</span>
                <a href={`mailto:${strings.contact.email}`} style={{ color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none', fontSize: 'var(--text-sm)' }}>
                  {strings.contact.email}
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
              {Object.entries(strings.contact.social).map(([platform, url], index) => (
                <a
                  key={index}
                  href={url}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'var(--transition-normal)',
                    textDecoration: 'none',
                    fontSize: 'var(--text-base)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'var(--color-secondary)';
                    e.target.style.color = 'var(--color-primary)';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.color = 'white';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  {platform === 'facebook' ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  ) : platform === 'instagram' ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  ) : platform === 'twitter' ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Open Hours Section */}
          <div className="animate-on-scroll slide-up delay-300">
            <h4 style={{
              fontSize: 'var(--text-lg)',
              fontWeight: '700',
              marginBottom: 'var(--space-4)',
              color: 'var(--color-secondary)',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              Open Hours
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              {[
                { day: 'Monday', hours: '9:00 - 24:00' },
                { day: 'Tuesday', hours: '9:00 - 24:00' },
                { day: 'Wednesday', hours: '9:00 - 24:00' },
                { day: 'Thursday', hours: '9:00 - 24:00' },
                { day: 'Friday', hours: '9:00 - 02:00' },
                { day: 'Saturday', hours: '9:00 - 02:00' },
                { day: 'Sunday', hours: 'Closed' }
              ].map((schedule, index) => (
                <div key={index} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: 'var(--space-1) 0',
                  borderBottom: index < 6 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
                }}>
                  <span style={{
                    fontSize: 'var(--text-sm)',
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontWeight: '500'
                  }}>
                    {schedule.day}
                  </span>
                  <span style={{
                    fontSize: 'var(--text-sm)',
                    color: schedule.hours === 'Closed' ? 'var(--color-secondary)' : 'rgba(255, 255, 255, 0.8)',
                    fontWeight: schedule.hours === 'Closed' ? '600' : '400'
                  }}>
                    {schedule.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Instagram Section */}
          <div className="animate-on-scroll slide-up delay-400">
            <h4 style={{
              fontSize: 'var(--text-lg)',
              fontWeight: '700',
              marginBottom: 'var(--space-4)',
              color: 'var(--color-secondary)',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              Instagram
            </h4>

            {/* Instagram Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 'var(--space-2)',
              marginBottom: 'var(--space-4)'
            }}>
              {[
                { id: 1, image: '/images/food1.jpg' },
                { id: 2, image: '/images/food2.jpg' },
                { id: 3, image: '/images/food3.jpg' },
                { id: 4, image: '/images/food4.jpg' },
                { id: 5, image: '/images/food5.jpg' },
                { id: 6, image: '/images/food6.jpg' }
              ].map((item) => (
                <div key={item.id} style={{
                  aspectRatio: '1',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(255, 255, 255, 0.1)',
                  cursor: 'pointer',
                  transition: 'var(--transition-normal)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(8, 20, 79, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transition: 'var(--transition-normal)'
                  }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center' }}>
              <a
                href={strings.contact.social.instagram}
                style={{
                  color: 'var(--color-secondary)',
                  textDecoration: 'none',
                  fontSize: 'var(--text-sm)',
                  fontWeight: '600',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)'
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                @aladdinshawarma
              </a>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="animate-on-scroll slide-up delay-500">
            <h4 style={{
              fontSize: 'var(--text-lg)',
              fontWeight: '700',
              marginBottom: 'var(--space-4)',
              color: 'var(--color-secondary)',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              Newsletter
            </h4>

            <p style={{
              fontSize: 'var(--text-sm)',
              color: 'rgba(255, 255, 255, 0.8)',
              marginBottom: 'var(--space-4)',
              lineHeight: '1.6'
            }}>
              Subscribe for special offers, new menu items, and culinary updates from our kitchen.
            </p>

            {/* Newsletter Form */}
            <form onSubmit={handleNewsletterSubmit}>
              <div style={{ marginBottom: 'var(--space-3)' }}>
                <input
                  type="email"
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    padding: 'var(--space-3) var(--space-4)',
                    fontSize: 'var(--text-sm)',
                    borderRadius: 'var(--radius-md)',
                    transition: 'var(--transition-normal)'
                  }}
                />
              </div>
              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: 'var(--space-3) var(--space-4)',
                  fontSize: 'var(--text-sm)',
                  background: 'var(--color-secondary)',
                  color: 'var(--color-primary)',
                  border: 'none',
                  borderRadius: 'var(--radius-md)',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  cursor: 'pointer',
                  transition: 'var(--transition-normal)'
                }}
              >
                Subscribe
              </button>
            </form>

            {/* Additional Info */}
            <p style={{
              fontSize: 'var(--text-xs)',
              color: 'rgba(255, 255, 255, 0.6)',
              marginTop: 'var(--space-3)',
              lineHeight: '1.4',
              fontStyle: 'italic'
            }}>
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: 'var(--space-4)',
          textAlign: 'center'
        }}>
          <p style={{
            fontSize: 'var(--text-sm)',
            color: 'rgba(255, 255, 255, 0.7)',
            margin: 0
          }}>
            Copyright &copy; {new Date().getFullYear()} {strings.branding.name}. All rights reserved.
            <span style={{ margin: '0 var(--space-2)' }}>|</span>
            Developed by <a
              href="#"
              style={{
                color: 'var(--color-secondary)',
                textDecoration: 'none',
                fontWeight: '600'
              }}
            >
              Bhishma Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
