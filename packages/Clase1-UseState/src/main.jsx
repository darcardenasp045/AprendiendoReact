import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const estiloP = {
  backgroundColor: 'lightblue',
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App nombre="Daniel" estilo={estiloP} />
  </StrictMode>,
)
