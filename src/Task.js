import React from 'react';

function Task() {
    return (
        <div className="task">
            <div className="task__wrapper-input">
                <input className="checkbox" id="task" type="checkbox" name="task" checked />
                <label className="task__label" for="task">Getting at invite for  dribble</label>
            </div>
            <i className="fas fa-ellipsis-h task__icon"></i>
        </div>
    )
}

export { Task };