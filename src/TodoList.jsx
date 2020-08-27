import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import uuid from "uuid/dist/v4";
import Todo from "./Todo";

export default class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [],
        };

        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.remove = this.remove.bind(this);
    }

    handleAddTodo(todo) {
        this.setState({
            todos: [...this.state.todos, { ...todo, id: uuid() }],
        });
    }

    remove(id) {
        const todos = this.state.todos.filter((todo) => todo.id !== id);
        this.setState({ todos });
    }

    render() {
        let todoslists = this.state.todos.map((todo) => (
            <Todo
                name={todo.todo}
                key={todo.id}
                id={todo.id}
                delete={this.remove}
            />
        ));
        return (
            <div>
                <h1>Todo List!</h1>
                <p>A Simple React Todo List App</p>
                {todoslists}
                <NewTodoForm add={this.handleAddTodo} />
            </div>
        );
    }
}
