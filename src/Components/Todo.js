import React from "react";
function Todo({ todos, text, settodos, todo }) {
  const complete = () => {
    settodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  const deleteHandler = () => {
    settodos(todos.filter((pl) => pl.id !== todo.id));
  };
  return (
    <div>
      <button className="todo">
        <h1 className={`text ${todo.completed ? "completed" : ""}`}>{text}</h1>
        <button className="correct" type="button" onClick={complete}>
          <img
            className="tick"
            src="https://www.flaticon.com/svg/vstatic/svg/716/716225.svg?token=exp=1617846933~hmac=0c364550fd2c50b5091f1385f3845a26"
          alt="tick"></img>
        </button>
        <button className="wrong" type="button" onClick={deleteHandler}>
          <img
            className="tick"
            src="https://www.iconspng.com/images/right-or-wrong-5/right-or-wrong-5.jpg" alt="delete"
          ></img>
        </button>
      </button>
    </div>
  );
}
export default Todo;
