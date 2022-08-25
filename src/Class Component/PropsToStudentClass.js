import { Component } from "react";

class PropsToStudentClass extends Component {
    render() {
        return (
            <div>
                <h1>Student component class</h1>
                <h2>Hello {this.props.name}</h2>
                <h2>{this.props.email}</h2>
            </div>
        )
    }
}

export default PropsToStudentClass