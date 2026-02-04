import { useState } from "react"

const App = () => {

  const [name, setName] = useState('')

  function formsubmit(e){
    e.preventDefault()
    console.log('Form submitedddddd by', name);
    setName('')
    
  }




  return (
    <div>
      <form onSubmit={(e)=>{
        formsubmit(e)
      }}>
        <input 
        type="text" 
        placeholder='Enter your name'
        value={name}
        onChange={(e)=>{
        setName(e.target.value);
        }}
        />
        <button>Submit</button>
      </form>
      
    </div>
  )
}


export default App
