import { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext";


const Button = () => {

    const[theme,setTheme]=useContext(ThemeDataContext)
    
     function change(){
        setTheme('dark')
     }

  return (
    <div>
      <button onClick={change}>Change Theme</button>
    </div>
  )
}

export default Button
