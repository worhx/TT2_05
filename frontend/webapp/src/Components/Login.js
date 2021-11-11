import { React, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import CustomButton from "../UI/CustomButton";
import Form from "react-bootstrap/Form";

const Login = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("Logging in...");
        const loginPayload = { username: username, password: password };
        axios
            .post(`http://worhx.ddns.net:5000/login`, loginPayload)
            .then((res) => {
                console.log(res);
                if (res.status === 200) {
                    localStorage.setItem("userId", res.data.id);
                    history.push("/home");
                }
            });
    };

    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Username"
                        onInput={(e) => {
                            setUsername(e.target.value);
                        }}
                    ></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        onInput={(e) => {
                            setPassword(e.target.value);
                        }}
                    ></Form.Control>
                </Form.Group>
                <CustomButton
                    size="lg"
                    variant="primary"
                    onClick={onSubmit}
                    placeholder="Login"
                />
            </Form>
        </div>
    );
};

export default Login;
