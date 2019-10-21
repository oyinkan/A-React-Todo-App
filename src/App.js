import React from 'react';
import TodoItem from './components/TodoItem';
import todosData from './components/todosData'
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }

    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} />)
        return(
            <div>
                <h2 style={{textAlign: 'center'}}>My To-do App</h2>
                <div className="todo-list">
                    {todoItems}
                </div>
            </div>
        )
    }
} 



export default App;
