import React, { Component } from "react";
import "./css/AddTask.css";

class AddTask extends Component {
  state = {
    text: "",
    priority: "Medium"
  };

  handleText = e => {
    this.setState({
      text: e.target.value
    });
  };
  handleClick = () => {
    const { text, priority } = this.state;
    const add = this.props.add(text, priority);
    if (add) {
      this.setState({
        text: "",
        priority: "Medium"
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
        <input
          type="text"
          placeholder="Add a task name..."
          value={this.state.text}
          onChange={this.handleText}
        />
        <label htmlFor="Priority">
          <select
            name="Priority"
            id="Priority"
            value={this.state.priority}
            onChange={this.handleSelect}
          >
            <option value={this.state.low}>Low</option>
            <option value={this.state.medium}>Medium</option>
            <option value={this.state.high}>High</option>
          </select>
        </label>
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}

export default AddTask;
