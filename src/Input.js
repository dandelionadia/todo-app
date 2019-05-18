import React from 'react';
import { MdFormatAlignLeft } from 'react-icons/md';

function Input() {
    return (
        <div className="input__wrapper">
            <input className="input" name="task" placeholder="Add a task..." />
            <MdFormatAlignLeft className="input__icon" fill="#ffffff4d" />
        </div>
    )
}

export { Input };