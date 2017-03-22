import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { firebaseConnect, isLoaded, isEmpty, dataToJS } from 'react-redux-firebase'

@firebaseConnect([
    'todos' // corresponds to 'todos' root on firebase
])
@connect(
    ({ firebase }) => ({
        // todos prop set to firebase data in redux under '/todos'
        todos: dataToJS(firebase, 'todos'),
    })
)
export default class Todos extends Component {
    static propTypes = {
        todos: PropTypes.object,
        firebase: PropTypes.object
    }

    handleAdd = () => {
        const {newTodo} = this.refs
        const { firebase } = this.props
        // Add a new todo to firebase
        firebase.push('/todos', { text: newTodo.value, done: false })
        newTodo.value = ''
    }

    render() {
        const { todos } = this.props;

        // Build Todos list if todos exist and are loaded
        const todosList = !isLoaded(todos)
            ? 'Loading'
            : isEmpty(todos)
                ? 'Todo list is empty'
                : Object.keys(todos).map(
                    (key, id) => (
                        <TodoItem key={key} id={id} todo={todos[key]}/>
                    )
                )

        return (
            <div>
                <h1>Todos</h1>
                <ul>
                    {todosList}
                </ul>
                <input type="text" ref="newTodo" />
                <button onClick={this.handleAdd}>
                    Add
                </button>
            </div>
        )
    }
}