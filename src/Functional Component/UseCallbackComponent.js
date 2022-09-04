/**
 * 
 * useCallback: returns memoized function but useMemo return memoized value.
 * It is used when a component in which child component is rendering again and again without need.
 * Actually it follows the concept of referential equality. It means component functions will recreate when 
 * component re-render.
 */

import React, { useCallback, useState } from 'react';
import UseCallbackChildComponent from './UseCallbackChildComponent';

function UseCallbackComponent(props) {
    const [add, setAdd] = useState(0);   
    const Learning = useCallback(() => {
        return 'Hello World';
    },[]);
    return (
        <div>
            <UseCallbackChildComponent Learning={Learning}/>
            <h1>Additon: {add}</h1>
            <button onClick={() => setAdd(add + 1)}>Addition</button>            
        </div>
    );
}

export default UseCallbackComponent;