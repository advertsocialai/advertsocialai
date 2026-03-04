import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import 'react-phone-number-input/style.css';

 
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
