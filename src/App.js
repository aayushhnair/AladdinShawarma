import React, { useState } from 'react';
import './styles/modern.css';
import './styles/main.css';
import useScrollAnimation from './hooks/useScrollAnimation';

// Components
import SplashScreen from './components/SplashScreen';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import IntroSection from './components/IntroSection';
import MenuSection from './components/MenuSection';
import TestimonialsSection from './components/TestimonialsSection';
import ChefSection from './components/ChefSection';
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

        {/* Row 1: About + Menu (Side by Side) */}
        <div style={{
          backgroundColor: 'var(--color-primary)',
          padding: 'var(--space-16) 0'
        }}>
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: 'var(--space-24)', alignItems: 'start' }}>
              <AboutSection />
              <MenuSection />
            </div>
          </div>
        </div>

        {/* Row 2: Intro Section (Full Width) */}
        <IntroSection />

        {/* Row 4: From Our Kitchen (Blog) - Full Width on Mobile */}
        <div style={{
          backgroundColor: 'var(--color-primary)',
          padding: 'var(--space-16) 0'
        }}>
          <div className="container">
            <BlogSection />
          </div>
        </div>

        {/* Row 5: Chef Section - Full Width on Mobile */}
        <div style={{
          backgroundColor: 'var(--color-primary)',
          padding: 'var(--space-8) 0'
        }}>
          <div className="container">
            <ChefSection />
          </div>
        </div>

        {/* Row 3: Testimonials Section */}
        <div style={{
          backgroundColor: 'var(--color-primary)',
          padding: 'var(--space-16) 0'
        }}>
          <div className="container">
            <TestimonialsSection />
          </div>
        </div>

        {/* Row 5: Call to Action (Full Width) */}
        <CallToActionSection />

        {/* Row 6: Contact (Full Width) */}
        <ContactSection />

        <Footer />
      </div>
    </div>
  );
}

export default App;