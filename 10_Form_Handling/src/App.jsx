const App = () => {

  function formsubmit(e){
    e.preventDefault()//This is call we prevent the default behaviour of a form
    console.log('Form submitedddddd');
    console.log(e);
    
  }




// Form has a default behaviour which is when you submit a form the page is automatecally reloaded.
  return (
    <div>
      <form onSubmit={(e)=>{
        formsubmit(e)
      }}>
        <input type="text" placeholder='Enter your name'/>
        <button>Submit</button>
      </form>
      
    </div>
  )
}

export default App
