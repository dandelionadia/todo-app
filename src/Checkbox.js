import React from 'react';

const Checkbox = (props) => {
    return (
        <div className={props.className}>
            <input id={props.name} type="checkbox" name={props.name} />
            <label for={props.name}>{props.label}</label>
        </div>
    )
}

export { Checkbox };