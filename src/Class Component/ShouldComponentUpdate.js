/**
 * 
 * Stop component rerendering on update of state of props.
 */


import { Component } from "react";

class ShoudComponentUpdate extends Component {
    constructor() {
        super();
        this.state = {
            count:0
        }
    }
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        return true;
    }   
    render() {
        console.log('render');
        return (
            <div>
                <h1>Should Component Update {this.state.count}</h1>
                <button onClick={() => this.setState({count: this.state.count+1})}>Click Me</button>
            </div>
        )
    }
}

export default ShoudComponentUpdate