import React from 'react';
import './ToDoList.css'

export default function ToDoList({item, deleteSelectedItem, id }){
    return<>
    <div className="list-view">
    <button onClick={()=>deleteSelectedItem(id)} className="delete-button">×</button>
    <li className="list-item">{item}</li>
    </div>
    
    </> 
    
    
    
    
    

    
    
}