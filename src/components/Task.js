import React from "react";
import "./css/Task.css";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import TextField from "@material-ui/core/TextField";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";

const Task = props => {
  let { id, text, priority, done, edit } = props.task;

  const priorityToText = () => {
    switch (priority) {
      case "1":
        return "Low";

      case "2":
        return "Medium";

      case "3":
        return "High";

      default:
        console.log("No priority");
    }
  };

  return (
    <>
      <tbody>
        <tr>
          <td>
            {edit ? (
              <TextField
                className="TextField"
                value={text}
                onChange={event => props.handleEditText(id, event)}
                multiline
              />
            ) : (
              <span>{text}</span>
            )}
          </td>
          <td>
            {edit ? (
              <select
                className="SelectPriority"
                id="Priority"
                value={priority}
                onChange={event => props.handleEditPriority(id, event)}
              >
                <option value="1">Low</option>
                <option value="2">Medium</option>
                <option value="3">High</option>
              </select>
            ) : (
              <span>{priorityToText()}</span>
            )}
          </td>
          <td>
            <Checkbox
              color="primary"
              type="checkbox"
              checked={done}
              onChange={() => props.change(id)}
            />
            <IconButton
              style={edit ? { visibility: "visible" } : null}
              onClick={() => props.delete(id)}
              aria-label="delete"
            >
              <DeleteIcon fontSize="default" />
            </IconButton>
            <IconButton
              style={edit ? { visibility: "visible" } : null}
              onClick={() => props.editTask(id)}
              aria-label="editActive"
            >
              {edit ? <DoneOutlineIcon color="primary" /> : <EditIcon />}
            </IconButton>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default Task;
