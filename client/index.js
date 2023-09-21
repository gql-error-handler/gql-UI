import React from 'react';
// import { render } from 'react-dom';
import ReactDOM from "react-dom/client";
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './store.js';
// import './style.css';

const root = createRoot(document.getElementById('app'));
root.render(<App />);