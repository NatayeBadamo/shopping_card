import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RouteConfig from './routes/Routes.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouteConfig />
  </StrictMode>,
)
