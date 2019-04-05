import React, { Component } from "react";
class FilmInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstFilm: ['']
        }
    }
    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(response => response.json())
            .then(firstFilm => this.setState({ firstFilm }))
    }

    render() {
        return <>
            <h1>{this.state.firstFilm[0].title}</h1>
            <p>Director: {this.state.firstFilm[0].director}</p>
            <p>Producer: {this.state.firstFilm[0].producer}</p>
            <p>Release Date: {this.state.firstFilm[0].release_date}</p>
            <p>Score: {this.state.firstFilm[0].rt_score}</p>
            <p>{this.state.firstFilm[0].description}</p>
        </>
    }
}

export default FilmInfo