import React from "react";
import PropTypes from "prop-types";
import TodoList from "../Components/TodoList";

TodoFeature.propTypes = {

};

function TodoFeature(props) {
    const todoList = [
        {
            id : 1,
            title : "a"
        },
        {
            id: 2,
            title:"b"
        },
        {
            id:3,
            title:"c"
        }
    ]

    return (
        <div>
            <h3>TodoList</h3>
            <TodoList todoList={todoList} />
        </div>
    );
}

export default TodoFeature;