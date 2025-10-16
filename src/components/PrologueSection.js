import React from 'react';
import useLetterReveal from '../hooks/useLetterReveal';
import { logo, hero } from '../config/assets';
import aladdinsLamp from '../assets/aladdins-lamp.png';
import backgroundVideo from '../assets/BG_video.mp4';

const PrologueParagraph = ({ text, delay = 0 }) => {
  const { displayText, elementRef, hasStarted } = useLetterReveal(text, 1);

  return (
    <p
      ref={elementRef}
      style={{
        fontFamily: "'Cinzel', 'IM Fell English', serif",
        fontSize: 'clamp(1rem, 2vw, 1.3rem)',
        lineHeight: '2',
        color: 'rgba(252, 243, 224, 0.95)',
        marginBottom: '2rem',
        textAlign: 'center',
        letterSpacing: '0.5px',
        textShadow: '0 2px 12px rgba(0, 0, 0, 0.7)',
        minHeight: '2em',
        opacity: hasStarted ? 1 : 0,
        transition: 'opacity 0.5s ease'
      }}
    >
      {displayText}
      {!displayText && <span style={{ opacity: 0 }}>{text}</span>}
      {displayText && displayText.length < text.length && (
        <span
          style={{
            display: 'inline-block',
            width: '3px',
            height: '1.4em',
            backgroundColor: '#FCB100',
            marginLeft: '3px',
            animation: 'blink 1s infinite',
            verticalAlign: 'text-bottom'
          }}
        />
      )}
    </p>
  );
};

const PrologueSection = ({ title, paragraphs }) => {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        padding: 'clamp(8rem, 20vh, 12rem) 0 clamp(4rem, 10vh, 8rem)',
        backgroundColor: '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0
        }}
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      {/* Dark mystical overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(ellipse at center, rgba(8, 20, 79, 0.7) 0%, rgba(0, 0, 0, 0.95) 100%),
            linear-gradient(to bottom, rgba(12, 8, 5, 0.9), rgba(8, 20, 79, 0.9))
          `,
          zIndex: 0
        }}
      />

      {/* Animated golden particles */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(2px 2px at 20% 30%, rgba(252, 177, 0, 0.3), transparent),
            radial-gradient(2px 2px at 60% 70%, rgba(252, 177, 0, 0.2), transparent),
            radial-gradient(1px 1px at 50% 50%, rgba(252, 177, 0, 0.3), transparent),
            radial-gradient(1px 1px at 80% 10%, rgba(252, 177, 0, 0.2), transparent),
            radial-gradient(2px 2px at 90% 60%, rgba(252, 177, 0, 0.25), transparent)
          `,
          backgroundSize: '200% 200%',
          animation: 'shimmer 20s ease-in-out infinite',
          zIndex: 1,
          opacity: 0.6
        }}
      />

      {/* Lamp glow effect */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(252, 177, 0, 0.15) 0%, transparent 70%)',
          animation: 'pulse 4s ease-in-out infinite',
          zIndex: 1
        }}
      />

      {/* Content */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '100%',
          margin: '0 auto',
          padding: '0 20%'
        }}
      >
        {/* Logo at the top - Creative placement */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '3rem',
            animation: 'fadeInDown 1s ease-out',
            position: 'relative'
          }}
        >
          <img
            src={logo.main}
            alt={logo.alt}
            style={{
              maxWidth: 'clamp(200px, 25vw, 350px)',
              height: 'auto',
              filter: 'drop-shadow(0 0 40px rgba(252, 177, 0, 0.8)) brightness(1.1)',
              animation: 'float 4s ease-in-out infinite'
            }}
          />
        </div>

        {/* Title */}
        <h1
          style={{
            fontFamily: "'Cinzel Decorative', 'IM Fell DW Pica SC', serif",
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            color: '#FCB100',
            textAlign: 'center',
            marginBottom: '3rem',
            letterSpacing: '3px',
            textShadow: `
              0 0 30px rgba(252, 177, 0, 0.8),
              0 0 60px rgba(252, 177, 0, 0.5),
              0 4px 20px rgba(0, 0, 0, 0.9)
            `,
            fontWeight: 'bold',
            lineHeight: '1.3',
            animation: 'fadeInDown 1.5s ease-out'
          }}
        >
          {title}
        </h1>

        {/* Decorative lamp icon */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '3rem',
            position: 'relative'
          }}
        >
          <img
            src={aladdinsLamp}
            alt="Aladdin's Magical Lamp"
            style={{
              maxWidth: 'clamp(120px, 15vw, 200px)',
              height: 'auto',
              filter: 'drop-shadow(0 0 30px rgba(252, 177, 0, 0.9)) brightness(1.2)',
              animation: 'float 3s ease-in-out infinite'
            }}
          />
        </div>

        {/* Ornamental divider */}
        <div
          style={{
            width: '200px',
            height: '3px',
            background: 'linear-gradient(90deg, transparent, #FCB100, transparent)',
            margin: '0 auto 4rem',
            position: 'relative'
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '20px',
              height: '20px',
              background: 'radial-gradient(circle, #FCB100, #8B6914)',
              borderRadius: '50%',
              boxShadow: '0 0 20px rgba(252, 177, 0, 0.9)'
            }}
          />
        </div>

        {/* Story paragraphs */}
        <div style={{ maxWidth: '100%', margin: '0 auto' }}>
          {paragraphs.map((paragraph, index) => (
            <PrologueParagraph key={index} text={paragraph} delay={index * 0.5} />
          ))}
        </div>

        {/* Scroll indicator - Fixed position */}
        <div
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            textAlign: 'center',
            animation: 'fadeIn 2s ease 3s forwards',
            opacity: 0,
            zIndex: 10
          }}
        >
          <div
            style={{
              display: 'inline-block',
              width: '30px',
              height: '50px',
              border: '2px solid rgba(252, 177, 0, 0.5)',
              borderRadius: '15px',
              position: 'relative'
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '8px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '4px',
                height: '8px',
                backgroundColor: '#FCB100',
                borderRadius: '2px',
                animation: 'scroll 2s ease-in-out infinite'
              }}
            />
          </div>
          <p
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: '0.9rem',
              color: 'rgba(252, 177, 0, 0.7)',
              marginTop: '1rem',
              letterSpacing: '2px',
              textTransform: 'uppercase'
            }}
          >
            Scroll to Begin the Tale
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrologueSection;
