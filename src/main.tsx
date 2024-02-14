import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementsByClassName('reveal').item(0)!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
