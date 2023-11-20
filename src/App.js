import React from "react";
import TodoItem from "./TodoItem.js";
import todosData from "./todosData.js";

const date = new Date();
const options = {month: 'long', day: 'numeric', weekday: 'long'};
const dayOfWeek = date.toLocaleDateString('en-US', options);

class App extends React.Component { /** здесь мы то, что хранится в todosData помещаем в состояние компонента App, правильно же? */
  constructor() {                   /** мы представляем компонент App как компонент, основанный на классе, правильно же? */
    super()
    this.state = {
      todos: todosData              /** загружаем данные из todosData в состояние, правильно же? */
    }
    this.handleChange = this.handleChange.bind(this)
  }
                      /** создаём механизм проверки вызова метода */
  handleChange(id) { /** свойство id мы не выводим на экран, но оно нам необходимо для "ключа" в методе map, поэтому мы сюда его передаём, правильно же? */
    this.setState(prevState => { /** с помощью метода map проходимся по массиву и ищем элемент, на который кликнул пользователь */
            return {
              ...prevState, /** троеточие - это оператор распространения, грубо говоря, мы передаём "начальные" свойства компонента, чтобы менять только то, которое изменилось*/
              todos: prevState.todos.map(item => {
                return item.id === id ? {...item, completed: !item.completed} : item
              })}       /** если обнаруживается элемент, id которого равен id, переданному методу проверки, 
              мы, меняем его свойство completed на противоположное*/
            })
}
             /** для того, чтобы передать экземпляру компонента todoItem ссылку на механизм проверки, мы передаём ему свойства key и item */
  render() { /** формируя список компонентов todoItems мы обходим уже не массив todosData, а массив с теми же данными, но хранящийся в состоянии (в this.state.todos), правильно же? */
    const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
                                                                                                      /** свойство handleChange содержит ссылку на метод handleChange экземпляра App (об этом говорит this.), правильно же? */
    return (                          
      <div className="todo">
        <h1 className= "tod">Today <p className = "den">{dayOfWeek}</p></h1> {/** class является ключевым словом в JS, поэтому в React используется className, правильно же? */}
        {todoItems}
      </div>
    )
  }
}

export default App
