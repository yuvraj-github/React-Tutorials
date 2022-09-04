import React from 'react';

function ReuseChildComponent(props) {
    return (
        <div>
            <span>Name: {props.data.name}</span>
        </div>
    );
}

export default ReuseChildComponent;