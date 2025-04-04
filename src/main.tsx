
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Make sure we're getting the DOM element properly
const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");

// Create root and render app without StrictMode for better compatibility
// with Tanstack React Query
createRoot(rootElement).render(<App />);
