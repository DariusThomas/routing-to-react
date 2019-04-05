import React from "react"

function Film(props) {
    return (
        <>
        <div className="card">
            <div className="card-body">
                <h5>{props.filmInfo.title}</h5>
                <p>{props.filmInfo.description}</p>
            </div>
        </div>

        </>
    )
}

export default Film