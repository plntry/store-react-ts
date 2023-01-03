import { ThemeProvider } from '@mui/material'
import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import './App.css'
import Mainpage from './components/pages/Mainpage'
import theme from './styles'

const App: React.FC = () => {
  console.log(theme)

  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path='/' element={<Mainpage />}></Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
