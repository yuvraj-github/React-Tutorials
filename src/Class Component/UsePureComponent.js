/**
 * 
 * PureComponent: stop component unnecessary rendering when state/props is not updated.
 */

import React, { Component } from 'react';
import UsePureComponentChild from './UsePureComponentChild';

class UsePureComponent extends Component {
    constructor() {
        super();
        this.state = {
            count: 1
        }
    }
    render() {
        return (           
            <div>
                <UsePureComponentChild count={this.state.count}/>
                <button onClick={() => this.setState({count: this.state.count})}>Update Count</button>
            </div>
        );
    }
}

export default UsePureComponent;