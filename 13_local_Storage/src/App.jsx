import React from 'react'

const App = () => {

  // localStorage.setItem("Name","Suman")//name=>key , suman=>value
  // localStorage.setItem("Age","18")
  // const name = localStorage.getItem("Age")//if you pass key its shown you value
  // console.log(name);

  // localStorage.removeItem('Name')
  // localStorage.removeItem('Age')

  const user = {
    name:'Suman',
    age:22,
    city:'Howrah'
  }

  localStorage.setItem('user',JSON.stringify(user))

  ////user is object and in localstorage only string value will shown, so we have to transform the object into string using 'JSON.stringify'


  //const username = localStorage.getItem('user')
  // console.log(username);
  // console.log(typeof(username));

  const username = JSON.parse(localStorage.getItem('user'))//using JSON.parse we have to change the JSON string value into  object
  console.log(username);
  console.log(typeof(username));


  localStorage.clear('user')
  
  
  return (
    <div>
      App
    </div>
  )
}

export default App
