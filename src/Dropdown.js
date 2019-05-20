import React from 'react';

function Dropdown(props) {
    return (
        <div className="dropdown__wrapper">
            {props.trigger()}
            <div className="dropdown">
                {props.items.map((item) => (
                    <div>
                        <item.icon className="dropdown__icon" />
                        <span>{item.text}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export { Dropdown }