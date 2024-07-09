import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated for React 18
import './index.css';
import App from './App.js'; // Updated relative path
import reportWebVitals from './reportWebVitals';
import { library } from '@fortawesome/fontawesome-svg-core';
// Remove or include specific brand icons if needed
// import { faSomeBrandIcon } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes, faBolt, faBookOpen, faTags, faStar, faStarHalfAlt, faSpinner, faArrowLeft, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

library.add(faBars, faTimes, faBolt, faBookOpen, faTags, faStar, faStarHalfAlt, faSpinner, faArrowLeft, faShoppingCart);

const root = ReactDOM.createRoot(document.getElementById('root')); // Updated for React 18

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
