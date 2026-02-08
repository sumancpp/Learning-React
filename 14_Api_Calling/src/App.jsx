import axios from 'axios'
import { useState } from 'react'

const App = () => {

  // There are two types for calling api one is 'fetch' and the other one is 'axios'

  // await means still i am not getting the data i wait that particular line, and for using await you have to make the function async function.


  // const getData= async () =>{
  //      const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  //      const data = await response.json()
  //      console.log(data);  
  // }


  const [data, setData] = useState([])
  const getData = async () => {
    // const response = axios.get('https://jsonplaceholder.typicode.com/photos')
    // console.log(response);// This way data come in 'promise' form

    // const response = await axios.get('https://jsonplaceholder.typicode.com/photos')
    // console.log(response.data);

    const response = await axios.get('https://picsum.photos/v2/list')
    setData(response.data)
    console.log(response.data);
    
  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>

      <div>
        {data.map(function (elem, idx) {
          return <h2>hello <img src={elem.download_url} alt="" srcset="" /> {idx}</h2>
        })}
      </div>

    </div>
  )
}

export default App
