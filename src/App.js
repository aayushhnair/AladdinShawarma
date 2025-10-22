import React, { useState, useEffect } from 'react';
import './styles/modern.css';
import './styles/main.css';
import useScrollAnimation from './hooks/useScrollAnimation';
import { getImageByKey, backgrounds } from './config/assets';

// All components loaded normally (no lazy loading to avoid dev server issues)
import SplashScreen from './components/SplashScreen';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import MenuSection from './components/MenuSection';
import TestimonialsSection from './components/TestimonialsSection';
import PerfectIngredientsSection from './components/PerfectIngredientsSection';
import GallerySection from './components/BlogSection'; // Gallery (renamed from Blog)
import CallToActionSection from './components/CallToActionSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ScrollingTextBanner from './components/ScrollingTextBanner';
import FullMenuPage from './components/FullMenuPage';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');

  // Initialize scroll animations
  useScrollAnimation();

  const handleSplashComplete = () => {
    setShowSplash(false);
    setIsLoading(false);
  };

  // Simple client-side routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home';
      setCurrentPage(hash);
      window.scrollTo(0, 0);
    };

    handleHashChange(); // Initial check
    window.addEventListener('hashchange', handleHashChange);
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Full Menu Page Route
  if (!showSplash && currentPage === 'full-menu') {
    return (
      <div className="App" style={{ backgroundColor: 'var(--color-primary)' }}>
        <Header />
        <FullMenuPage />
        <Footer />
      </div>
    );
  }

  // Home Page Route
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
        {/* <ScrollingTextBanner
          text="AUTHENTIC MIDDLE EASTERN • CRAFTED WITH PASSION • SERVED WITH PRIDE"
          backgroundColor="#081C4F"
          textColor="#FCB100"
          icon="⬢"
          scrollDirection="right"
        /> */}

        {/* Row 1: About Section - WHITE BACKGROUND WITH ARABIC ELEMENTS */}
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

            {/* Arabic Corner Decorations */}
            <div style={{
              position: 'absolute',
              top: '3rem',
              left: '2rem',
              width: '80px',
              height: '80px',
              border: '2px solid rgba(252, 177, 0, 0.25)',
              borderRight: 'none',
              borderBottom: 'none',
              zIndex: 1
            }} />
            <div style={{
              position: 'absolute',
              top: '3rem',
              right: '2rem',
              width: '80px',
              height: '80px',
              border: '2px solid rgba(252, 177, 0, 0.25)',
              borderLeft: 'none',
              borderBottom: 'none',
              zIndex: 1
            }} />
            
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
              <AboutSection />
            </div>
          </div>

        {/* Row 2: Menu Section - DARK WITH HERO BACKGROUND & ARABIC ELEMENTS */}
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

            {/* Arabic Corner Decorations - Golden for dark background */}
            <div style={{
              position: 'absolute',
              top: '3rem',
              left: '2rem',
              width: '100px',
              height: '100px',
              border: '2px solid rgba(252, 177, 0, 0.4)',
              borderRight: 'none',
              borderBottom: 'none',
              zIndex: 1
            }} />
            <div style={{
              position: 'absolute',
              top: '3rem',
              right: '2rem',
              width: '100px',
              height: '100px',
              border: '2px solid rgba(252, 177, 0, 0.4)',
              borderLeft: 'none',
              borderBottom: 'none',
              zIndex: 1
            }} />
            <div style={{
              position: 'absolute',
              bottom: '3rem',
              left: '2rem',
              width: '100px',
              height: '100px',
              border: '2px solid rgba(252, 177, 0, 0.4)',
              borderRight: 'none',
              borderTop: 'none',
              zIndex: 1
            }} />
            <div style={{
              position: 'absolute',
              bottom: '3rem',
              right: '2rem',
              width: '100px',
              height: '100px',
              border: '2px solid rgba(252, 177, 0, 0.4)',
              borderLeft: 'none',
              borderTop: 'none',
              zIndex: 1
            }} />
            
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
              <MenuSection />
            </div>
          </div>

        {/* Row 4: Gallery Section (was Blog) - DARK BACKGROUND WITH HERO IMAGE */}
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

            {/* Arabic Corner Decorations */}
            <div style={{
              position: 'absolute',
              top: '3rem',
              left: '2rem',
              width: '80px',
              height: '80px',
              border: '2px solid rgba(252, 177, 0, 0.25)',
              borderRight: 'none',
              borderBottom: 'none',
              zIndex: 1
            }} />
            <div style={{
              position: 'absolute',
              top: '3rem',
              right: '2rem',
              width: '80px',
              height: '80px',
              border: '2px solid rgba(252, 177, 0, 0.25)',
              borderLeft: 'none',
              borderBottom: 'none',
              zIndex: 1
            }} />
            
            <GallerySection />
          </div>

        {/* Row 3: Testimonials Section - DARK WITH HERO BACKGROUND & ARABIC ELEMENTS */}
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

            {/* Arabic Corner Decorations - Golden for dark background */}
            <div style={{
              position: 'absolute',
              top: '3rem',
              left: '2rem',
              width: '100px',
              height: '100px',
              border: '2px solid rgba(252, 177, 0, 0.35)',
              borderRight: 'none',
              borderBottom: 'none',
              zIndex: 1
            }} />
            <div style={{
              position: 'absolute',
              top: '3rem',
              right: '2rem',
              width: '100px',
              height: '100px',
              border: '2px solid rgba(252, 177, 0, 0.35)',
              borderLeft: 'none',
              borderBottom: 'none',
              zIndex: 1
            }} />
            
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