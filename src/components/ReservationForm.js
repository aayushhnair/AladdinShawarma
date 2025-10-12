import React, { useState } from 'react';
import strings from '../config/strings.json';

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reservation submitted:', formData);
    // Handle form submission here
    alert('Reservation request submitted! We will contact you soon.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '',
      message: ''
    });
  };

  return (
    <section 
      className="reservation-section" 
      id="reservation"
      style={{
        backgroundColor: 'var(--color-primary)',
        padding: 'var(--space-20) 0',
        margin: 0,
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        position: 'relative'
      }}
    >
      <div style={{ 
        maxWidth: '800px', 
        margin: '0 auto', 
        padding: '0 var(--space-6)',
        position: 'relative',
        zIndex: 2
      }}>
        <div className="section-header" style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
          <h2 style={{ 
            color: 'var(--color-secondary)', 
            fontSize: 'var(--text-4xl)',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            marginBottom: 'var(--space-4)',
            fontFamily: 'var(--font-secondary)'
          }}>
            {strings.reservation.title}
          </h2>
          <p style={{
            color: 'var(--color-tertiary)',
            fontSize: 'var(--text-lg)',
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            {strings.reservation.subtitle}
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 'var(--space-6)' }}>
          {strings.reservation.form.fields.map((field, index) => {
            if (field.type === 'select') {
              return (
                <div key={field.name} className="form-group">
                  <label className="form-label" style={{ 
                    color: 'var(--color-secondary)',
                    fontSize: 'var(--text-sm)',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: 'var(--space-2)',
                    display: 'block'
                  }}>
                    {field.label}
                  </label>
                  <select
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required={field.required}
                    style={{
                      width: '100%',
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '2px solid rgba(252, 177, 0, 0.3)',
                      color: 'var(--color-tertiary)',
                      borderRadius: 'var(--radius-lg)',
                      padding: 'var(--space-4)',
                      fontSize: 'var(--text-base)',
                      transition: 'var(--transition-normal)'
                    }}
                  >
                    <option value="" style={{ background: 'var(--color-primary)', color: 'var(--color-tertiary)' }}>
                      Select Number of Guests
                    </option>
                    {field.options.map((option, optIndex) => (
                      <option key={optIndex} value={option} style={{ background: 'var(--color-primary)', color: 'var(--color-tertiary)' }}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              );
            } else if (field.type === 'textarea') {
              return (
                <div key={field.name} className="form-group">
                  <label className="form-label" style={{ 
                    color: 'var(--color-secondary)',
                    fontSize: 'var(--text-sm)',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: 'var(--space-2)',
                    display: 'block'
                  }}>
                    {field.label}
                  </label>
                  <textarea
                    name={field.name}
                    placeholder={`Enter ${field.label.toLowerCase()}`}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required={field.required}
                    rows={4}
                    style={{
                      width: '100%',
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '2px solid rgba(252, 177, 0, 0.3)',
                      color: 'var(--color-tertiary)',
                      borderRadius: 'var(--radius-lg)',
                      padding: 'var(--space-4)',
                      fontSize: 'var(--text-base)',
                      resize: 'vertical',
                      fontFamily: 'inherit',
                      transition: 'var(--transition-normal)'
                    }}
                  />
                </div>
              );
            } else {
              return (
                <div key={field.name} className="form-group">
                  <label className="form-label" style={{ 
                    color: 'var(--color-secondary)',
                    fontSize: 'var(--text-sm)',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: 'var(--space-2)',
                    display: 'block'
                  }}>
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={`Enter ${field.label.toLowerCase()}`}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required={field.required}
                    style={{
                      width: '100%',
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '2px solid rgba(252, 177, 0, 0.3)',
                      color: 'var(--color-tertiary)',
                      borderRadius: 'var(--radius-lg)',
                      padding: 'var(--space-4)',
                      fontSize: 'var(--text-base)',
                      transition: 'var(--transition-normal)'
                    }}
                  />
                </div>
              );
            }
          })}

          <div className="form-group" style={{ marginTop: 'var(--space-4)' }}>
            <button
              type="submit"
              className="btn btn-primary"
              style={{
                width: '100%',
                padding: 'var(--space-4) var(--space-6)',
                fontSize: 'var(--text-lg)',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                borderRadius: 'var(--radius-xl)',
                background: 'linear-gradient(45deg, var(--color-secondary), var(--color-secondary-light))',
                color: 'var(--color-primary)',
                border: 'none',
                cursor: 'pointer',
                transition: 'var(--transition-normal)',
                boxShadow: 'var(--shadow-secondary)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = 'var(--shadow-glow)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'var(--shadow-secondary)';
              }}
            >
              {strings.reservation.form.submitText}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ReservationForm;