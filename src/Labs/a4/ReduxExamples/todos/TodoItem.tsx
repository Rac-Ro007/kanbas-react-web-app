import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";
import { TodoType } from "../../../store";

// Goes in a way that {props}: {props: Type}
function TodoItem({todo}: {todo: TodoType}) {
    const dispatch = useDispatch();

    return (
      <li key={todo.id} className="list-group-item">
        <button className="btn btn-primary m-1" onClick={() => dispatch(setTodo(todo))}> Edit </button>
        <button className="btn btn-danger m-1" onClick={() => dispatch(deleteTodo(todo.id))}> Delete </button>
        {todo.title}
      </li>
    );
  }

  export default TodoItem;