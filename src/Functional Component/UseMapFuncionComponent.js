import React from 'react';

function UseMapFuncionComponent(props) {
    // const students = ['a', 'b', 'c', 'd'];
    const students = [
        { name: 'a', address: 'dfdsfd' },
        { name: 'b', address: 'erere' }
    ];
    return (
        <div>
            <h1>Use map function</h1>
            {
                students.map((data, key) =>
                    <h2>{data.name}</h2>
)
            }
        </div>
    );
}

export default UseMapFuncionComponent;