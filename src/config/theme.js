/**
 * Theme Configuration for Aladdin Shawarma
 * Professional color palette and design system
 */

export const theme = {
  // Primary Color Palette
  colors: {
    primary: '#08144F',        // Deep Navy Blue - Professional and trustworthy
    secondary: '#FFD700',      // Golden Yellow - Warm and appetizing
    tertiary: '#FFFFFF',       // Pure White - Clean and modern
    
    // Extended Color Palette
    primaryDark: '#051034',    // Darker navy for depths
    primaryLight: '#1a2766',   // Lighter navy for highlights
    
    secondaryDark: '#d4980d',  // Darker gold for accents
    secondaryLight: '#ffc933', // Lighter gold for highlights
    
    // Neutral Colors
    black: '#000000',
    darkGray: '#1a1a1a',
    mediumGray: '#666666',
    lightGray: '#f8f9fa',
    
    // Premium White & Light Tones
    pureWhite: '#FFFFFF',
    offWhite: '#FAFAFA',
    cream: '#F5F5F0',
    lightCream: '#FAF9F6',
    warmWhite: '#FFF8F0',
    softGray: '#E8E8E8',
    paleGold: '#FFF9E6',
    
    // Accent Colors
    accent1: '#2c3e50',        // Dark blue-gray
    accent2: '#e74c3c',        // Subtle red for CTAs
    accent3: '#27ae60',        // Success green
    
    // Background Variations
    bgPrimary: '#08144F',
    bgSecondary: '#FCB100',
    bgLight: '#FFFFFF',
    bgDark: '#000000',
    bgOverlay: 'rgba(8, 20, 79, 0.9)',
    bgOverlayLight: 'rgba(252, 177, 0, 0.1)',
    
    // White & Light Section Backgrounds
    bgWhite: '#FFFFFF',
    bgOffWhite: '#FAFAFA',
    bgCream: '#F5F5F0',
    bgLightCream: '#FAF9F6',
    bgWarmWhite: '#FFF8F0',
    bgPaleGold: '#FFF9E6',
    bgSoftGray: '#F9F9F9',
    
    // Text Colors
    textPrimary: '#08144F',
    textSecondary: '#FCB100',
    textLight: '#FFFFFF',
    textDark: '#000000',
    textMuted: 'rgba(0, 0, 0, 0.7)',
    textMutedLight: 'rgba(255, 255, 255, 0.8)',
    
    // Text for Light Backgrounds
    textOnWhite: '#08144F',
    textOnLight: '#1a1a1a',
    textMutedOnWhite: 'rgba(8, 20, 79, 0.7)',
    textAccentOnWhite: '#FCB100',
  },

  // Typography System
  typography: {
    // Font Families
    fontPrimary: "'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    fontSecondary: "'Playfair Display', 'Georgia', serif",
    fontAccent: "'Dancing Script', cursive",
    
    // Font Sizes (rem units for scalability)
    fontSize: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem',    // 48px
      '6xl': '3.75rem', // 60px
      '7xl': '4.5rem',  // 72px
    },
    
    // Font Weights
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    
    // Line Heights
    lineHeight: {
      none: 1,
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2,
    },
  },

  // Spacing System (rem units)
  spacing: {
    0: '0',
    1: '0.25rem',     // 4px
    2: '0.5rem',      // 8px
    3: '0.75rem',     // 12px
    4: '1rem',        // 16px
    5: '1.25rem',     // 20px
    6: '1.5rem',      // 24px
    8: '2rem',        // 32px
    10: '2.5rem',     // 40px
    12: '3rem',       // 48px
    16: '4rem',       // 64px
    20: '5rem',       // 80px
    24: '6rem',       // 96px
    32: '8rem',       // 128px
    40: '10rem',      // 160px
    48: '12rem',      // 192px
    56: '14rem',      // 224px
    64: '16rem',      // 256px
  },

  // Border Radius
  borderRadius: {
    none: '0',
    sm: '0.125rem',   // 2px
    base: '0.25rem',  // 4px
    md: '0.375rem',   // 6px
    lg: '0.5rem',     // 8px
    xl: '0.75rem',    // 12px
    '2xl': '1rem',    // 16px
    '3xl': '1.5rem',  // 24px
    full: '9999px',   // Circular
  },

  // Shadows
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    
    // Custom shadows with brand colors
    primary: '0 10px 30px rgba(8, 20, 79, 0.3)',
    secondary: '0 10px 30px rgba(252, 177, 0, 0.3)',
    glow: '0 0 20px rgba(252, 177, 0, 0.5)',
  },

  // Breakpoints for responsive design
  breakpoints: {
    xs: '320px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // Z-index layers
  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modalBackdrop: 1040,
    modal: 1050,
    popover: 1060,
    tooltip: 1070,
  },

  // Transitions and animations
  transitions: {
    // Duration
    duration: {
      fastest: '150ms',
      fast: '200ms',
      normal: '300ms',
      slow: '500ms',
      slowest: '1000ms',
    },
    
    // Easing functions
    easing: {
      linear: 'linear',
      easeIn: 'ease-in',
      easeOut: 'ease-out',
      easeInOut: 'ease-in-out',
      
      // Custom cubic-bezier curves
      subtle: 'cubic-bezier(0.4, 0, 0.2, 1)',
      smooth: 'cubic-bezier(0.4, 0, 0.6, 1)',
      snappy: 'cubic-bezier(0.4, 0, 1, 1)',
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    },
  },

  // Grid system
  grid: {
    container: {
      xs: '100%',
      sm: '540px',
      md: '720px',
      lg: '960px',
      xl: '1140px',
      '2xl': '1320px',
    },
    columns: 12,
    gutter: '1.5rem', // 24px
  },
};

// Utility functions for theme usage
export const getColor = (colorPath) => {
  const keys = colorPath.split('.');
  let result = theme.colors;
  
  for (const key of keys) {
    result = result[key];
    if (result === undefined) {
      console.warn(`Color path "${colorPath}" not found in theme`);
      return theme.colors.primary;
    }
  }
  
  return result;
};

export const getSpacing = (size) => {
  return theme.spacing[size] || size;
};

export const getFontSize = (size) => {
  return theme.typography.fontSize[size] || size;
};

export const getShadow = (type) => {
  return theme.shadows[type] || theme.shadows.base;
};

// CSS Custom Properties generator
export const generateCSSVariables = () => {
  return `
    :root {
      /* Colors */
      --color-primary: ${theme.colors.primary};
      --color-secondary: ${theme.colors.secondary};
      --color-tertiary: ${theme.colors.tertiary};
      --color-primary-dark: ${theme.colors.primaryDark};
      --color-primary-light: ${theme.colors.primaryLight};
      --color-secondary-dark: ${theme.colors.secondaryDark};
      --color-secondary-light: ${theme.colors.secondaryLight};
      
      /* Typography */
      --font-primary: ${theme.typography.fontPrimary};
      --font-secondary: ${theme.typography.fontSecondary};
      --font-accent: ${theme.typography.fontAccent};
      
      /* Spacing */
      --spacing-xs: ${theme.spacing[1]};
      --spacing-sm: ${theme.spacing[2]};
      --spacing-md: ${theme.spacing[4]};
      --spacing-lg: ${theme.spacing[8]};
      --spacing-xl: ${theme.spacing[16]};
      
      /* Shadows */
      --shadow-primary: ${theme.shadows.primary};
      --shadow-secondary: ${theme.shadows.secondary};
      --shadow-glow: ${theme.shadows.glow};
      
      /* Transitions */
      --transition-fast: ${theme.transitions.duration.fast} ${theme.transitions.easing.smooth};
      --transition-normal: ${theme.transitions.duration.normal} ${theme.transitions.easing.smooth};
      --transition-slow: ${theme.transitions.duration.slow} ${theme.transitions.easing.smooth};
    }
  `;
};

export default theme;