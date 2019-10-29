import React from 'react';

const output = (props) => {
    return (
        <div>
            <p>My Username is: {props.usernameOne}</p>
            <p>My Username is: {props.usernameTwo}</p>
        </div>
    )
};

export default output;