import React from "react";
import "./css/Task.css";
import trashIcon from "./img/trash.png";

const Task = props => {
  const { id, text, priority, done } = props.task;

  return (
    <>
      <tbody>
        <tr>
          <td>{text}</td>
          <td>{priority}</td>
          <td>
            <input type="checkbox" checked={done} onChange={props.change} />
            <button onClick={props.delete}>
              <img src={trashIcon} alt="icon" />
            </button>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default Task;
