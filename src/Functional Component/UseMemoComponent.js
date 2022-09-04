/**
 * 
 * useMemo: This hook is used to increase performation of application. It is used to stop unnecessary function call.
 *          It only runs when one of its dependecies update. It returns memoized value.
 */

import React, { useMemo, useState } from 'react';

function UseMemoComponent(props) {
    const [add, setAdd] = useState(0);
    const [sub, setSub] = useState(100);
    const multiplication = useMemo(function multiply() {
        console.log('multiply called');
        return add * 2;
    }, [add]);

    return (
        <div>
            <h1>Use Memo Hook</h1>
            <h1>Addition: {add}</h1>
            <h1>Subtraction: {sub}</h1>
            <h1>Multiplication: {multiplication}</h1>
            <button onClick={() => setAdd(add + 1)}>Add</button>||
            <button onClick={() => setSub(sub - 1)}>Subtract</button>
        </div>
    );
}

export default UseMemoComponent;