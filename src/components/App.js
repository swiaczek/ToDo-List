import React, { Component } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import "./css/App.css";

class App extends Component {
  state = {
    tasks: [],
    active: false
  };

  deleteTask = id => {
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

  addTask = (text, priority) => {
    const counter = this.state.tasks.length;
    const task = {
      id: counter,
      text,
      priority,
      done: false
    };
    this.counter++;

    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }));
    return true;
  };

  sortColumn = field => {
    const tasks = [...this.state.tasks];
    if (this.state.active) {
      tasks.sort((a, b) => b[field] - a[field]);
      this.setState({
        tasks
      });
    } else {
      tasks.sort((a, b) => a[field] - b[field]);
      this.setState({
        tasks
      });
    }
    this.setState({
      active: !this.state.active
    });
  };

  componentDidMount() {
    if (!localStorage.todoListState) {
      localStorage.setItem("todoListState", JSON.stringify(this.state.tasks));
    }
    const localTodoArray = JSON.parse(localStorage.todoListState);
    this.setState({
      tasks: localTodoArray
    });
  }

  componentDidUpdate() {
    localStorage.setItem("todoListState", JSON.stringify(this.state.tasks));
  }

  render() {
    return (
      <div className="App">
        <h1>ToDo List</h1>
        <div className="line"></div>
        <AddTask add={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changePriority}
          sortColumn={this.sortColumn}
          textSort={this.textSort}
          doneSort={this.doneSort}
          prioritySort={this.prioritySort}
          active={this.state.active}
        />
      </div>
    );
  }
}

export default App;
