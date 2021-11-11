import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Components/Login";
import { Redirect } from "react-router";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    {/* <Redirect to="/login" /> */}
                    <Route exact path="/login">
                        <Login />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
