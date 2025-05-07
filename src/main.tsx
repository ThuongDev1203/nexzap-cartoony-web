
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add global styles for cartoon look
document.head.insertAdjacentHTML(
  'beforeend',
  `<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800&display=swap" rel="stylesheet">`
);

createRoot(document.getElementById("root")!).render(<App />);
