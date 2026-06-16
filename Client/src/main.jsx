import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ToastProvider } from './components/ui/toast.jsx'

createRoot(document.getElementById('root')).render(
  <ToastProvider  position="top-right">
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </ToastProvider>

)
