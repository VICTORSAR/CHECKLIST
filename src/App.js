import React from "react";
import TodoItem from "./TodoItem.js";
import todosData from "./todosData.js";
import styles from "./App.module.css";

const date = new Date();
const options = {month: 'long', day: 'numeric', weekday: 'long'};
const dayOfWeek = date.toLocaleDateString('en-US', options);

class App extends React.Component { 
  constructor() {                   
    super()
    this.state = {
      todos: todosData              
    }
    this.handleChange = this.handleChange.bind(this)
  }
                      
  handleChange(id) { 
    this.setState(prevState => { 
            return { 
              todos: prevState.todos.map(item => {
                return item.id === id ? {...item, completed: !item.completed} : item
              })}       
              
            })
}
             
  render() { 
    const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
                                                                                                      
    return (                          
      <div className={styles.todo}>
        <h1 className={styles.tod}>Today <p className = {styles.den}>{dayOfWeek}</p></h1>
        {todoItems}
      </div>
    )
  }
}

export default App
