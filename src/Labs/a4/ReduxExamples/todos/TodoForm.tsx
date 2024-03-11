import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";
import { LabState } from "../../../store";

function TodoForm() {

    const { todo } = useSelector((state: LabState) => state.todosReducer);
    const dispatch = useDispatch();

    return (
      <li className="list-group-item">
        <div className="d-flex justify-content-between align-items-center">
            <div className="flex-grow-1">
                <input className="form-control"
                value={todo.title}
                onChange={ (e) => dispatch(setTodo({ ...todo, title: e.target.value })) }
                />
            </div>
            <div className="d-flex">
                <button className="btn btn-warning m-1" onClick={() => dispatch(updateTodo(todo))}> Update </button>
                <button className="btn btn-success m-1" onClick={() => dispatch(addTodo(todo))}> Add </button>
            </div>
        </div>
      </li>
    );
  }
  export default TodoForm;