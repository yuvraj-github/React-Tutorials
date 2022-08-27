function PropsAsFunction(props) {
    return (
        <div>
            <h1>Props as function</h1>
            <button onClick={props.data}>Click Me</button>
        </div>
    )
}

export default PropsAsFunction