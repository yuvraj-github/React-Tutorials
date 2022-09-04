import React from 'react';
import ReuseChildComponent from './ReuseChildComponent';

function ReuseComponent(props) {
    const students = [
        { name: 'a', address: 'dfdsfd' },
        { name: 'b', address: 'erere' }
    ];
    return (
        <div>
            <h1>Reuse Component</h1>
            {
                students.map((item, i) => 
                    <ReuseChildComponent data={item}/>
                )
            }
        </div>
    );
}

export default ReuseComponent;