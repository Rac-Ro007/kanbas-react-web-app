import Classes from "./Classes";
import JavaScript from "./JavaScript";
import Add from "./Add";
import PathParameters from "./routing/PathParameters";
import Styles from "./Styles";
import Highlight from "./Highlight";
import TodoItem from "./todos/TodoItem";
import TodoList from "./todos/TodoList";
import ConditionalOutput from "./ConditionalOutput";

function Assignment3() {
  return (
    <div>
      <h2>Assignment 3</h2>
      <ul className="list-group">
        <TodoList />
        <TodoItem
          todo={{ done: false, title: "Buy bread", status: "IN PROGRESS" }}
        />
        <TodoItem
          todo={{ done: true, title: "Feed dogs", status: "COMPLETED" }}
        />
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