import { useState } from "react"

function ConditionalRendering() {
    const [loggedIn, setLoggedIn] = useState(false);
    return (
        <div>
            <h1>Conditional Rendering</h1>
            {
                loggedIn ?
                    <h2>Welcome Yuvraj</h2>
                    : <h2>Welcome Guest</h2>
            }
            <button onClick={() => setLoggedIn(true)}>Login</button>
        </div>
    )
}
export default ConditionalRendering