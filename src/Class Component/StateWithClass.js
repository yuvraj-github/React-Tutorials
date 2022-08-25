import { Component } from "react";

class StateWithClass extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    render() {
        return (
            <div>
                <h3>State with Class Component</h3>
                <h5>Counter: {this.state.count}</h5>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Update Count</button>
            </div>

        )
    }
}

export default StateWithClass;