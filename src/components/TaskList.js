import React from "react";
import Task from "./Task"

function TaskList({tasks, deleteTask}) {
  const displayTask = tasks.map((task, index) => {
    return (
      <Task
        key={index}
        {...task}
        onClickDelete={() => deleteTask(task)}
      />
    );
  })
  
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {displayTask}
    </div>
  );
}

export default TaskList;
