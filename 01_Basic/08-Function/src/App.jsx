const App = () => {

  // function btnClicked(){
  //   console.log("Button is clicked");
  // }

  // function mouseEnter(){
  //   console.log("Mouse Enter");
  // }

  // function inputChanging(val){
  //   console.log(val);
  // }

  function pageScrolling(val){
    if(val>0){
      console.log("Page is going down");
    }else{
      console.log('page is going up');
      
    }
  }
  
  return (
    <div>
      {/* <h1>Hello Suman</h1>

      <button onClick={btnClicked}>Change</button>

      <button onClick={function(){
        console.log("Suman is here");
      }}>Suman is here</button>
      
      <button onDoubleClick={function(){
        console.log("Double Click");
      }}>Double Click</button>

      <button onMouseEnter={mouseEnter}>Mouse Enter</button> */}
      

      {/* <input onChange={function(elem){
       console.log("User is typing");
       console.log(elem);
       console.log(elem.target);
       inputChanging(elem.target.value)
      }} type="text" placeholder="Enter text"/> */}
      

      {/* <div onMouseEnter={()=>{
        console.log("Mouse Enter");
        
      }}></div> */}

      <div onWheel={(elem)=>{
        pageScrolling(elem.deltaY)
      }}>
        <div className="page1"></div>
        <div className="page2"></div>
        <div className="page3"></div>
      </div>


    </div>
  )
}

export default App
