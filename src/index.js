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
                    name: 'name',
                    hint: 'hint',
                    isPinned: true,
                    isDone: false
                },
                {
                    name: 'name',
                    hint: null,
                    isPinned: false,
                    isDone: false
                }
            ]
        }
    }

    render() {
        return (
            <div className="wrapper">
                <div className="container">
                    <h2>Title</h2>
                    <Input />
                    {this.state.tasks.map((task) => (
                        <Task label={task.name} hint={task.hint} isPinned={task.isPinned} isDone={task.isDone} />
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