import React, { useState } from 'react'
import Navbar from './components/Navber'

const App = () => {

  const [theme, setTheme] = useState('light')
  
  return (
    <div>
      <h1>Theme is {theme}</h1>

      <Navbar theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App