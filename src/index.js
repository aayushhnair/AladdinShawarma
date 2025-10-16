import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Register service worker for offline functionality and caching
serviceWorkerRegistration.register({
  onSuccess: () => console.log('✅ Service Worker: Content cached successfully'),
  onUpdate: () => console.log('🔄 Service Worker: New content available'),
});

// Performance monitoring - only in production
if (process.env.REACT_APP_ENV === 'production') {
  reportWebVitals((metric) => {
    // Log to console or send to analytics
    console.log('📊', metric);
  });
}