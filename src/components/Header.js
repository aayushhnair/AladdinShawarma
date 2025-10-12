import React, { useState, useEffect } from 'react';
import { logo } from '../config/assets';
import strings from '../config/strings.json';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId, sectionId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Top Header Bar */}
      <div className={`header-top ${isScrolled ? 'hidden' : ''}`}>
        <div className="container">
          <div className="header-top-content">
            <div className="contact-info">
              <div className="contact-item">
                <span>📞</span>
                <span>Phone: <a href={`tel:${strings.contact.phone}`}>{strings.contact.phone}</a></span>
              </div>
              <div className="contact-item">
                <span>✉️</span>
                <span>Email: <a href={`mailto:${strings.contact.email}`}>{strings.contact.email}</a></span>
              </div>
            </div>
            <div className="contact-info">
              <div className="contact-item">
                <span>🕒</span>
                <span>{strings.contact.hours.weekdays}</span>
              </div>
              <div className="social-links">
                <a href={strings.contact.social.facebook} className="social-link" aria-label="Facebook">
                  <span>f</span>
                </a>
                <a href={strings.contact.social.instagram} className="social-link" aria-label="Instagram">
                  <span>In</span>
                </a>
                <a href={strings.contact.social.twitter} className="social-link" aria-label="Twitter">
                  <span>tw</span>
                </a>
                <a href={strings.contact.social.youtube} className="social-link" aria-label="YouTube">
                  <span>▶</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`main-navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="subNavContainer">
          <div className="container">
            <div className="navbar-content">
              {/* Logo */}
              <div className="logo">
                <img 
                  src={logo.main} 
                  alt={logo.alt}
                  className="logo-image"
                />
              </div>

              {/* Desktop Navigation Menu */}
              <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                {strings.navigation.items.map((item) => (
                  <li key={item.id} className={`nav-item ${activeSection === item.id ? 'active' : ''}`}>
                    <a 
                      href={item.href} 
                      className="nav-link" 
                      onClick={(e) => handleNavClick(e, item.href, item.id)}
                    >
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>

              {/* Mobile Menu Toggle */}
              <button 
                className={`menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;