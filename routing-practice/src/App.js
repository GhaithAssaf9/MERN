import React from 'react';
import { Router, navigate } from '@reach/router';
import Home from './components/Home.js';
import Word from './components/Word.js';
import Color from './components/Color.js';
import Num from './components/Num.js';

function App() {
  const clickHandler = (e) => {
    e.preventDefault();
    navigate('/')
  }

  return (
    <>
<button onClick={clickHandler} style={{
  background:"red" ,color :"green",fontWeight :"bold" , height:"50px" , 
  width :"90px" , marginLeft: "788px" , marginTop :"200px" 
}}>click me</button> 


      <div className="App" >
        
        <ul style={{ display: "flex", justifyContent: "center", flexDirection: "row" , marginTop :"30px"}}>
        <Router >
     
         <Home path="/home" />
         <Word path="/:word" />
         <Color path="/:word/:fcolor/:bcolor" />
         <Num path="/:num" />
        </Router>
        </ul>
      </div>
    </>
  );
}
export default App;