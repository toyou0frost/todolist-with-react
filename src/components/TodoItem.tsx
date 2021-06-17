import React from "react";
import "../todo.css";

interface TodoItemProps {
  name: string;
}

function TodoItem(props: TodoItemProps) {
  return(
    <div id="todomain">
      <div id="todo">{props.name}</div>
    </div>
  )
}

export default TodoItem;