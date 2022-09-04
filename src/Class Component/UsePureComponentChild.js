import React, { Component, PureComponent } from 'react';

class UsePureComponentChild extends PureComponent {
    render() {
        console.log('pure child component rendering');
        return (
            <div>
                <h1>Pure child component {this.props.count}</h1>
            </div>
        );
    }
}

export default UsePureComponentChild;