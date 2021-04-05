import React from 'react';
import './ToDoList.css'

export default function ToDoList({item }){
    return<>
    <div className="list-view">
    <button className="delete-button">×</button>
    <li className="list-item">{item}</li>
    </div>
    
    </> 
    
    
    
    
    

    
    
}