import React from "react";
function File({ todos, settodos, text, settext, setstates }) {
  const hello = (e) => {
    settext(e.target.value);
  };
  const add = (e) => {
    e.preventDefault();
    if (todos.length === 0) {
      todos.push({
        text: text,
        completed: false,
        id: Math.floor(Math.random() * 1000),
      });
    } else if (todos.length !== 0) {
      todos.push({
        text: text,
        completed: false,
        id: Math.floor(Math.random() * 1000),
      });
    }
    settext("");
  };
  const selectHandler = (e) => {
    setstates(e.target.value);
  };
  return (
    <div>
      <form>
        <div className="position">
          <input
            type="text"
            placeholder="Add Todo"
            value={text}
            className="input"
            onChange={hello}
          />
          <button className="add" type="submit" onClick={add}>
            <img
              src="https://img.icons8.com/office/16/000000/plus-math.png"
              alt="add"
            />
          </button>
        </div>
        <select className="select" onChange={selectHandler}>
          <option className="option">All</option>
          <option className="option">Completed</option>
          <option className="option">Uncompleted</option>
        </select>
      </form>
    </div>
  );
}
export default File;
