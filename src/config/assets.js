/**
 * Common Assets Configuration for Aladdin Shawarma
 * Centralized management of all images and media files
 */

// Import all images from assets folder
import logoImage from '../assets/logo.png';
import poster1 from '../assets/aladdin01.jpg';
import poster2 from '../assets/Poster (2).jpg';
import poster3 from '../assets/Poster (3).jpg';
import poster4 from '../assets/Poster (4).jpg';
import poster5 from '../assets/Poster (5).jpg';
import poster6 from '../assets/Poster (6).jpg';
import poster7 from '../assets/Poster (7).jpg';
import poster8 from '../assets/Poster (8).jpg';
import poster9 from '../assets/Poster (9).jpg';
import poster10 from '../assets/Poster (10).jpg';
import poster11 from '../assets/Poster (11).jpg';
import poster12 from '../assets/Poster (12).jpg';
import poster13 from '../assets/Poster (13).jpg';

export const assets = {
  // Logo and Branding
  logo: {
    main: logoImage,
    alt: 'Aladdin Shawarma Logo'
  },

  // Hero Section Images
  hero: {
    background: poster1,
    backgroundAlt: 'Delicious Shawarma Background'
  },

  // Menu Item Images  
  menu: {
    chickenShawarma: poster2,
    lambShawarma: poster3,
    mixedShawarma: poster4,
    falafelWrap: poster5,
    hummusPlate: poster6,
    babaGanoush: poster7,
    grilledChicken: poster8,
    falafel: poster9,
    fattoush: poster10,
    mintLemonade: poster11,
    turkishCoffee: poster12
  },

  // Team Photos
  team: {
    chefAhmad: poster1,
    chefFatima: poster2,
    chefOmar: poster3,
    chefLayla: poster4
  },

  // About Section Images
  about: {
    restaurant: poster5,
    kitchen: poster6,
    story: poster7
  },

  // Blog Images
  blog: {
    blogMarinade: poster8,
    blogSpices: poster9,
    blogHistory: poster10
  },

  // Customer Testimonials
  testimonials: {
    customerSarah: poster11,
    customerMichael: poster12,
    customerAmira: poster13,
    customerDavid: poster1
  },

  // Background Images
  backgrounds: {
    heroMain: poster2,
    section1: poster3,
    section2: poster4,
    cta: poster5
  },

  // Ingredient Images
  ingredients: {
    ingredientLamb: poster6,
    ingredientHerbs: poster7,
    ingredientBread: poster8,
    ingredientSpices: poster9
  },

  // Call to Action Images
  cta: {
    background: poster10,
    featured: poster11
  },

  // Contact Section Images
  contact: {
    map: poster12,
    restaurant: poster13
  },

  // Placeholder Images
  placeholders: {
    default: poster1,
    loading: poster2
  }
};

/**
 * Get asset by key path (e.g., 'logo.main', 'menu.chickenShawarma')
 * @param {string} keyPath - Dot notation path to asset
 * @returns {string|null} - Asset URL or null if not found
 */
export const getAsset = (keyPath) => {
  const keys = keyPath.split('.');
  let current = assets;
  
  for (const key of keys) {
    if (current && current[key] !== undefined) {
      current = current[key];
    } else {
      return null;
    }
  }
  
  return current;
};

/**
 * Get image by simple key - searches through all categories
 * @param {string} key - Simple key like 'chickenShawarma', 'main', etc.
 * @returns {string|null} - Asset URL or null if not found
 */
export const getImageByKey = (key) => {
  // First try direct asset lookup
  for (const category of Object.values(assets)) {
    if (category && typeof category === 'object' && category[key]) {
      return category[key];
    }
  }
  
  // If not found, return placeholder
  return assets.placeholders.default;
};

/**
 * Get asset with alt text
 * @param {string} keyPath - Path to asset
 * @param {string} customAlt - Custom alt text
 * @returns {object} - Object with src and alt properties
 */
export const getAssetWithAlt = (keyPath, customAlt = '') => {
  const asset = getAsset(keyPath);
  const altPath = keyPath.replace(/\.[^.]+$/, '.alt');
  const altText = getAsset(altPath) || customAlt || 'Aladdin Shawarma';
  
  return {
    src: asset,
    alt: altText
  };
};

// Export specific categories for easier imports
export const logo = assets.logo;
export const hero = assets.hero;
export const menu = assets.menu;
export const team = assets.team;
export const about = assets.about;
export const blog = assets.blog;
export const testimonials = assets.testimonials;
export const backgrounds = assets.backgrounds;
export const ingredients = assets.ingredients;
export const cta = assets.cta;
export const contact = assets.contact;
export const placeholders = assets.placeholders;

export default assets;