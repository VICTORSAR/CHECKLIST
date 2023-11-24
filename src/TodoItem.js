import React from "react";
import styles from "./TodoItem.module.css";

function TodoItem (props) {
  const completedStyle = {
    fontStyle: "Italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
  }

    return (
            <div className = {styles.todoi}> 
              <input 
                type = "checkbox" 
                checked = {props.item.completed} 
                onChange={() => props.handleChange(props.item.id)} 
              /> 
              <p style={props.item.completed ? completedStyle: null}>{props.item.name}</p>
            </div>            
    )
}

export default TodoItem