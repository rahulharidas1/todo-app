import React, { useState} from 'react';
import './App.css';

const App = () => {
  const [inputText, setInputText] = useState("");
  const [item, setItem] = useState([]);


  function onChangeHandler(event){
    var text = event.target.value;
    setInputText(text);
    
  }

  function onClickHandler(){
    setItem((oldItem)=>{
      return [...oldItem,inputText];
    })
    setInputText("");
  }
  return <>
  
    <div className="main-div">
    <div className="container">
      
      <h1 className="main-header"> TODO List 👇</h1>
      <br/>
      <input value={inputText} onChange={onChangeHandler} className="input" type="text" placeholder="Enter an item here.."></input>
      <button onClick={onClickHandler} className="button">+</button>
      <ol>
        {
          item.map((item)=>{
            return <li>{item}</li>
          })
        }
        
      </ol>
    </div>
    </div>
  
  </>

}

export default App;