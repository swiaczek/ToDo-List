import React, { Component } from "react";
import "./css/AddTask.css";

class AddTask extends Component {
  state = {
    text: "",
    options: ""
  };
  render() {
    return (
      <div className="AddTask">
        <input
          type="text"
          placeholder="Add a task name..."
          value={this.state.text}
        />
        <label htmlFor="Priority">
          <select name="Priority" id="Priority">
            <option value={this.state.options}>Low</option>
            <option value={this.state.options}>Medium</option>
            <option value={this.state.options}>High</option>
          </select>
        </label>
        <button>Add</button>
      </div>
    );
  }
}

export default AddTask;
