import React, { Component } from "react";

export default class Todo extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <button>
                    <i className="fas fa-edit"></i>
                </button>
                <button onClick={() => this.props.delete(this.props.id)}>
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        );
    }
}
