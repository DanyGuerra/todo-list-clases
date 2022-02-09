import React, { Component } from "react";
import "../css/form.css";
class Form extends Component {
  state = {
    textFieldContent: "",
  };

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.textFieldContent}
          onChange={(e) => {
            this.setState({ textFieldContent: e.target.value });
          }}
          className="input"
          placeholder="Activity"
        />
        <button
          className="button"
          onClick={(e) => {
            e.preventDefault();
            if (this.state.textFieldContent.length > 3) {
              this.props.createTodo(this.state.textFieldContent);
              this.setState({ textFieldContent: "" });
            }
          }}
        >
          Agregar
        </button>
      </form>
    );
  }
}

export default Form;
