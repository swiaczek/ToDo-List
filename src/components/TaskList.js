import React from "react";
import Task from "./Task";

const TaskList = props => {
  const tasks = props.tasks.map(task => <Task key={task.id} task={task} />);
  return (
    <div className="TaskList">
      Lista zadań
      {tasks}
    </div>
  );
};

export default TaskList;
