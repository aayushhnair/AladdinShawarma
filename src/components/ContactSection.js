import React, { useState, useRef, useEffect } from 'react';
import strings from '../config/strings.json';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mobile haptic feedback
    if (isMobile && navigator.vibrate) {
      navigator.vibrate(50);
    }
    
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    alert('Thank you! Your message has been sent.');
  };

  return (
    <div className={`section-column ${isMobile ? 'mobile-contact' : ''}`} id="contact" ref={sectionRef} style={{ 
      color: 'white',
      background: 'var(--color-primary)',
      padding: isMobile ? '2rem 1rem' : '3rem 2rem',
      position: 'relative'
    }}>
        {/* Section Header */}
        <div className={`section-header animate-on-scroll dissolve ${isMobile ? 'mobile-contact-header' : ''}`} style={{ 
          marginBottom: isMobile ? 'var(--space-8)' : 'var(--space-12)',
          textAlign: isMobile ? 'center' : 'left'
        }}>
          <div className="animate-on-scroll flip-in delay-200" style={{
            color: 'var(--color-secondary)',
            fontSize: 'var(--text-sm)',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            marginBottom: 'var(--space-2)'
          }}>
            Get in Touch
          </div>
          <h2 className={`animate-on-scroll zoom-in delay-300 ${isMobile ? 'mobile-contact-title' : ''}`} style={{
            fontSize: isMobile ? 'var(--text-2xl)' : 'var(--text-4xl)',
            fontWeight: '700',
            color: 'white',
            marginBottom: 'var(--space-4)',
            fontFamily: 'var(--font-secondary)'
          }}>
            Contact Us
          </h2>
          <p className="animate-on-scroll slide-up delay-400" style={{
            fontSize: isMobile ? 'var(--text-base)' : 'var(--text-lg)',
            color: 'rgba(255, 255, 255, 0.8)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            {isMobile 
              ? "Get in touch for reservations or questions about our cuisine."
              : "Get in touch for reservations, catering, or any questions about our delicious Middle Eastern cuisine."
            }
          </p>
        </div>

        {/* Main Content Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? 'var(--space-6)' : 'var(--space-12)',
          alignItems: 'start'
        }}>
          
          {/* Left Side - Contact Info */}
          <div className="animate-on-scroll slide-right delay-500" style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: isMobile ? 'var(--space-4)' : 'var(--space-8)',
            width: '100%',
            maxWidth: '100%',
            overflow: 'hidden'
          }}>
            
            {/* Quick Contact Cards */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr', 
              gap: 'var(--space-4)',
              width: '100%'
            }}>
              {/* Address */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                padding: isMobile ? 'var(--space-4)' : 'var(--space-6)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                width: '100%',
                boxSizing: 'border-box'
              }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: isMobile ? 'flex-start' : 'center', 
                  gap: 'var(--space-3)',
                  flexDirection: isMobile ? 'column' : 'row',
                  textAlign: isMobile ? 'center' : 'left'
                }}>
                  <div style={{
                    width: isMobile ? '40px' : '50px',
                    height: isMobile ? '40px' : '50px',
                    borderRadius: 'var(--radius-full)',
                    background: 'var(--color-secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    margin: isMobile ? '0 auto' : '0'
                  }}>
                    <svg width={isMobile ? "20" : "24"} height={isMobile ? "20" : "24"} viewBox="0 0 24 24" fill="var(--color-primary)">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div style={{ width: '100%' }}>
                    <h4 style={{ 
                      color: 'var(--color-secondary)', 
                      fontSize: isMobile ? 'var(--text-base)' : 'var(--text-lg)', 
                      fontWeight: '600', 
                      margin: 0 
                    }}>
                      Address
                    </h4>
                    <p style={{ 
                      color: 'rgba(255, 255, 255, 0.9)', 
                      fontSize: 'var(--text-sm)', 
                      margin: 'var(--space-1) 0 0 0',
                      wordBreak: 'break-word'
                    }}>
                      {strings.contact.address.street}, {strings.contact.address.city}
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone & Email */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
                gap: 'var(--space-4)' 
              }}>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  padding: 'var(--space-4)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  textAlign: 'center',
                  width: '100%',
                  boxSizing: 'border-box'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: 'var(--radius-full)',
                    background: 'var(--color-secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto var(--space-3)'
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--color-primary)">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <h5 style={{ color: 'var(--color-secondary)', fontSize: 'var(--text-sm)', fontWeight: '600', margin: 0 }}>Phone</h5>
                  <a href={`tel:${strings.contact.phone}`} style={{ 
                    color: 'white', 
                    textDecoration: 'none', 
                    fontSize: 'var(--text-xs)',
                    wordBreak: 'break-all'
                  }}>
                    {strings.contact.phone}
                  </a>
                </div>

                <div style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  padding: 'var(--space-4)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  textAlign: 'center',
                  width: '100%',
                  boxSizing: 'border-box'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: 'var(--radius-full)',
                    background: 'var(--color-secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto var(--space-3)'
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--color-primary)">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <h5 style={{ color: 'var(--color-secondary)', fontSize: 'var(--text-sm)', fontWeight: '600', margin: 0 }}>Email</h5>
                  <a href={`mailto:${strings.contact.email}`} style={{ 
                    color: 'white', 
                    textDecoration: 'none', 
                    fontSize: 'var(--text-xs)',
                    wordBreak: 'break-all'
                  }}>
                    {strings.contact.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              padding: isMobile ? 'var(--space-4)' : 'var(--space-6)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              width: '100%',
              boxSizing: 'border-box'
            }}>
              <h4 style={{
                color: 'var(--color-secondary)',
                fontSize: isMobile ? 'var(--text-base)' : 'var(--text-lg)',
                fontWeight: '600',
                marginBottom: 'var(--space-4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: isMobile ? 'center' : 'flex-start',
                gap: 'var(--space-2)',
                textAlign: isMobile ? 'center' : 'left'
              }}>
                <svg width={isMobile ? "18" : "20"} height={isMobile ? "18" : "20"} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                  <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
                Opening Hours
              </h4>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
                gap: 'var(--space-2)' 
              }}>
                {[
                  { day: 'Mon-Thu', hours: '9:00 - 24:00' },
                  { day: 'Fri-Sat', hours: '9:00 - 02:00' },
                  { day: 'Sunday', hours: 'Closed' }
                ].map((schedule, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: 'var(--space-2) 0',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                    width: '100%',
                    boxSizing: 'border-box'
                  }}>
                    <span style={{ 
                      color: 'rgba(255, 255, 255, 0.9)', 
                      fontSize: isMobile ? 'var(--text-xs)' : 'var(--text-sm)' 
                    }}>{schedule.day}</span>
                    <span style={{ 
                      color: schedule.hours === 'Closed' ? 'var(--color-secondary)' : 'rgba(255, 255, 255, 0.8)', 
                      fontSize: isMobile ? 'var(--text-xs)' : 'var(--text-sm)',
                      fontWeight: schedule.hours === 'Closed' ? '600' : '400'
                    }}>
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div style={{ textAlign: 'center' }}>
              <h5 style={{
                color: 'var(--color-secondary)',
                fontSize: 'var(--text-base)',
                fontWeight: '600',
                marginBottom: 'var(--space-4)'
              }}>
                Follow Us
              </h5>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-3)' }}>
                {Object.entries(strings.contact.social).map(([platform, url], index) => (
                  <a
                    key={index}
                    href={url}
                    style={{
                      width: '45px',
                      height: '45px',
                      borderRadius: 'var(--radius-full)',
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'var(--transition-normal)',
                      textDecoration: 'none'
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
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    ) : platform === 'instagram' ? (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    ) : platform === 'twitter' ? (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="animate-on-scroll slide-left delay-600" style={{
            background: 'rgba(255, 255, 255, 0.1)',
            padding: isMobile ? 'var(--space-4)' : 'var(--space-8)',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(10px)',
            width: '100%',
            maxWidth: '100%',
            boxSizing: 'border-box'
          }}>
            <h3 style={{
              fontSize: isMobile ? 'var(--text-xl)' : 'var(--text-2xl)',
              fontWeight: '700',
              marginBottom: isMobile ? 'var(--space-4)' : 'var(--space-6)',
              color: 'var(--color-secondary)',
              fontFamily: 'var(--font-secondary)',
              textAlign: isMobile ? 'center' : 'left'
            }}>
              Send us a Message
            </h3>
            
            <form onSubmit={handleSubmit}>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
                gap: 'var(--space-4)', 
                marginBottom: 'var(--space-4)',
                width: '100%'
              }}>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    padding: 'var(--space-3) var(--space-4)',
                    fontSize: 'var(--text-sm)',
                    borderRadius: 'var(--radius-md)',
                    outline: 'none',
                    transition: 'var(--transition-normal)',
                    width: '100%',
                    boxSizing: 'border-box'
                  }}
                />
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    padding: 'var(--space-3) var(--space-4)',
                    fontSize: 'var(--text-sm)',
                    borderRadius: 'var(--radius-md)',
                    outline: 'none',
                    transition: 'var(--transition-normal)',
                    width: '100%',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
              
              <input 
                type="text" 
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  padding: 'var(--space-3) var(--space-4)',
                  fontSize: 'var(--text-sm)',
                  borderRadius: 'var(--radius-md)',
                  outline: 'none',
                  marginBottom: 'var(--space-4)',
                  transition: 'var(--transition-normal)',
                  boxSizing: 'border-box'
                }}
              />
              
              <textarea 
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  minHeight: isMobile ? '100px' : '120px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  padding: 'var(--space-3) var(--space-4)',
                  boxSizing: 'border-box',
                  fontSize: 'var(--text-sm)',
                  borderRadius: 'var(--radius-md)',
                  outline: 'none',
                  marginBottom: 'var(--space-6)',
                  resize: 'vertical',
                  transition: 'var(--transition-normal)'
                }}
              ></textarea>
              
              <button 
                type="submit" 
                style={{ 
                  width: '100%',
                  background: 'var(--color-secondary)',
                  color: 'var(--color-primary)',
                  border: 'none',
                  padding: isMobile ? 'var(--space-3) var(--space-4)' : 'var(--space-4) var(--space-6)',
                  fontSize: isMobile ? 'var(--text-sm)' : 'var(--text-base)',
                  fontWeight: '600',
                  borderRadius: 'var(--radius-md)',
                  cursor: 'pointer',
                  transition: 'var(--transition-normal)',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  boxSizing: 'border-box'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 8px 25px rgba(252, 177, 0, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
    </div>
  );
};

export default ContactSection;