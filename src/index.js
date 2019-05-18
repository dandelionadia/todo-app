import React from 'react';
import ReactDOM from 'react-dom';
import { Input } from './Input';
import { Task } from './Task';
import './index.css';
import './style.scss';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: [
                {
                    id: this.uniqueNumber(),
                    name: 'name',
                    hint: 'hint',
                    isPinned: true,
                    isDone: false
                },
                {
                    id: this.uniqueNumber(),
                    name: 'name',
                    hint: null,
                    isPinned: false,
                    isDone: false
                }
            ]
        }
    }

    uniqueNumber = () => (
        Math.random().toString(36).substring(2)
        + (new Date()).getTime().toString(36)
    )

    render() {
        return (
            <div className="wrapper">
                <div className="container">
                    <h2>Title</h2>
                    <Input />
                    {this.state.tasks.map((task) => (
                        <Task id={task.id} label={task.name} hint={task.hint} isPinned={task.isPinned} isDone={task.isDone} />
                    ))}
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);