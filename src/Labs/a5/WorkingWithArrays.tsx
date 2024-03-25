import React, { useState } from "react";

function WorkingWithArrays() {
    const API = "http://localhost:4000/a5/todos";
    const [todo, setTodo] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
    });
    
    return (
      <div>
        <h3>Working with Arrays</h3>
        <h4>Retrieving Arrays</h4>
        <a className="btn btn-primary" href={API}>
          Get Todos
        </a>
        <br/><br/>

        <h4>Retrieving an Item from an Array by ID</h4>
        <input type="number" className="form-control w-25 m-2" value={todo.id}
            onChange={(e) => setTodo({ ...todo,
            id: e.target.valueAsNumber })}/>
        
        <input className="form-control w-25 m-2" type="text" value={todo.title}
            onChange={(e) => setTodo({...todo, title: e.target.value })}/>
        
        <br/>
        <a className="btn btn-warning" href={`${API}/${todo.id}`}>
            Get Todo by ID
        </a>

        <br/><br/>
        <h3>Updating an Item in an Array</h3>
        <a className="btn btn-primary w-30" href={`${API}/${todo.id}/title/${todo.title}`} >
            Update Title to {todo.title}
        </a>

        
        
        <br/><br/>
        <h3>Filtering Array Items</h3>
        <a className="btn btn-success" href={`${API}?completed=true`}>
            Get Completed Todos
        </a>
        
        <br/><br/>
        <h3>Creating new Items in an Array</h3>
        <a className="btn btn-primary w-30" href={`${API}/create`}>
            Create Todo
        </a>

        <br/><br/>
        <h3>Deleting from an Array</h3>
        <a className="btn btn-primary w-30" href={`${API}/${todo.id}/delete`}>
            Delete Todo with ID = {todo.id}
        </a>
      </div>
    );
}

export default WorkingWithArrays;