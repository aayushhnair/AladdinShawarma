import React, { useState } from 'react';
import './styles/modern.css';
import './styles/main.css';
import useScrollAnimation from './hooks/useScrollAnimation';
import { getImageByKey, backgrounds } from './config/assets';

// Components
import SplashScreen from './components/SplashScreen';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import MenuSection from './components/MenuSection';
import TestimonialsSection from './components/TestimonialsSection';
import PerfectIngredientsSection from './components/PerfectIngredientsSection';
import BlogSection from './components/BlogSection';
import CallToActionSection from './components/CallToActionSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ScrollingTextBanner from './components/ScrollingTextBanner';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize scroll animations
  useScrollAnimation();

  const handleSplashComplete = () => {
    setShowSplash(false);
    setIsLoading(false);
  };

  return (
    <div className="App" style={{ backgroundColor: 'var(--color-primary)' }}>
      {/* Black screen overlay for initial load */}
      {!showSplash && <div className="initial-black-screen"></div>}
      
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <div className={`main-content ${showSplash ? 'hidden' : 'visible'}`} style={{ 
        transition: 'opacity 0.8s ease',
        opacity: showSplash ? 0 : 1 
      }}>

        <Header />
        <HeroSection />

                {/* Strategic Scrolling Banner - Single Impact Placement */}
        <ScrollingTextBanner
          text="AUTHENTIC MIDDLE EASTERN • CRAFTED WITH PASSION • SERVED WITH PRIDE"
          backgroundColor="#FCB100"
          textColor="#081C4F"
          icon="⬢"
          scrollDirection="left"
        />
                <ScrollingTextBanner
          text="AUTHENTIC MIDDLE EASTERN • CRAFTED WITH PASSION • SERVED WITH PRIDE"
          backgroundColor="#081C4F"
          textColor="#FCB100"
          icon="⬢"
          scrollDirection="right"
        />

        {/* Row 1: About Section - WHITE BACKGROUND */}
        <div style={{
          backgroundColor: '#FAF9F6',
          backgroundImage: `url(${backgrounds.whitePattern})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'repeat',
          backgroundPosition: 'center',
          padding: 'var(--space-16) 0',
          position: 'relative'
        }}>
          {/* White overlay to reduce pattern intensity and improve readability */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(250, 249, 246, 0.85)',
            pointerEvents: 'none',
            zIndex: 0
          }}></div>
          
          {/* Subtle decorative gradient */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '200px',
            background: 'linear-gradient(to bottom, rgba(252, 177, 0, 0.03), transparent)',
            pointerEvents: 'none',
            zIndex: 0
          }}></div>
          
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <AboutSection />
          </div>
        </div>

        {/* Row 2: Menu Section - TRANSPARENT WITH BACKGROUND */}
        <div style={{
          position: 'relative',
          padding: 'var(--space-16) 0',
          backgroundImage: `url(${getImageByKey('hero')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}>
          {/* Dark overlay for readability */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(8, 20, 79, 0.85)',
            zIndex: 0
          }}></div>
          
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <MenuSection />
          </div>
        </div>

        {/* Row 4: From Our Kitchen (Blog) - WARM WHITE BACKGROUND */}
        <div style={{
          backgroundColor: '#FFF8F0',
          backgroundImage: `url(${backgrounds.whitePattern})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'repeat',
          backgroundPosition: 'center',
          padding: 'var(--space-16) 0',
          position: 'relative'
        }}>
          {/* Warm white overlay to reduce pattern intensity and improve readability */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 248, 240, 0.85)',
            pointerEvents: 'none',
            zIndex: 0
          }}></div>
          
          {/* Decorative top border */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '120px',
            height: '4px',
            background: 'linear-gradient(90deg, transparent, #FCB100, transparent)',
            borderRadius: '2px',
            zIndex: 1
          }}></div>
          
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <BlogSection />
          </div>
        </div>

        {/* Row 3: Testimonials Section - TRANSPARENT WITH BACKGROUND */}
        <div style={{
          position: 'relative',
          padding: 'var(--space-16) 0',
          backgroundImage: `url(${getImageByKey('hero')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}>
          {/* Dark overlay for readability */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(8, 20, 79, 0.85)',
            zIndex: 0
          }}></div>
          
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <TestimonialsSection />
          </div>
        </div>

        {/* Row 5: Call to Action (Full Width) */}
        {/* <CallToActionSection /> */}

        {/* Row 6: Contact - WHITE BACKGROUND WITH PROPER CONTAINER */}
        <div style={{
          backgroundColor: '#FFFFFF',
          backgroundImage: `url(${backgrounds.whitePattern})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'repeat',
          backgroundPosition: 'center',
          padding: 'var(--space-16) 0',
          position: 'relative'
        }}>
          {/* White overlay to reduce pattern intensity and improve readability */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            pointerEvents: 'none',
            zIndex: 0
          }}></div>
          
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <ContactSection />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;