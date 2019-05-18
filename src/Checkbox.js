import React from 'react';

const Checkbox = (props) => {
    return (
        <div className={props.className}>
            <input id={props.name} type="checkbox" name={props.name} />
            <label htmlFor={props.name}>
                {props.label}
                <p className="checkbox__hint">{props.hint}</p>
            </label>
        </div>
    )
}

export { Checkbox };