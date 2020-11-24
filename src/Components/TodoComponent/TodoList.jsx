import React, { Component } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
    this.tasks = [];
  }

  deleteItem = id => {
    this.state.tasks.map(item => {
      if (item.id === id) {
        var index = this.state.tasks.indexOf(item);
        this.state.tasks.splice(index, 1);
        this.forceUpdate();
      }
    });
  };

  data = task => {
    this.tasks.push({
      id: task.id,
      task: task.task,
      completed: task.completed,
    });
    this.setState({
      tasks: this.tasks,
    });
  };

  render() {
    var tasks = this.state.tasks;
    return (
      <div className="">
        <div className="card-header text-left">
          <ul className="list-group text-left">
            {tasks.map(task => (
              <TodoItem
                key={task.id}
                id={task.id}
                task={task.task}
                completed={task.completed}
                deleteItem={this.deleteItem}
              />
            ))}
          </ul>
        </div>
        <div className="card-body  bg-light">
          <TodoForm task={this.data} />
        </div>
      </div>
    );
  }
}
