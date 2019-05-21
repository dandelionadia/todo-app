import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from './Checkbox';
import { Dropdown } from './Dropdown';
import { GiPin } from 'react-icons/gi';
import { IoMdTrash } from 'react-icons/io'
import { MdMoreHoriz } from 'react-icons/md';
import { IoMdDocument } from 'react-icons/io';

function Task(props) {
    return (
        <div className="task">
            {props.isPinned && <GiPin className="task__pin" />}
            <Checkbox name={props.id} className="task__input" label={props.label} hint={props.hint} />
            <Dropdown trigger={({ onClick }) => {
                return (
                    <MdMoreHoriz onClick={onClick} fill="#ffffff4d" size="25px" />
                )
            }}
                items={[
                    {
                        icon: GiPin,
                        text: 'Pin task',
                    },
                    {
                        icon: IoMdTrash,
                        text: 'Delete'
                    },
                    {
                        icon: IoMdDocument,
                        text: 'Delete'
                    }
                ]}
            />
        </div>
    )
}

Task.propTypes = {
    label: PropTypes.string.isRequired,
    hint: PropTypes.string,
    isPinned: PropTypes.bool
}

export { Task };