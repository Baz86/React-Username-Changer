import React from 'react';

const input = (props) => {
    console.log(props);
    return (
        <div>
            <input type="text" onChange={props.changed} value={props.currentName} />
        </div>
    )
};

export default input;

