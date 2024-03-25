import React, { useEffect, useState } from "react";
import axios from "axios";

function WorkingWithArrays() {
    const API = "http://localhost:4000/a5/todos";
    const [todo, setTodo] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
    });

    const [todos, setTodos] = useState<any[]>([]);

    const fetchTodos = async () => {
        const response = await axios.get(API);
        setTodos(response.data);
    };

    const removeTodo = async (todo:any) => {
        const response = await axios
            .get(`${API}/${todo.id}/delete`);
        setTodos(response.data);
    };

    const createTodo = async () => {
        const response = await axios.get(`${API}/create`);
        setTodos(response.data);
    };

    const fetchTodoById = async (id:number) => {
        const response = await axios.get(`${API}/${id}`);
        setTodo(response.data);
    };

    const updateTitle = async () => {
        const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
        setTodos(response.data);
    };    

    useEffect(() => {
        fetchTodos();
    }, []);

    
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
            onChange={(e) => setTodo({ ...todo, id: e.target.valueAsNumber })}/>
        
        <input className="form-control w-25 m-2" type="text" value={todo.title}
            onChange={(e) => setTodo({...todo, title: e.target.value })}/>
        
        <input className="form-control w-25 m-2" type="text" value={todo.description}
            onChange={(e) => setTodo({...todo, description: e.target.value })}/>
        
        <input className="m-2" type="checkbox" checked={todo.completed}
            onChange={(e) => setTodo({...todo, completed: e.target.checked })}/>
 
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
        <a className="btn btn-primary w-30" href={`${API}/${todo.id}/description/${todo.description}`} >
            Update Description to {todo.description}
        </a>

        <br/><br/>
        <a className="btn btn-primary w-30" href={`${API}/${todo.id}/completed/${todo.completed}`} >
            Mark Todo Completed to {todo.completed ? 'True' : 'False'} 
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

        <br/><br/>
        <button className="btn btn-primary w-25" onClick={createTodo} >
            Create Todo
        </button>
        <br/> <br/>
        <button className="btn btn-success w-25" onClick={updateTitle} >
            Update Title
        </button>
        <br/>
        <ul className="list-group pt-2" style={{listStyleType:"None"}}>
            {todos.map((todo) => (
            <li className="border w-25 rounded" key={todo.id}>
                <div className="d-flex m-2 justify-content-between align-items-center">
                    {todo.title}
                    <div>
                        <button className="btn btn-danger m-2" onClick={() => removeTodo(todo)} >
                            Remove
                        </button>
                        <button className="btn btn-warning m-2" onClick={() => fetchTodoById(todo.id)} >
                            Edit
                        </button>
                    </div>
                </div>
            </li>
            ))}
        </ul>
      </div>
    );
}

export default WorkingWithArrays;