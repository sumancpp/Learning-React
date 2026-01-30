import React from 'react'
import { useState } from 'react'

const UsestateHooks = () => {

  // const [val, setfirst] = useState(20)
  // const [username, setusername] = useState('suman')

  // function change(){
  //   setfirst(30)
  //   setusername('Sohail')
  // }






  // const [val, setval] = useState(0)

  // function incr(){
  //   setval(val+1)
  // }

  // function decr(){
  //   setval(val-1)
  // }

  // function jumpfive(){
  //   setval(val+5)
  // }

  

  
  // const [val, setval] = useState(10)

  // function change(){
  //   console.log(val)
  //   setval(val+5)
  //   console.log(val);
    
    //*****In this case print in console first then web page, because setval is ASYNCHRONOUS, so we have to use another method */

    




  // const [user, setUser] = useState({user: 'Suman',age: 20})

  // const change = () => {
  //   // const newNum = {...user}
  //   // newNum.user = 'Mehfooz'
  //   // newNum.age = 22
  //   // setUser(newNum)

  //   //setUser(prev=>({...prev, user:'Mehfooz', age:22}))

  // }






  const [val, setval] = useState(10)

  function change(){
    setval(prev=>(prev+1))
    setval(prev=>(prev+1))
    setval(prev=>(prev+1))

    //****This is call Batch update ****/
  }

  return (
    <div>
      {/* <h1>Hello my age is {val}</h1>
      <h1>Hello my name is {username}</h1>

      <button onClick={change}>Click</button> */}




       

       {/* <h1>{val}</h1>
       <button onClick={incr}>Increase</button>
       <button onClick={decr}>Decrease</button>
       <button onClick={jumpfive}>Increase by 5</button> */}



        {/* <h1>{user.user} {user.age}</h1>
       <button onClick={change}>Click</button> */}



       <h1>{val}</h1>
       <button onClick={change}>Click</button>


    </div>
  )

}
export default UsestateHooks
