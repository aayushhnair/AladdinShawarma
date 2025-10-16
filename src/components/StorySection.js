import React from 'react';
import useLetterReveal from '../hooks/useLetterReveal';
import aladdinHolding from '../assets/aladdin-holdingalamp-toleftsideofscreen.png';
import geniePointing from '../assets/genie_pointinghishadnrightofthescreen.png';

const StoryParagraph = ({ text, delay = 0, speed = 1, textColor = 'rgba(252, 243, 224, 0.95)' }) => {
  const { displayText, elementRef, hasStarted } = useLetterReveal(text, speed);

  return (
    <p
      ref={elementRef}
      style={{
        fontFamily: "'Cinzel', 'IM Fell English', 'Crimson Text', serif",
        fontSize: 'clamp(0.95rem, 1.8vw, 1.2rem)',
        lineHeight: '1.9',
        color: textColor,
        marginBottom: '1.8rem',
        textAlign: 'left',
        letterSpacing: '0.4px',
        textShadow: textColor === '#000000' ? 'none' : '0 2px 8px rgba(0, 0, 0, 0.5)',
        minHeight: '2em',
        position: 'relative',
        transition: 'opacity 0.3s ease',
        opacity: hasStarted ? 1 : 0
      }}
    >
      {displayText}
      {!displayText && <span style={{ opacity: 0 }}>{text}</span>}
      {displayText && displayText.length < text.length && (
        <span
          style={{
            display: 'inline-block',
            width: '3px',
            height: '1.2em',
            backgroundColor: '#FCB100',
            marginLeft: '2px',
            animation: 'blink 1s infinite',
            verticalAlign: 'text-bottom'
          }}
        />
      )}
    </p>
  );
};

const StorySection = ({
  id,
  title,
  subtitle,
  intro,
  paragraphs,
  stats,
  cta,
  backgroundImage,
  isAlternate = false,
  useWhiteBackground = false,
  useBlackText = false
}) => {
  // Determine text color based on props
  const getTextColor = () => {
    if (useBlackText) return '#000000';
    if (useWhiteBackground) return '#08144F';
    return 'rgba(252, 243, 224, 0.95)';
  };

  const getTitleColor = () => {
    if (useBlackText) return '#000000';
    if (useWhiteBackground) return '#08144F';
    return '#FCB100';
  };

  const textColor = getTextColor();
  const titleColor = getTitleColor();

  return (
    <section
      id={id}
      className="story-section"
      style={{
        position: 'relative',
        minHeight: '100vh',
        padding: 'clamp(4rem, 10vh, 8rem) 0',
        backgroundImage: useWhiteBackground ? 'none' : (backgroundImage ? `url(${backgroundImage})` : 'none'),
        backgroundColor: useWhiteBackground ? '#FAF9F6' : 'transparent',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 -5px 20px rgba(0,0,0,0.3)',
        zIndex: id === 'home' ? 1 : id === 'about' ? 2 : id === 'menu' ? 3 : id === 'chef' ? 4 : id === 'testimonials' ? 5 : 6
      }}
    >
      {/* Dark overlay with parchment texture */}
      {!useWhiteBackground && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: isAlternate ? 'rgba(12, 8, 5, 0.92)' : 'rgba(8, 20, 79, 0.88)',
            backgroundImage: `
              linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 100%),
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 2px,
                rgba(0,0,0,0.03) 2px,
                rgba(0,0,0,0.03) 4px
              )
            `,
            zIndex: 0
          }}
        />
      )}

      {/* Mystical corner decorations */}
      <div
        style={{
          position: 'absolute',
          top: 20,
          left: 20,
          width: '100px',
          height: '100px',
          border: '2px solid rgba(252, 177, 0, 0.3)',
          borderRight: 'none',
          borderBottom: 'none',
          zIndex: 1
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 20,
          right: 20,
          width: '100px',
          height: '100px',
          border: '2px solid rgba(252, 177, 0, 0.3)',
          borderLeft: 'none',
          borderTop: 'none',
          zIndex: 1
        }}
      />

      {/* Decorative Character Images - Alternating sides */}
      {id === 'home' && (
        <img
          src={aladdinHolding}
          alt="Aladdin with Lamp"
          style={{
            position: 'absolute',
            left: '2%',
            bottom: '10%',
            maxWidth: 'clamp(150px, 20vw, 300px)',
            height: 'auto',
            opacity: 0.6,
            filter: 'drop-shadow(0 0 20px rgba(252, 177, 0, 0.4))',
            zIndex: 1,
            animation: 'float 6s ease-in-out infinite'
          }}
        />
      )}
      
      {id === 'about' && (
        <img
          src={geniePointing}
          alt="Genie"
          style={{
            position: 'absolute',
            right: '2%',
            bottom: '10%',
            maxWidth: 'clamp(150px, 20vw, 300px)',
            height: 'auto',
            opacity: 0.6,
            filter: 'drop-shadow(0 0 20px rgba(252, 177, 0, 0.4))',
            zIndex: 1,
            animation: 'float 5s ease-in-out infinite 0.5s'
          }}
        />
      )}

      {/* Menu Page - Special Food Placeholders */}
      {id === 'menu' && (
        <>
          {/* Left: Shawarma Plate */}
          <div
            style={{
              position: 'absolute',
              left: '5%',
              top: '20%',
              width: 'clamp(100px, 15vw, 200px)',
              height: 'clamp(100px, 15vw, 200px)',
              border: '3px dashed rgba(252, 177, 0, 0.4)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(252, 177, 0, 0.05)',
              animation: 'float 4s ease-in-out infinite',
              backdropFilter: 'blur(5px)',
              boxShadow: '0 0 30px rgba(252, 177, 0, 0.3)',
              zIndex: 1
            }}
            title="Add shawarma plate PNG here"
          >
            <div style={{
              fontSize: 'clamp(0.7rem, 1.2vw, 1rem)',
              color: '#FCB100',
              fontFamily: "'Cinzel', serif",
              textAlign: 'center',
              padding: '1rem',
              letterSpacing: '0.5px'
            }}>
              🍽️<br/>Shawarma<br/>Plate
            </div>
          </div>

          {/* Right: Grilling Spit */}
          <div
            style={{
              position: 'absolute',
              right: '5%',
              top: '30%',
              width: 'clamp(80px, 12vw, 150px)',
              height: 'clamp(120px, 18vw, 220px)',
              border: '3px dashed rgba(252, 177, 0, 0.4)',
              borderRadius: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(252, 177, 0, 0.05)',
              animation: 'float 5s ease-in-out infinite 0.5s',
              backdropFilter: 'blur(5px)',
              boxShadow: '0 0 30px rgba(252, 177, 0, 0.3)',
              zIndex: 1
            }}
            title="Add vertical grilling spit/rotisserie PNG here"
          >
            <div style={{
              fontSize: 'clamp(0.7rem, 1.2vw, 1rem)',
              color: '#FCB100',
              fontFamily: "'Cinzel', serif",
              textAlign: 'center',
              padding: '1rem',
              letterSpacing: '0.5px'
            }}>
              🔥<br/>Grilling<br/>Spit
            </div>
          </div>

          {/* Bottom: Fresh Ingredients */}
          <div
            style={{
              position: 'absolute',
              left: '50%',
              bottom: '5%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: '1.5rem'
            }}
          >
            <div
              style={{
                width: 'clamp(60px, 10vw, 100px)',
                height: 'clamp(60px, 10vw, 100px)',
                border: '2px dashed rgba(252, 177, 0, 0.3)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(252, 177, 0, 0.03)',
                animation: 'pulse 2s ease-in-out infinite',
                backdropFilter: 'blur(3px)',
                boxShadow: '0 0 15px rgba(252, 177, 0, 0.2)',
                zIndex: 1
              }}
              title="Add fresh vegetables PNG here"
            >
              <div style={{
                fontSize: 'clamp(0.6rem, 1vw, 0.8rem)',
                color: 'rgba(252, 177, 0, 0.9)',
                fontFamily: "'Cinzel', serif",
                textAlign: 'center'
              }}>
                🥗<br/>Veggies
              </div>
            </div>
            <div
              style={{
                width: 'clamp(60px, 10vw, 100px)',
                height: 'clamp(60px, 10vw, 100px)',
                border: '2px dashed rgba(252, 177, 0, 0.3)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(252, 177, 0, 0.03)',
                animation: 'pulse 2.2s ease-in-out infinite',
                backdropFilter: 'blur(3px)',
                boxShadow: '0 0 15px rgba(252, 177, 0, 0.2)',
                zIndex: 1
              }}
              title="Add sauce/tahini PNG here"
            >
              <div style={{
                fontSize: 'clamp(0.6rem, 1vw, 0.8rem)',
                color: 'rgba(252, 177, 0, 0.9)',
                fontFamily: "'Cinzel', serif",
                textAlign: 'center'
              }}>
                🥫<br/>Sauce
              </div>
            </div>
          </div>
        </>
      )}

      {id === 'chef' && (
        <img
          src={geniePointing}
          alt="Genie"
          style={{
            position: 'absolute',
            right: '2%',
            bottom: '10%',
            maxWidth: 'clamp(150px, 20vw, 300px)',
            height: 'auto',
            opacity: 0.5,
            filter: 'drop-shadow(0 0 20px rgba(252, 177, 0, 0.4))',
            zIndex: 1,
            animation: 'float 5.5s ease-in-out infinite 0.3s'
          }}
        />
      )}

      {/* Content container */}
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
        {/* Section Title */}
        {title && (
          <h2
            style={{
              fontFamily: "'Cinzel Decorative', 'IM Fell English SC', serif",
              fontSize: 'clamp(1.8rem, 4.5vw, 3rem)',
              color: titleColor,
              textAlign: 'center',
              marginBottom: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              textShadow: (useBlackText || useWhiteBackground) ? 'none' : '0 0 20px rgba(252, 177, 0, 0.5), 0 4px 12px rgba(0, 0, 0, 0.8)',
              fontWeight: 'bold'
            }}
          >
            {title}
          </h2>
        )}

        {/* Subtitle */}
        {subtitle && (
          <h3
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: 'clamp(0.9rem, 1.8vw, 1.1rem)',
              color: useBlackText ? 'rgba(0, 0, 0, 0.7)' : (useWhiteBackground ? 'rgba(8, 20, 79, 0.7)' : 'rgba(252, 177, 0, 0.7)'),
              textAlign: 'center',
              marginBottom: '3rem',
              letterSpacing: '2px',
              textTransform: 'uppercase'
            }}
          >
            {subtitle}
          </h3>
        )}

        {/* Decorative divider */}
        <div
          style={{
            width: '150px',
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #FCB100, transparent)',
            margin: '0 auto 3rem',
            position: 'relative'
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '12px',
              height: '12px',
              backgroundColor: '#FCB100',
              borderRadius: '50%',
              boxShadow: '0 0 15px rgba(252, 177, 0, 0.8)'
            }}
          />
        </div>

        {/* Intro text */}
        {intro && (
          <div style={{ marginBottom: '2rem' }}>
            <StoryParagraph text={intro} speed={2} textColor={textColor} />
          </div>
        )}

        {/* Story paragraphs */}
        <div style={{ 
          color: textColor
        }}>
          {paragraphs && paragraphs.map((paragraph, index) => (
            <StoryParagraph key={index} text={paragraph} delay={index * 0.3} speed={1} textColor={textColor} />
          ))}
        </div>

        {/* Stats section */}
        {stats && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '2rem',
              margin: '4rem 0',
              padding: '2rem 0',
              borderTop: '1px solid rgba(252, 177, 0, 0.3)',
              borderBottom: '1px solid rgba(252, 177, 0, 0.3)'
            }}
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                style={{
                  textAlign: 'center',
                  opacity: 0,
                  animation: `fadeInUp 0.8s ease forwards ${index * 0.2 + 0.5}s`
                }}
              >
                <div
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    color: '#FCB100',
                    fontWeight: 'bold',
                    marginBottom: '0.5rem',
                    textShadow: '0 0 20px rgba(252, 177, 0, 0.5)'
                  }}
                >
                  {stat.number}
                </div>
                <div
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
                    color: 'rgba(252, 243, 224, 0.8)',
                    letterSpacing: '1px'
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Call to action buttons */}
        {cta && (
          <div
            style={{
              display: 'flex',
              gap: '1.5rem',
              justifyContent: 'center',
              marginTop: '3rem',
              flexWrap: 'wrap'
            }}
          >
            {cta.primary && (
              <button
                style={{
                  fontFamily: "'Cinzel', serif",
                  padding: '1rem 2.5rem',
                  fontSize: '1rem',
                  color: '#08144F',
                  backgroundColor: '#FCB100',
                  border: '2px solid #FCB100',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(252, 177, 0, 0.4)',
                  opacity: 0,
                  animation: 'fadeInUp 0.8s ease forwards 1s'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#FCB100';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 6px 20px rgba(252, 177, 0, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#FCB100';
                  e.target.style.color = '#08144F';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 15px rgba(252, 177, 0, 0.4)';
                }}
              >
                {cta.primary}
              </button>
            )}
            {cta.secondary && (
              <button
                style={{
                  fontFamily: "'Cinzel', serif",
                  padding: '1rem 2.5rem',
                  fontSize: '1rem',
                  color: '#FCB100',
                  backgroundColor: 'transparent',
                  border: '2px solid #FCB100',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease',
                  opacity: 0,
                  animation: 'fadeInUp 0.8s ease forwards 1.2s'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'rgba(252, 177, 0, 0.1)';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 6px 20px rgba(252, 177, 0, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                {cta.secondary}
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default StorySection;
