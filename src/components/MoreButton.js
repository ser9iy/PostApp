import React from "react";
import ReactDOM from "react-dom";

export default class MoreButton extends React.Component {
  render() {
    return (
      <button className="btn btn-info" onClick={this.props.onClick}>
        More
      </button>
    );
  }
}
