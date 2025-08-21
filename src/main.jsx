import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
{
  /* The following line can be included in your src/index.js or App.js file */
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    <App/>
    </BrowserRouter>
  </StrictMode>,
)
