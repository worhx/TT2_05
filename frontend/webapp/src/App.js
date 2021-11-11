import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Components/Login";
import { Redirect } from "react-router";
import Logo from "./dbs_logo.svg";

function App() {
    return (
        <Router>
            <div className="App">
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <img src={Logo} alt="logo" />
                </div>
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
