import React, { Component } from "react"
import Person from "./Person"

class People extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peopleArr: []
        }
    }
    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/people")
            .then(response => response.json())
            .then(peopleArr => this.setState({ peopleArr }))
    }
    render() {
        return (
            <>
                {this.state.peopleArr.map(person => <Person key={person.id} personInfo={person} />)}
            </>

        )

    }
}

export default People