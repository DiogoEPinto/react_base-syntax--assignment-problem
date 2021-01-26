import React from 'react';

const userOutput= (props) => {
    return (
        <div className="UserOutput">
            <p>{props.username}</p>
            <p>Text 2</p>
        </div>
    )
}

export default userOutput;