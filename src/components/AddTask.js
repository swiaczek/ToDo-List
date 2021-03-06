import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import "./css/AddTask.css";

class AddTask extends Component {
  state = {
    text: "",
    priority: "1"
  };

  handleText = e => {
    this.setState({
      text: e.target.value
    });
  };
  handleClick = () => {
    const { text, priority } = this.state;
    if (text.length <= 1) return alert("Task name is too short :)");
    const add = this.props.addTask(text, priority);
    if (add) {
      this.setState({
        text: "",
        priority: "1"
      });
    }
  };

  handleSelect = e => {
    this.setState({
      priority: e.target.value
    });
  };

  render() {
    return (
      <div className="AddTask">
        <TextField
          className="TextField"
          label="Add a new task"
          placeholder="Enter the name..."
          value={this.state.text}
          onChange={this.handleText}
          multiline
        />
        <label htmlFor="Priority">
          <select
            className="SelectPriority"
            title="Priority"
            name="Priority"
            id="Priority"
            value={this.state.priority}
            onChange={this.handleSelect}
          >
            <option value="1">Low</option>
            <option value="2">Medium</option>
            <option value="3">High</option>
          </select>
        </label>
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}

export default AddTask;
