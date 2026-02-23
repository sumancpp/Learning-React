import { useContext } from 'react'
import Nav2 from './Nav2'
import { ThemeDataContext } from '../context/ThemeContext'


const Navber = () => {
   // console.log(props.children);
  const [theme,setTheme] = useContext(ThemeDataContext)
    

  return (
    <div className={theme}>
      <h2>Suman</h2>
      <Nav2 />
    </div>
  )
}

export default Navber
