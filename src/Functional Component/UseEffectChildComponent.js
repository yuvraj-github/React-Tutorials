import React, { useEffect } from 'react';

function UseEffectChildComponent(props) {
    useEffect(() => {
        console.log('Child use effect.');
    },[props.data, props.count])
    return (
        <div>
            <h1>Call Use Effect Child Component</h1>
            <h1>Child Count {props.count}</h1>
            <h1>Child data {props.data}</h1>
        </div>
    );
}

export default UseEffectChildComponent;