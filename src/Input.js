import React from 'react';
import { MdFormatAlignLeft } from 'react-icons/md';

function Input(props) {
    return (
        <div className="input__wrapper">
            {/* {...props} gives any props (key and value) of Input to <input> */}
            <input className="input" name="task" placeholder="Add a task..." {...props} />
            <MdFormatAlignLeft className="input__icon" fill="#ffffff4d" />
        </div>
    )
}

export { Input };