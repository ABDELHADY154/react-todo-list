import React, { Component } from "react";
import TodoList from "./TodoList";

export default class Todo extends Component {
  render() {
    return (
      <div className="card shadow bg-light rounded w-75">
        <TodoList />
      </div>
    );
  }
}
