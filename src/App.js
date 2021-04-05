import React from 'react';
import './App.css';

const App = () => {
  return <>
  
    <div className="main-div">
    <div className="container">
      
      <h1 className="main-header"> TODO List 👇</h1>
      <br/>
      <input className="input" type="text" placeholder="Enter an item here.."></input>
      <button className="button">+</button>
    </div>
    </div>
  
  </>

}

export default App;