import { useEffect, useState } from 'react';

export const useScrollAnimation = () => {
  const [visibleElements, setVisibleElements] = useState(new Set());
  const [scrollDirection, setScrollDirection] = useState('down');
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    // Enhanced scroll animation with parallax and smooth effects
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      
      // Track scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up');
      }
      setLastScrollY(currentScrollY);
      
      // Parallax effect for hero background
      const hero = document.querySelector('.hero-wrap, .hero-section');
      if (hero) {
        const parallax = currentScrollY * 0.3;
        hero.style.transform = `translateY(${parallax}px)`;
      }
      
      // Update navigation active state
      const sections = document.querySelectorAll('section[id], div[id]');
      const navLinks = document.querySelectorAll('.nav-link');
      
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        if (sectionTop <= 150 && sectionBottom >= 150) {
          current = section.getAttribute('id');
        }
      });
      
      navLinks.forEach(link => {
        link.parentElement.classList.remove('active');
        if (current && link.getAttribute('href').includes(current)) {
          link.parentElement.classList.add('active');
        }
      });
    };

    // Enhanced intersection observer with staggered animations and scroll direction
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add staggered delay for better visual effect
            const delay = entry.target.classList.contains('ftco-animate-delay-1') ? 200 :
                         entry.target.classList.contains('ftco-animate-delay-2') ? 400 :
                         entry.target.classList.contains('ftco-animate-delay-3') ? 600 :
                         entry.target.classList.contains('delay-1') ? 100 :
                         entry.target.classList.contains('delay-2') ? 200 :
                         entry.target.classList.contains('delay-3') ? 300 :
                         entry.target.classList.contains('delay-4') ? 400 :
                         entry.target.classList.contains('delay-5') ? 500 : 0;
            
            setTimeout(() => {
              setVisibleElements(prev => new Set([...prev, entry.target]));
              entry.target.classList.add('ftco-animate-active');
              
              // Add scroll direction class for dynamic animations
              entry.target.classList.add(scrollDirection === 'up' ? 'scroll-up' : 'scroll-down');
              
              // Add specific animation classes only when scrolling
              if (entry.target.classList.contains('fade-in')) {
                entry.target.classList.add('visible');
              }
              if (entry.target.classList.contains('slide-up')) {
                entry.target.classList.add('visible');
              }
              if (entry.target.classList.contains('slide-left')) {
                entry.target.classList.add('visible');
              }
              if (entry.target.classList.contains('slide-right')) {
                entry.target.classList.add('visible');
              }
              if (entry.target.classList.contains('scale-in')) {
                entry.target.classList.add('visible');
              }
              if (entry.target.classList.contains('bounce-in')) {
                entry.target.classList.add('visible');
              }
            }, delay);
          } else {
            // Remove animation classes when element is out of view for re-animation
            entry.target.classList.remove('visible', 'ftco-animate-active', 'scroll-up', 'scroll-down');
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -10px 0px'
      }
    );

    // Counter animation function
    const animateCounter = (element) => {
      const target = parseInt(element.getAttribute('data-number') || element.textContent);
      let current = 0;
      const increment = target / 80;
      const duration = 2000;
      const stepTime = duration / 80;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        element.textContent = Math.floor(current);
      }, stepTime);
    };

    // Counter observer
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');
            animateCounter(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe elements
    const animateElements = document.querySelectorAll('.ftco-animate, .scroll-fade, .animate-on-scroll');
    const counterElements = document.querySelectorAll('.counter-number');
    
    animateElements.forEach((el) => observer.observe(el));
    counterElements.forEach((el) => counterObserver.observe(el));

    // Throttled scroll handler
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll);

    return () => {
      animateElements.forEach((el) => observer.unobserve(el));
      counterElements.forEach((el) => counterObserver.unobserve(el));
      window.removeEventListener('scroll', throttledScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    visibleElements.forEach((element) => {
      element.classList.add('visible');
    });
  }, [visibleElements]);
};

export default useScrollAnimation;