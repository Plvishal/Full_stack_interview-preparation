import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { CounterProvider } from './context/CounterContext.jsx';
import { CartProvider } from './context/Cart.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </CounterProvider>
  </React.StrictMode>
);
