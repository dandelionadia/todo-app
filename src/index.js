import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.scss';

class App extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <div className="container">
                    <h2>Title</h2>
                    <div className="input__wrapper">
                        <input className="input" name="task" placeholder="Add a task..." />
                        <i className="fas fa-align-left input__icon"></i>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);