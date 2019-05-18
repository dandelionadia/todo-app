import React from 'react';
import { Checkbox } from './Checkbox';

function Task() {
    return (
        <div className="task">
            <Checkbox name="checkbox" className="task__input" label="Lorem tex" hint="subtitle hint 2019" />
            <i className="fas fa-ellipsis-h task__icon"></i>
        </div>
    )
}

export { Task };