import { useState } from "react"

function InputComponent() {
    const [data, setData] = useState('');
    const [printData, setPrintData] = useState(false);
    function handleData(e) {
        console.log(e.target.value);
        setData(e.target.value);
    }
    return (
        <div>
            <h1>Input field component</h1>
            {
                printData ?
                <h2>{data}</h2>
                :null
            }
            <input type="text" onChange={handleData}/>
            <button onClick={() => setPrintData(true)}>Print Data</button>
        </div>
    )
}

export default InputComponent