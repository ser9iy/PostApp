import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import PostListItem from "./PostListItem";
export default class PostList extends React.Component {
  render() {
    return (
      <ol className="list-group">
        {this.props.data.map(item => (
          <PostListItem id={item.id} title={item.title} body={item.body} />
        ))}
      </ol>
    );
  }
}
