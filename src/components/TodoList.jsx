import React from "react";
import Todo from "./Todo";

const TodoList = (prop) => {
  return (
    <div className="bg-red-400">
      {prop.todos.map((elm, i) => {
        return <Todo key={i} singleTask={elm} />;
      })}
    </div>
  );
};

export default TodoList;
