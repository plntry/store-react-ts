import { ThemeProvider } from '@mui/material'
import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Catalog from './components/pages/Catalog'
import Mainpage from './components/pages/Mainpage'
import theme from './styles'

const App: React.FC = () => {
  console.log(theme)

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Router>
          <Routes>
            <Route path='/' element={<Mainpage />}></Route>
            <Route path='/catalog' element={<Catalog />}></Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
