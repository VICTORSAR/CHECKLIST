import React from "react";

function TodoItem (props) {
  const completedStyle = {
    fontStyle: "Italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
  }

    return (
            <div className = "todo-i"> {/** компонент возвращает два элемента, поэтому используем div, а не пустой тег, правильно же? */}
              <input 
                type = "checkbox" 
                checked = {props.item.completed} /** добавляем обработчик события*/
                onChange={() => props.handleChange(props.item.id)} /** вызываем метод handleChange в коде компонента и передаём ему id элемента */
              /> {/** обработчик события onChange принимает объект события */}
              <p style={props.item.completed ? completedStyle: null}>{props.item.name}</p>
            </div>            
    )
}

export default TodoItem