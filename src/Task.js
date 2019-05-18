import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from './Checkbox';
import { MdMoreHoriz } from 'react-icons/md';

function Task(props) {
    return (
        <div className="task">
            {props.isPinned && <span>* </span>}
            <Checkbox name="checkbox" className="task__input" label={props.label} hint={props.hint} />
            <MdMoreHoriz fill="#ffffff4d" size="25px" />
        </div>
    )
}

Task.propTypes = {
    label: PropTypes.string.isRequired,
    hint: PropTypes.string,
    isPinned: PropTypes.bool
}

export { Task };