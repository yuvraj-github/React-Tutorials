import { Component } from "react";

class ComponentDidUpdate extends Component {
    constructor() {
        super();
        this.state={
            name:'Yuvraj'
        }
        console.log('constructor');
    }
    componentDidUpdate () {
        console.log('componentDidUpdate');
    }
    render() {
        console.log('render');
        return (
            <div>
                <h1>Component Did Update</h1>
                <button onClick={() => this.setState({name:'Yuvi'})}>Click Me</button>
            </div>
        )
    }
}

export default ComponentDidUpdate