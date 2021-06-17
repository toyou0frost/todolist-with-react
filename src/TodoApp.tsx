import React from "react";
import TodoItem from "./components/TodoItem";
import "./todo.css";
import { globalAgent } from "http";

interface TodoAppProps {}
interface TodoAppState {
  todoItems: string[];
  newTodo: string;
}

class TodoApp extends React.Component<TodoAppProps, TodoAppState> {
  constructor(props: TodoAppProps) {
    super(props);
    
    this.state = {
      todoItems: [],
      newTodo: "",
    };
  }

  handleNewTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      newTodo: e.target.value,
    });
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(this.state.newTodo == ""){
      return
    }
    const items = this.state.todoItems.concat(this.state.newTodo)
  
    this.setState({
      todoItems: items,
      newTodo: "",
    })
  }
  
  delete = () => {
    this.state.todoItems.pop()
    this.setState({

    });
  }


  render() {
    return (
      <div id="_main">
        <h3>TODO</h3>
        {
          this.state.todoItems.map((item, idx) => (
            <TodoItem name={item} key={idx}/>
          ))
        }
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">뭘 해야하나요?</label> <br />
          <input type="text" id="new-todo" value={this.state.newTodo} onChange={this.handleNewTodo} /> <br />
          <button>Add #{this.state.todoItems.length + 1}</button>
        </form>
        <button onClick={this.delete}>Delete #{this.state.todoItems.length + 1}</button>
      </div>
    )
  }
}

export default TodoApp;