import React, { Component } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import "./App.css";

class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        text: "Nakarmić psa",
        important: "Medium",
        done: true
      },
      {
        id: 1,
        text: "Wyjść na spacer",
        important: "Low",
        done: false
      },
      {
        id: 2,
        text: "Nauczyć się japońskiego",
        important: "High",
        done: true
      },
      {
        id: 3,
        text: "Zagrać w UFC 3",
        important: "Medium",
        done: true
      }
    ]
  };
  render() {
    return (
      <div className="App">
        TODO LIST
        <AddTask />
        <TaskList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
