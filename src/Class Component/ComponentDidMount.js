/**
 * React Lifecycle has three phases: Mounting, Updating, Unmounting.
 * ComponentDidMount:  It is invoked immediately after the component is mounted.
 */

import { Component } from "react";

class ComponentDidMount extends Component {
    constructor(){
        super();
        console.log('constructor');
    }
    componentDidMount () {
        console.log('componentDidMount');
    }
    render() {
        console.log('render')
        return (
            <div>
                <h1>Component Did Mount</h1>
            </div>
        )
    }
}

export default ComponentDidMount
