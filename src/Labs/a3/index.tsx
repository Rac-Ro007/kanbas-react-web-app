import Classes from "./Classes";
import JavaScript from "./JavaScript";
import Add from "./Add";
import PathParameters from "./routing/PathParameters";
import Styles from "./Styles";
import Highlight from "./Highlight";
import TodoItem from "./todos/TodoItem";
import TodoList from "./todos/TodoList";
import ConditionalOutput from "./ConditionalOutput";
import { useSelector } from "react-redux";
import { LabState } from "../store";

function Assignment3() {
  const { todos } = useSelector((state: LabState) => state.todosReducer)
  return (
    <div>
      <h2>Assignment 3</h2>
      <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
      <ConditionalOutput/>
      <Add a={2} b={4} />
      {Add({ a: 1, b: 2 })}
      <h4>Highlight React Child Component</h4>
      Lorem ipsum <Highlight>dolor sit amet</Highlight>, consectetur adipiscing
      elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis
      vulputate commodo lectus,
      <Styles/>
      <Classes/>
      <PathParameters/>
      <JavaScript />
    </div>
  );
}

export default Assignment3;