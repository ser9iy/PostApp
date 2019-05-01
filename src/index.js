import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import PostList from "./components/PostList";
import MoreButton from "./components/MoreButton";
import Search from "./components/Search";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      posts: [],
      nToDisplay: 10,
      searchSt: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(data => {
        this.setState({
          posts: data,
          isLoading: false
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  handleClick() {
    //const n=this.nToDisplay+10;
    this.setState({ ...this.posts, nToDisplay: this.state.nToDisplay + 10 });
    // console.log(this.state);
  }
  handleChange(event) {
    this.setState({ searchSt: event.target.value, nToDisplay: 10 });
    // console.log(this.state.searchSt)
  }
  render() {
    let modData = this.state.posts.filter(post =>
      post.title.toLowerCase().includes(this.state.searchSt)
    );
    if (modData.length > 10) {
      modData = modData.slice(0, this.state.nToDisplay);
    }

    return (
      <div className="App">
        <h3>Posts app</h3>
        <Search onCh={this.handleChange} />
        <hr />
        <PostList data={modData} />
        <MoreButton onClick={this.handleClick} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
