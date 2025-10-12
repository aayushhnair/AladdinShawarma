import React, { useState } from 'react';
import './styles/modern.css';
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
  
  // Initialize scroll animations
  useScrollAnimation();

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <div className="App" style={{ backgroundColor: 'var(--color-primary)' }}>
      {/* {showSplash && <SplashScreen onComplete={handleSplashComplete} />} */}
      {/* <div className={`main-content ${showSplash ? 'hidden' : 'visible'}`}> */}
      <div className={`main-content`}>

        <Header />
        <HeroSection />
        
        {/* Scrolling Text Banner 1 */}
                <ScrollingTextBanner 
          text="FLAVORS ENCHANTED" 
          backgroundColor="#081C4F" 
          textColor="#FCB100"
          icon="✦"
          scrollDirection = "left"
        />
        <ScrollingTextBanner 
          text="MAGIC SERVED" 
          backgroundColor="#FCB100" 
          textColor="#081C4F"
          icon="✱"
          scrollDirection = "right"
        />

        
        {/* Row 1: About + Menu (Side by Side) */}
        <div style={{ 
          backgroundColor: 'var(--color-primary)',
          padding: 'var(--space-16) 0'
        }}>
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: 'var(--space-12)', alignItems: 'start' }}>
              <AboutSection />
              <MenuSection />
            </div>
          </div>
        </div>

        {/* Scrolling Text Banner 2 */}
        <ScrollingTextBanner 
          text="FLAVORS ENCHANTED" 
          backgroundColor="#081C4F" 
          textColor="#FCB100"
          icon="✦"
        />


        {/* Row 2: Intro Section (Full Width) */}
        <IntroSection />
        

        {/* Row 3: Testimonials + Chef (Side by Side) */}
        <div style={{ 
          backgroundColor: 'var(--color-primary)',
          padding: 'var(--space-16) 0'
        }}>
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: 'var(--space-12)', alignItems: 'start' }}>
              <TestimonialsSection />
              <ChefSection />
            </div>
          </div>
        </div>

        {/* Scrolling Text Banner 3 */}
        <ScrollingTextBanner 
          text="AUTHENTIC TASTE" 
          backgroundColor="#FCB100" 
          textColor="#081C4F"
          icon="✨"
          scrollDirection = "right"

        />

        {/* Row 4: Perfect Ingredients + Blog (Side by Side) */}
        <div style={{ 
          backgroundColor: 'var(--color-primary)',
          padding: 'var(--space-16) 0'
        }}>
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: 'var(--space-12)', alignItems: 'start' }}>
              {/* <PerfectIngredientsSection /> */}
              <BlogSection />
            </div>
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