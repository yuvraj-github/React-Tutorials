import { useState } from "react"

function PropsToStudent(props) {    
    return (
        <div>
            <h1>Student Component</h1>
            <h2>Student Name: {props.name}</h2>
            <h2>Student Email: {props.email}</h2>
            <h2>Student Address: {props.other.address}</h2>
            <h2>Student Mobile: {props.other.mobile}</h2>           
        </div>
    )
}

export default PropsToStudent