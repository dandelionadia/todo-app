import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from './Checkbox';
import { MdMoreHoriz } from 'react-icons/md';
import { GiPin } from 'react-icons/gi';

function Task(props) {
    return (
        <div className="task">
            {props.isPinned && <GiPin className="task__pin" />}
            <Checkbox name={props.id} className="task__input" label={props.label} hint={props.hint} />
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