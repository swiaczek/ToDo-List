import React, { Component } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import "./css/App.css";

class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        text: "Nakarmić psa",
        priority: "Medium",
        done: true
      },
      {
        id: 1,
        text: "Wyjść na spacer",
        priority: "Low",
        done: false
      },
      {
        id: 2,
        text: "Nauczyć się japońskiego",
        priority: "High",
        done: true
      },
      {
        id: 3,
        text: "Zagrać w UFC 3",
        priority: "Medium",
        done: true
      }
    ]
  };

  deleteTask() {
    console.log("Usunięto element");
  }

  changePriority() {
    console.log("obsługa change");
  }

  render() {
    return (
      <div className="App">
        TODO LIST
        <AddTask />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changePriority}
        />
      </div>
    );
  }
}

export default App;
