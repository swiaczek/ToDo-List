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

  deleteTask = id => {
    console.log("działą");
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(task => task.id === id);
    tasks.splice(index, 1);
    this.setState({
      tasks
    });
  };

  changePriority = id => {
    const tasks = [...this.state.tasks];
    tasks.forEach(task => {
      if (task.id === id) {
        task.done = !task.done;
      }
    });
    this.setState({
      tasks
    });
  };

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
