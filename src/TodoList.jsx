import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import uuid from "uuid/dist/v4";
import Todo from "./Todo";
import "./TodoList.css";

export default class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [],
        };

        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
    }

    handleAddTodo(todo) {
        this.setState({
            todos: [
                ...this.state.todos,
                { ...todo, id: uuid(), completed: false },
            ],
        });
    }

    remove(id) {
        const todos = this.state.todos.filter((todo) => todo.id !== id);
        this.setState({ todos });
    }
    update(id, updatedTask) {
        const updatedTodos = this.state.todos.map((t) => {
            if (t.id === id) {
                return { ...t, task: updatedTask };
            }
            return t;
        });
        this.setState({
            todos: updatedTodos,
        });
    }
    toggleCompletion(id) {
        const updatedTodos = this.state.todos.map((t) => {
            if (t.id === id) {
                return { ...t, completed: !t.completed };
            }
            return t;
        });
        this.setState({
            todos: updatedTodos,
        });
    }

    render() {
        let todoslists = this.state.todos.map((todo) => (
            <Todo
                task={todo.task}
                key={todo.id}
                id={todo.id}
                completed={todo.completed}
                delete={this.remove}
                update={this.update}
                toggleTodo={this.toggleCompletion}
            />
        ));
        return (
            <div className="TodoList">
                <h1>
                    Todo List <span>A Simple React Todo List</span>
                </h1>
                <ul>{todoslists}</ul>
                <NewTodoForm add={this.handleAddTodo} />
            </div>
        );
    }
}
