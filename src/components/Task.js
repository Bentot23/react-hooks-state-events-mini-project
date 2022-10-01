import React from "react";

function Task( {category, text, onClickDelete} ) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={onClickDelete} className="delete">X</button>
    </div>
  );
}

export default Task;
