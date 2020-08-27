import React, { Component } from "react";
import "./Todo.css";

export default class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false,
            task: this.props.task,
        };
        this.toggleForm = this.toggleForm.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    toggleForm() {
        this.setState({ isEditing: !this.state.isEditing });
    }
    handleUpdate(e) {
        e.preventDefault();
        this.props.update(this.props.id, this.state.task);
        this.setState({ isEditing: false });
    }
    handleValueChange(e) {
        this.setState({
            task: e.target.value,
        });
    }
    handleToggle() {
        this.props.toggleTodo(this.props.id);
    }

    render() {
        let result;
        if (this.state.isEditing) {
            result = (
                <div>
                    <form onSubmit={this.handleUpdate}>
                        <input
                            type="text"
                            value={this.state.task}
                            name="task"
                            onChange={this.handleValueChange}
                        />
                        <button type="submit">Save</button>
                    </form>
                </div>
            );
        } else {
            result = (
                <div>
                    <li
                        className={this.props.completed ? "completed" : ""}
                        onClick={this.handleToggle}
                    >
                        {this.props.task}
                    </li>
                    <button onClick={this.toggleForm}>
                        <i className="fas fa-edit"></i>
                    </button>
                    <button onClick={() => this.props.delete(this.props.id)}>
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
            );
        }
        return result;
    }
}
