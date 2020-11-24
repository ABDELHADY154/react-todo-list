import React, { Component } from "react";

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      completed: this.props.completed,
      deleted: "false",
    };
  }

  completed = () => {
    this.setState({ completed: "true" });
  };

  unDo = () => {
    this.setState({ completed: "false" });
  };

  delete = () => {
    this.props.deleteItem(this.state.id);
  };

  render() {
    return (
      <li
        className={
          this.state.completed == "true"
            ? "list-group-item bg-success text-light"
            : "list-group-item"
        }
        key={this.props.id}
        hidden={this.state.deleted == "true" ? "hidden" : ""}
      >
        <div className="row">
          <span className="col-8">{this.props.task}</span>
          <span className="col-4 text-right">
            {this.state.completed == "false" ? (
              <button className="btn btn-success mr-2" onClick={this.completed}>
                <i className="fas fa-check"></i>
              </button>
            ) : (
              <button className="btn btn-success mr-2" onClick={this.unDo}>
                <i className="fas fa-undo"></i>
              </button>
            )}
            <button className="btn btn-danger" onClick={this.delete}>
              <i className="fas fa-times"></i>
            </button>
          </span>
        </div>
      </li>
    );
  }
}
