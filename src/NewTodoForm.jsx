import React, { Component } from "react";

export default class NewTodoForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            task: "",
        };
        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleValueChange(e) {
        this.setState({
            task: e.target.value,
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.add(this.state);
        this.setState({ task: "" });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="task">New Todo</label>
                <input
                    type="text"
                    name="task"
                    id="task"
                    placeholder="New Todo"
                    value={this.state.task}
                    onChange={this.handleValueChange}
                />
                <button>Add Todo</button>
            </form>
        );
    }
}
