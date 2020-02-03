import React from "react";
import "./css/Task.css";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const Task = props => {
  const { id, text, priority, done } = props.task;

  return (
    <>
      <tbody>
        <tr>
          <td>{text}</td>
          <td>{priority}</td>
          <td>
            <Checkbox
              color="primary"
              type="checkbox"
              checked={done}
              onChange={() => props.change(id)}
            />
            <IconButton onClick={() => props.delete(id)} aria-label="delete">
              <DeleteIcon fontSize="default" />
            </IconButton>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default Task;
