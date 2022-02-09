import { Component } from "react";
import "../css/Checkmark.css";

class Checkmark extends Component {
  render() {
    return (
      <span className={`checkmark ${this.props.checkmark ? "" : "dimmed"}`}>
        <div className="checkmark_stem"></div>
        <div className="checkmark_kick"></div>
      </span>
    );
  }
}

export default Checkmark;
