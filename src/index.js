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
            inputValue: '',
            tasks: []
        }
    }

    uniqueNumber = () => (
        Math.random().toString(36).substring(2)
        + (new Date()).getTime().toString(36)
    )


    handleAddTask = (event) => {
        event.preventDefault();
        console.log(event.target)
        this.setState({
            inputValue: event.target.value
        })
    }

    takeData = () => {
        const { inputValue } = this.state;
        const newTask = {
            id: this.uniqueNumber(),
            name: inputValue,
            hint: '',
            isPinned: false,
            isDone: false
        }
        this.setState({
            tasks: this.state.tasks.concat(newTask),
            inputValue: ''
        })
    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.takeData()
        }
    }
    // take one taked task
    handleDeleteTask = (deletedTask) => {
        // take a state
        const { tasks } = this.state

        return () => {
            // filtered tasks
            const nextTasks = tasks.filter((task) => {
                // returned all tasks wich do not the same haw id taked task
                return task.id !== deletedTask.id
            })

            // update state all task
            this.setState({
                tasks: nextTasks
            })
        }
    }

    handlePinTask = (pinTask) => {
        const { tasks } = this.state

        return () => {
            const netTasks = tasks.map((task) => {
                if (task.id === pinTask.id) {
                    task.isPinned = !task.isPinned
                }
                return task
            })
            this.setState({
                tasks: netTasks
            })

        }
    }

    render() {
        const { inputValue } = this.state;

        return (
            <div className="wrapper">
                <div className="container">
                    <h2>Title</h2>
                    <Input value={inputValue} onChange={this.handleAddTask} onKeyPress={this.handleKeyPress} />

                    {this.state.tasks.map((task) => (
                        <Task
                            key={task.id}
                            id={task.id}
                            label={task.name}
                            hint={task.hint}
                            isPinned={task.isPinned}
                            isDone={task.isDone}
                            onDelete={this.handleDeleteTask(task)}
                            onPin={this.handlePinTask(task)}
                        />
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