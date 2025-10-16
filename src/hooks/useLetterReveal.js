import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook for letter-by-letter text reveal on scroll
 * @param {string} text - The text to reveal
 * @param {number} speed - Characters per frame (default: 2)
 * @param {number} threshold - Scroll threshold to trigger (default: 0.3)
 * @returns {object} - { displayText, isComplete, elementRef }
 */
const useLetterReveal = (text, speed = 2, threshold = 0.3) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef(null);
  const animationRef = useRef(null);
  const currentIndexRef = useRef(0);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Intersection Observer to detect when element is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
          }
        });
      },
      {
        threshold: threshold,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [hasStarted, threshold]);

  useEffect(() => {
    if (!hasStarted || isComplete) return;

    const revealLetters = () => {
      if (currentIndexRef.current < text.length) {
        const nextIndex = Math.min(currentIndexRef.current + speed, text.length);
        setDisplayText(text.slice(0, nextIndex));
        currentIndexRef.current = nextIndex;
        animationRef.current = requestAnimationFrame(revealLetters);
      } else {
        setIsComplete(true);
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      }
    };

    animationRef.current = requestAnimationFrame(revealLetters);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [hasStarted, text, speed, isComplete]);

  return {
    displayText,
    isComplete,
    elementRef,
    hasStarted
  };
};

export default useLetterReveal;
