import React, { Component } from "react"
import Film from "./Film"
class Films extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filmsArr: []
        }
    }
    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(response => response.json())
            .then(filmsArr => this.setState({ filmsArr }))
    }
    render() {
        return <>
            {this.state.filmsArr.map(film => <Film key={film.id} filmInfo={film} />)}
        </>
    }
}

export default Films