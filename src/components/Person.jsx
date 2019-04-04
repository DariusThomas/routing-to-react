import React from "react"

function Person(props) {
    return (
        <div className="card">
            <div className="card-body">
                <h5>{props.personInfo.name}</h5>
                <p>{props.personInfo.age}</p>
            </div>
        </div>
    )
}

export default Person