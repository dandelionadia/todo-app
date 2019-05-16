import React from 'react';
import ReactDOM from 'react-dom';
import { Input } from './Input';
import { Task } from './Task';
import './index.css';
import './style.scss';

class App extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <div className="container">
                    <h2>Title</h2>
                    <Input />
                    <Task />
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);