import React, { useEffect, useState, useRef } from 'react';

const ScrollingTextBanner = ({ 
    text = "MAGIC SERVED", 
    backgroundColor = "#FCB100", 
    textColor = "#081C4F",
    icon = "✱",
    scrollDirection = "left" // "left" or "right"
}) => {
    const bannerRef = useRef(null);
    const textRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    const repeatedText = Array(8).fill(text).join(` ${icon} `) + ` ${icon} `;

    useEffect(() => {
        const handleScroll = () => {
            if (!bannerRef.current) return;

            const rect = bannerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const elementTop = rect.top;
            const elementBottom = rect.bottom;

            if (elementTop <= windowHeight && elementBottom >= 0) {
                const progress = Math.max(0, Math.min(1, (windowHeight - elementTop) / (windowHeight + rect.height)));
                // Direction control
                const translateXPercent = scrollDirection === "left"
                    ? -25 * progress
                    : 25 * progress;
                setScrollProgress(translateXPercent);
            }
        };

        handleScroll();

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

        window.addEventListener('scroll', throttledScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', throttledScroll);
        };
    }, [scrollDirection]);

    return (
        <div 
            ref={bannerRef}
            className="scrolling-banner"
            style={{
                backgroundColor: backgroundColor,
                color: textColor,
                padding: '20px 0',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                position: 'relative',
                zIndex: 5
            }}
        >
            <div 
                ref={textRef}
                className="scrolling-text-inner"
                style={{
                    display: 'flex',
                    transform: `translateX(${scrollProgress}%)`,
                    transition: 'none',
                    willChange: 'transform'
                }}
            >
                {Array(8).fill(null).map((_, index) => (
                    <div 
                        key={index}
                        className="scrolling-text-chunk"
                        style={{
                            display: 'inline-block',
                            fontSize: '32px',
                            fontWeight: '900',
                            textTransform: 'uppercase',
                            letterSpacing: '4px',
                            fontFamily: "'Roboto', sans-serif",
                            whiteSpace: 'nowrap',
                            paddingRight: '50px'
                        }}
                    >
                        <h2 style={{ 
                            margin: 0, 
                            color: textColor,
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '30px'
                        }}>
                            {text}
                            <span 
                                className="rotating-icon"
                                style={{
                                    display: 'inline-block',
                                    transform: `rotate(${scrollProgress * 14.4}deg)`,
                                    fontSize: '0.7em',
                                    transformOrigin: 'center'
                                }}
                            >
                                {icon}
                            </span>
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ScrollingTextBanner;
