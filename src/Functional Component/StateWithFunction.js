import { useState } from "react";

function StateWithFunction() {
    const[count, setCount] = useState(0);
    return (        
        <div>
            <h3>State with functional component</h3>
            <h5>Counter: {count}</h5>
            <button onClick={() => setCount(count+1)}>Update Counter</button>
        </div>
    )
}

export default StateWithFunction;