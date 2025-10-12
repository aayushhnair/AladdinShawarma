import React, { useState } from 'react';
import strings from '../config/strings.json';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    alert('Thank you for subscribing to our newsletter!');
    setEmail('');
  };

  return (
    <footer style={{
      background: 'var(--color-primary)',
      color: 'white',
      padding: 'var(--space-16) 0 var(--space-8) 0'
    }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: 'var(--space-8)', 
          marginBottom: 'var(--space-8)' 
        }}>
          
          {/* Company Info Section */}
          <div>
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
                    background: 'var(--color-secondary)',
                    color: 'var(--color-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'var(--transition-normal)',
                    textDecoration: 'none',
                    fontSize: 'var(--text-base)',
                    fontWeight: '600'
                  }}
                >
                  {platform === 'facebook' ? 'f' : 
                   platform === 'instagram' ? 'IG' : 
                   platform === 'twitter' ? 't' : 'YT'}
                </a>
              ))}
            </div>
          </div>

          {/* Open Hours Section */}
          <div>
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
          <div>
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
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} style={{
                  aspectRatio: '1',
                  borderRadius: 'var(--radius-md)',
                  background: `linear-gradient(45deg, var(--color-secondary), var(--color-primary))`,
                  cursor: 'pointer',
                  transition: 'var(--transition-normal)',
                  border: '2px solid rgba(255, 255, 255, 0.1)',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <span style={{
                    color: 'white',
                    fontSize: 'var(--text-xs)',
                    opacity: 0.7
                  }}>
                    📷
                  </span>
                </div>
              ))}
            </div>
            
            <p style={{
              fontSize: 'var(--text-xs)',
              color: 'rgba(255, 255, 255, 0.7)',
              textAlign: 'center',
              fontStyle: 'italic',
              margin: 0
            }}>
              Follow us @aladdinshawarma
            </p>
          </div>

          {/* Newsletter Section */}
          <div>
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
