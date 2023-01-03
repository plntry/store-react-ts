import { ThemeProvider } from '@mui/material'
import React from 'react'
import './App.css'
import theme from './styles'

const App: React.FC = () => {
  console.log(theme)

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className='App'>
          <div>hello</div>
          <div>hello</div>
          <div>hello</div>
          <div>hello</div>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
