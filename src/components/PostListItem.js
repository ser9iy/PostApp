import React from "react";
import ReactDOM from "react-dom";

export default class PostListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps) {
    //console.log(nextProps.id);
    return nextProps.id !== undefined;
  }
  render() {
    let { id, title, body } = this.props;

    return (
      <li className="list-group-item" key={id}>
        <h5 className="text-justify">{title}</h5>
        <p className="text-justify">{body}</p>
      </li>
    );
  }
}
