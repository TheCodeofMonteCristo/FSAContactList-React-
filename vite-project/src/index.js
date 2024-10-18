// src/index.js

import React from 'react'; // Import React
import ReactDOM from 'react-dom/client'; // Import ReactDOM for rendering
import App from './App'; // Import the main App component
import './index.css'; // Import global styles if needed

// Create a root for the React application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component into the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
