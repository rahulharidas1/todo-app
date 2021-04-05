import React, { useState} from 'react';
import './App.css';
import ToDoList from './ToDoList';

const App = () => {
  const [inputText, setInputText] = useState("");
  const [item, setItem] = useState([]);


    function deleteItemCallback(id){
      setItem((oldItem)=>{
        return oldItem.filter((item,index)=>{
          return index!==id;
        })
      })
    }

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
          item.map((item,index)=>{
            return <ToDoList key={index} id={index} item={item} deleteSelectedItem={deleteItemCallback}/>
          })
        }
        
      </ol>
    </div>
    </div>
  
  </>

}

export default App;