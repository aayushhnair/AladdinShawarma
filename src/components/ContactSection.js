import React, { useState, useEffect, useRef } from 'react';
import strings from '../config/strings.json';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
    <section className="section section-lg section-light" id="contact" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header animate-on-scroll fade-in">
          <div className="section-badge">Get in Touch</div>
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Get in touch with us for reservations, catering, or any questions about our delicious Middle Eastern cuisine.
          </p>
          <div className="section-decoration"></div>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 'var(--space-8)', marginBottom: 'var(--space-16)' }}>
          {/* Address */}
          <div className="card animate-on-scroll slide-up stagger-1">
            <div className="card-content" style={{ textAlign: 'center' }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: 'var(--radius-full)',
                background: 'linear-gradient(135deg, var(--color-secondary), var(--color-secondary-light))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto var(--space-6)',
                color: 'var(--color-primary)',
                fontSize: 'var(--text-2xl)',
                boxShadow: 'var(--shadow-secondary)'
              }}>
                📍
              </div>
              <h3 className="card-title">Address</h3>
              <p className="card-text">
                {strings.contact.address.street}<br />
                {strings.contact.address.city}, {strings.contact.address.state} {strings.contact.address.zipCode}
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="card animate-on-scroll slide-up stagger-2">
            <div className="card-content" style={{ textAlign: 'center' }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: 'var(--radius-full)',
                background: 'linear-gradient(135deg, var(--color-secondary), var(--color-secondary-light))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto var(--space-6)',
                color: 'var(--color-primary)',
                fontSize: 'var(--text-2xl)',
                boxShadow: 'var(--shadow-secondary)'
              }}>
                📞
              </div>
              <h3 className="card-title">Contact Number</h3>
              <p className="card-text">
                <a href={`tel:${strings.contact.phone}`} style={{ color: 'var(--color-secondary)', textDecoration: 'none' }}>
                  {strings.contact.phone}
                </a>
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="card animate-on-scroll slide-up stagger-3">
            <div className="card-content" style={{ textAlign: 'center' }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: 'var(--radius-full)',
                background: 'linear-gradient(135deg, var(--color-secondary), var(--color-secondary-light))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto var(--space-6)',
                color: 'var(--color-primary)',
                fontSize: 'var(--text-2xl)',
                boxShadow: 'var(--shadow-secondary)'
              }}>
                ✉️
              </div>
              <h3 className="card-title">Email Address</h3>
              <p className="card-text">
                <a href={`mailto:${strings.contact.email}`} style={{ color: 'var(--color-secondary)', textDecoration: 'none' }}>
                  {strings.contact.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form and Restaurant Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: 'var(--space-12)' }}>
          {/* Contact Form */}
          <div className="card animate-on-scroll slide-left">
            <div className="card-content">
              <h3 style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: '700',
                marginBottom: 'var(--space-8)',
                color: 'var(--color-primary)',
                fontFamily: 'var(--font-secondary)'
              }}>
                Send us a Message
              </h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>
                  <div className="form-group">
                    <input 
                      type="text" 
                      className="form-input" 
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input 
                      type="email" 
                      className="form-input" 
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <input 
                    type="text" 
                    className="form-input" 
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <textarea 
                    className="form-textarea" 
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    style={{ minHeight: '120px' }}
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>

          {/* Restaurant Info */}
          <div className="card card-dark animate-on-scroll slide-right">
            <div className="card-content">
              <h3 style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: '700',
                marginBottom: 'var(--space-8)',
                color: 'var(--color-secondary)',
                fontFamily: 'var(--font-secondary)'
              }}>
                Visit Our Restaurant
              </h3>

              {/* Opening Hours */}
              <div style={{ marginBottom: 'var(--space-8)' }}>
                <h4 style={{
                  fontSize: 'var(--text-lg)',
                  fontWeight: '600',
                  marginBottom: 'var(--space-4)',
                  color: 'var(--color-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-3)'
                }}>
                  🕒 Opening Hours
                </h4>
                <div style={{ 
                  background: 'rgba(255, 255, 255, 0.1)',
                  padding: 'var(--space-4)',
                  borderRadius: 'var(--radius-lg)',
                  backdropFilter: 'blur(10px)'
                }}>
                  {strings.footer.openingHours.map((schedule, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: 'var(--space-2) 0',
                      borderBottom: index < strings.footer.openingHours.length - 1 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
                      color: 'rgba(255, 255, 255, 0.9)'
                    }}>
                      <span>{schedule.day}</span>
                      <span>{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Info */}
              <div style={{ marginBottom: 'var(--space-8)' }}>
                <div style={{ marginBottom: 'var(--space-4)' }}>
                  <h5 style={{
                    color: 'var(--color-secondary)',
                    marginBottom: 'var(--space-2)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-2)'
                  }}>
                    🚗 Parking
                  </h5>
                  <p style={{ color: 'rgba(255, 255, 255, 0.8)', margin: 0 }}>
                    Free parking available in our lot behind the restaurant
                  </p>
                </div>
                
                <div>
                  <h5 style={{
                    color: 'var(--color-secondary)',
                    marginBottom: 'var(--space-2)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-2)'
                  }}>
                    💳 Payment
                  </h5>
                  <p style={{ color: 'rgba(255, 255, 255, 0.8)', margin: 0 }}>
                    We accept cash, all major credit cards, and mobile payments
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h5 style={{
                  color: 'var(--color-secondary)',
                  marginBottom: 'var(--space-4)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)'
                }}>
                  🔗 Follow Us
                </h5>
                <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
                  {Object.entries(strings.contact.social).map(([platform, url], index) => (
                    <a
                      key={index}
                      href={url}
                      style={{
                        width: '45px',
                        height: '45px',
                        borderRadius: 'var(--radius-full)',
                        background: 'var(--color-secondary)',
                        color: 'var(--color-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'var(--transition-normal)',
                        textDecoration: 'none',
                        fontSize: 'var(--text-lg)',
                        boxShadow: 'var(--shadow-secondary)'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-2px) scale(1.1)';
                        e.target.style.boxShadow = 'var(--shadow-glow)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0) scale(1)';
                        e.target.style.boxShadow = 'var(--shadow-secondary)';
                      }}
                    >
                      {platform === 'facebook' ? 'f' : 
                       platform === 'instagram' ? '📷' : 
                       platform === 'twitter' ? '🐦' : '▶️'}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;