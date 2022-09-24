import React from "react";
import Heder from "./components/ToDoList/Heder.js";
import List from "./components/ToDoList/List.js";
 function ToDoList(){
    return (
        <div className="ToDoList">
            <Heder />
            <List />
            
        </div>
    )
}

export default ToDoList