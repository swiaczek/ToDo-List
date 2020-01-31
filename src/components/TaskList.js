import React from "react";
import Task from "./Task";

const TaskList = props => {
  const tasks = props.tasks.map(task => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));
  return (
    <div className="TaskList">
      <table>
        <thead>
          <tr>
            <th>Task name</th>
            <th>Priority</th>
            <th>Done</th>
          </tr>
        </thead>
        {tasks}
      </table>
    </div>
  );
};

export default TaskList;
