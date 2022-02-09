import React from "react";
import Checkmark from "./Checkmark";
import "../css/Todo.css";
class Todo extends React.Component {
  render() {
    return (
      <div className={`list-item ${this.props.task.done ? "done" : ""}`}>
        <input
          type="checkbox"
          checked={this.props.done}
          onClick={() => this.props.doTask(this.props.task.id)}
        />
        <div className="list-content">{this.props.task.content}</div>
        <div className="btn-delete">
          <button onClick={() => this.props.deleteTask(this.props.task.id)}>
            Borrar
          </button>
        </div>
        <Checkmark checkmark={this.props.task.done}></Checkmark>
      </div>
    );
  }
}

export default Todo;
