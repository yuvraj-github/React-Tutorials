/**
 * useEffect: Life cycle method of functional component. It calls when component mount, state/props updated.
 * We can use more than one useEffect in our component.
 */

import React, { useEffect, useState } from 'react';
import UseEffectChildComponent from './UseEffectChildComponent';

function UseEffectComponent() {
    const[count, setCount] = useState(0);
    const[data, setData] = useState(10);
    useEffect(() => {
        console.log('parent useEffect');
    },[count]);  // stop calling useEffect when blank array passed.
    // useEffect(() => {
    //     console.log('parent useEffect for data');
    // },[data]);
    return (
        <div>
            <h1>Use Effect Count {count}</h1>
            <h1>Use Effect Data {data}</h1>
            <button onClick={() => setCount(count+1)}>Count</button>
            <button onClick={() => setData(data+1)}>Data</button>
            <UseEffectChildComponent count={count} data={data}/>
        </div>
    );
}

export default UseEffectComponent;