import { useState } from "react"

function FormComponent() {
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [tnc, setTnc] = useState('');

    function getFormData(e) {
        e.preventDefault();
        console.log(name, city, tnc);
    }
    return (
        <div>
            <h1>Handle Form</h1>
            <form onSubmit={getFormData}>
                <input type="text" onChange={(e) => setName(e.target.value)} /><br /><br />
                <select onChange={(e) => setCity(e.target.value)}>
                    <option>Select City</option>
                    <option>Chandigarh</option>
                    <option>Zirakpur</option>
                    <option>Mohali</option>
                </select><br /><br />
                <input type="checkbox" onChange={(e) => setTnc(e.target.checked)} /><span>Accept Terms & Conditions</span><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default FormComponent