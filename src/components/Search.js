import React from "react";
import ReactDOM from "react-dom";

export default class Search extends React.Component {
  render() {
    return (
      <input
        type="text"
        placeholder="Enter to search"
        onChange={this.props.onCh}
      />
    );
  }
}
