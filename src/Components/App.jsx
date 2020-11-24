import React, { Component } from "react";
import "../Components/App.css";
import Todo from "./TodoComponent/Todo";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className=" App">
          <div className="App-header">
            <Todo />
          </div>
        </div>
      </div>
    );
  }
}
