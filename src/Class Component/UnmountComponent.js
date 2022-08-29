import { Component } from "react";

class UnmountComponent extends Component {
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    render() {
        return (
            <div>
                <h1> Unmount Component</h1>
            </div>
        )
    }
}

export default UnmountComponent