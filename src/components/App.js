import React, { Component } from "react";
import Header from "./Header";
import Form from "./Form";
import TodoList from "./TodoList";
import "../css/App.css";

class App extends Component {
  state = {
    tasks: [
      { id: 1, content: "Lavar los trastes ", done: false },
      { id: 2, content: "Mandar correo a la division", done: false },
      { id: 3, content: "Sacar a pasear al perro", done: false },
      { id: 4, content: "Sacar cita con el Doc", done: false },
      { id: 5, content: "Contestar encuesta de ingles", done: false },
    ],
  };

  createTodo(todoContent, idParameter) {
    this.setState({
      tasks: [
        ...this.state.tasks,
        { id: todoContent, content: todoContent, done: false },
      ],
    });
  }

  doTask(idParameter) {
    const taskIndex = this.state.tasks.findIndex(
      (item) => item.id === idParameter
    );
    const tasksCopy = [...this.state.tasks];
    tasksCopy[taskIndex] = {
      ...tasksCopy[taskIndex],
      done: !this.state.tasks[taskIndex].done,
    };
    this.setState({ tasks: tasksCopy });
  }

  deleteTask(idParameter) {
    let tasksCopy = [...this.state.tasks].filter(
      (task) => task.id !== idParameter
    );
    this.setState({ tasks: tasksCopy });
  }

  render() {
    return (
      <div className="wrapper">
        <Header>
          <div>Total tareas: {this.state.tasks.length}</div>
          <div>
            Tareas pendientes:{" "}
            {this.state.tasks.filter((task) => !task.done).length}
          </div>
        </Header>
        <div className="card frame">
          <Form
            createTodo={(value) => {
              this.createTodo(value);
            }}
          ></Form>
          <TodoList
            tasks={this.state.tasks}
            doTask={(id) => this.doTask(id)}
            deleteTask={(id) => this.deleteTask(id)}
          ></TodoList>
        </div>
      </div>
    );
  }
}

export default App;
