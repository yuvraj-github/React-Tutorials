import {React,memo} from 'react';

function UseCallbackChildComponent(props) {
    console.log('Child component');
    return (
        <div>
            <h1>Use Callback Concept</h1>
            <span>{props.Learning()}</span>           
        </div>
    );
}

export default memo(UseCallbackChildComponent);