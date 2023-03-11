import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/styles'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import theme from './components/PRO/theme/theme'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </CssBaseline>
    </ThemeProvider>
  </React.StrictMode>,
)
