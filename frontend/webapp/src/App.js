import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    useLocation,
} from "react-router-dom";
import Login from "./Components/Login";
import { Redirect } from "react-router";
import Logo from "./dbs_logo.svg";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Expenses from "./Components/Expenses";
import Expense from "./Components/Expense";

function App() {
    return (
        <Router>
            <div className="App">
                <div>
                    <Navbar bg="light">
                        <Container>
                            <Navbar.Brand href="/home">Some Name</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav>
                                    <Nav.Link href="/home">Home</Nav.Link>
                                    <Nav.Link href="/projects">
                                        Projects
                                    </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                            <Navbar.Collapse className="justify-content-end">
                                <Nav>
                                    <Nav.Link href="/login">Logout</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                        <img
                            src={Logo}
                            alt="logo"
                            style={{ marginRight: "30px" }}
                        />
                    </Navbar>
                </div>


                <Switch>
                    {/* <Redirect to="/login" /> */}
                    <Route path="/login">
                        <Login />
                    </Route>
                    {/* <Redirect to="/expenses" /> */}
                    <Route exact path="/expenses">
                        <Expenses />
                    </Route>
                  
                </Switch>
            </div>
        </Router>
    );
}

export default App;
