import React, { Component, Fragment} from "react";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Home from "./Home";
import People from "./People";
import Films from "./Films";
import FilmInfo from "./FilmInfo"

class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                <Link to ="/" className=" btn btn-primary m-1">Go Home</Link>
                <Link to="/films" className=" btn btn-primary m-1">View Films</Link>
                <Link to="/films/some-ext" className=" btn btn-primary m-1"> Castle in the Sky Info</Link>
                <Link to="/people" className=" btn btn-primary m-1"> View People</Link>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route eact path ="/people" component={People} />
                    <Route exact path="/films" component ={Films} />
                    <Route exact path="/films/:id" component ={FilmInfo} />
                </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default App