import React, { Component } from "react";
class FilmInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstFilm: []
        }
    }
    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(firstFilm => this.setState({ firstFilm }))
    }

    render() {
        return <>
            <h1>{this.state.firstFilm.title}</h1>
            <p>Director: {this.state.firstFilm.director}</p>
            <p>Producer: {this.state.firstFilm.producer}</p>
            <p>Release Date: {this.state.firstFilm.release_date}</p>
            <p>Score: {this.state.firstFilm.rt_score}</p>
            <p>{this.state.firstFilm.description}</p>
        </>
    }
}

export default FilmInfo