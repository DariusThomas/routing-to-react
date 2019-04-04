import React, { Component, Fragment} from "react";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Home from "./Home";
import People from "./People";
import Films from "./Films";

class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                <Link to ="/" className=" btn btn-primary m-1">Go Home</Link>
                <Link to="/films" className=" btn btn-primary m-1">View Films</Link>
                <Link to="/people"className=" btn btn-primary m-1"> View People</Link>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route eact path ="/people" component={People} />
                    <Route exact path="/films" component ={Films} />
                </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default App