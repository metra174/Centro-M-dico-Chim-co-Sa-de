
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');

if (rootElement) {
  try {
    const root = createRoot(rootElement);
    root.render(
      <StrictMode>
        <App />
      </StrictMode>
    );
    // Remove o loader inicial após renderizar
    const loader = document.querySelector('.initial-loader');
    if (loader) {
      setTimeout(() => loader.remove(), 300);
    }
  } catch (error) {
    console.error("Erro ao renderizar a aplicação:", error);
    rootElement.innerHTML = `<div style="padding: 20px; text-align: center;">Erro fatal na inicialização.</div>`;
  }
}
