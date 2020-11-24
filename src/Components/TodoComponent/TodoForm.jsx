import React, { Component } from "react";
export default class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      id: 1,
      task: "",
      completed: "",
    };
  }

  changeHandler = e => {
    this.setState({
      task: e.target.value,
      completed: "false",
    });
  };
  submit = () => {
    this.setState({ id: this.state.id + 1 });
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-3">
          <h4>Task: </h4>
        </div>
        <div className="col-md-7">
          <input
            type="text"
            id="taskfield"
            className="form-control"
            placeholder="First name"
            name="task"
            onChange={this.changeHandler}
          />
        </div>
        <div className="col-md-2">
          {this.state.task ? (
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => {
                this.submit();
                this.props.task(this.state);
                document.getElementById("taskfield").value = "";
              }}
            >
              Add
            </button>
          ) : (
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => {
                this.submit();
                this.props.task(this.state);
                document.getElementById("taskfield").value = "";
              }}
              disabled
            >
              Add
            </button>
          )}
        </div>
      </div>
    );
  }
}
