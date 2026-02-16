import Navber from './components/Navber'
import Footer from './components/Footer'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Email from './pages/Email'
import Call from './pages/Call'
import AboutDetails from './pages/AboutDetails'
import Navbar2 from './components/Navber2'

const App = () => {
  
  return (
    <div className='h-screen bg-black text-white'>
      <Navber/>
      <Navbar2/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/about/:id' element={<AboutDetails/>}/>
        <Route path='/contact' element={<Contact/>}>
           <Route path='/contact/call' element={<Call/>}/>
           <Route path='/contact/email' element={<Email/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
