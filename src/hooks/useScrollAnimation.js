import { useEffect, useState } from 'react';

export const useScrollAnimation = () => {
  const [visibleElements, setVisibleElements] = useState(new Set());

  useEffect(() => {
    // Enhanced scroll animation with parallax and smooth effects
    const handleScroll = () => {
      // Parallax effect for hero background
      const hero = document.querySelector('.hero-wrap');
      if (hero) {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.3;
        hero.style.transform = `translateY(${parallax}px)`;
      }
      
      // Update navigation active state
      const sections = document.querySelectorAll('section[id]');
      const navLinks = document.querySelectorAll('.nav-link');
      
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= 100) {
          current = section.getAttribute('id');
        }
      });
      
      navLinks.forEach(link => {
        link.parentElement.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
          link.parentElement.classList.add('active');
        }
      });
    };

    // Enhanced intersection observer with staggered animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add staggered delay for better visual effect
            const delay = entry.target.classList.contains('ftco-animate-delay-1') ? 200 :
                         entry.target.classList.contains('ftco-animate-delay-2') ? 400 :
                         entry.target.classList.contains('ftco-animate-delay-3') ? 600 : 0;
            
            setTimeout(() => {
              setVisibleElements(prev => new Set([...prev, entry.target]));
              entry.target.classList.add('ftco-animate-active');
            }, delay);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
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
    const animateElements = document.querySelectorAll('.ftco-animate, .scroll-fade');
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
  }, []);

  useEffect(() => {
    visibleElements.forEach((element) => {
      element.classList.add('visible');
    });
  }, [visibleElements]);
};

export default useScrollAnimation;