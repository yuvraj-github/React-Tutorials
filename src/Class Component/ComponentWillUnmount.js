/**
 * 
 * This is called before the component is destroyed or unmounted from the DOM.
 */

import { Component } from "react";
import UnmountComponent from "./UnmountComponent";

class ComponentWillUnmount extends Component {
    constructor() {
        super()
        this.state = {
            show: true
        }
    }
    render() {
        console.log('render')
        return (
            <div>
                {
                    this.state.show ?
                        <UnmountComponent /> :
                        <h3>Removed</h3>
                }
                <button onClick={() => this.setState({ show: !this.state.show })}>Remove component</button>
            </div>
        )
    }
}

export default ComponentWillUnmount