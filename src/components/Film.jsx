import React from "react"
import {Link} from "react-router-dom"

function Film(props) {
    return (
        <>
        <div className="card">
            <div className="card-body">
                <h5>{props.filmInfo.title}</h5>
                <p>{props.filmInfo.description}</p>
                <Link to={`/films/${props.filmInfo.id}`} className=" btn btn-primary m-1">More Info</Link>
                <p></p>
            </div>
        </div>

        </>
    )
}

export default Film