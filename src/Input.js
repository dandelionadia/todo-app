import React from 'react';

function Input() {
    return (
        <div className="input__wrapper">
            <input className="input" name="task" placeholder="Add a task..." />
            <i className="fas fa-align-left input__icon"></i>
        </div>
    )
}

export { Input };