import React, { Component } from "react";

export default class NewTodoForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todo: "",
        };
        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleValueChange(e) {
        this.setState({
            todo: e.target.value,
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.add(this.state);
        this.setState({ todo: "" });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="todo">New Todo</label>
                <input
                    type="text"
                    name="todo"
                    id="todo"
                    placeholder="New Todo"
                    value={this.state.todo}
                    onChange={this.handleValueChange}
                />
                <button>Add Todo</button>
            </form>
        );
    }
}
