import React, { Component } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import "./css/App.css";

class App extends Component {
  state = {
    tasks: [],
    active: true
  };

  deleteTask = id => {
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(task => task.id === id);
    tasks.splice(index, 1);
    this.setState({
      tasks
    });
  };

  editTask = id => {
    const tasks = [...this.state.tasks];
    const task = tasks.find(task => task.id === id);
    task.edit = !task.edit;

    this.setState({
      tasks
    });
  };

  changeDone = id => {
    const tasks = [...this.state.tasks];
    const task = tasks.find(task => task.id === id);
    task.done = !task.done;

    this.setState({
      tasks
    });
  };

  handleEditText = (id, event) => {
    const tasks = [...this.state.tasks];
    const task = tasks.find(task => task.id === id);
    task.text = event.target.value;
    this.setState({
      tasks
    });
  };

  handleEditPriority = (id, event) => {
    const tasks = [...this.state.tasks];
    const task = tasks.find(task => task.id === id);
    task.priority = event.target.value;
    console.log(task.priority);
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
      done: false,
      edit: false
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
      tasks.sort((a, b) =>
        a[field] > b[field] ? 1 : b[field] > a[field] ? -1 : 0
      );
      this.setState({
        tasks
      });
    } else {
      tasks.sort((a, b) =>
        b[field] > a[field] ? 1 : a[field] > b[field] ? -1 : 0
      );
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
      localStorage.setItem("todoListState", JSON.stringify(this.state));
    }
    const localTodoArray = JSON.parse(localStorage.todoListState);
    this.setState({
      tasks: localTodoArray.tasks,
      active: localTodoArray.active
    });
  }

  componentDidUpdate() {
    localStorage.setItem("todoListState", JSON.stringify(this.state));
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
          change={this.changeDone}
          handleEditText={this.handleEditText}
          handleEditPriority={this.handleEditPriority}
          sortColumn={this.sortColumn}
          editTask={this.editTask}
          active={this.state.active}
        />
      </div>
    );
  }
}

export default App;
