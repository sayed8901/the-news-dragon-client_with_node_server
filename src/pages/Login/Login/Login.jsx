/* eslint-disable react/no-unescaped-entities */
import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../ContextProviders/AuthProvider";
import useTitle from "../../../Hooks/useTitle";

const Login = () => {
  const { userLogin, errorMsg, setErrorMsg, successMsg, setSuccessMsg } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  useTitle('Login');

  const fromLocation = location.state?.from?.pathname || '/category/0' ;
  // console.log(fromLocation);

  const handleLogin = (event) => {
    setErrorMsg('');
    setSuccessMsg('');
    
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    userLogin(email, password)
    .then(result => {
      const LoggedUser = result.user;
      console.log(LoggedUser);
      setSuccessMsg('User Logged in Successfully.')

      form.reset();

      navigate(fromLocation, {replace:true});
    })
    .catch(error => {
      console.log(error.message);
      setErrorMsg(error.message);
    })
  }

  return (
    <Container className="mx-auto w-25">
      <h4>Please Login!</h4>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me!"/>
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>


        <br />

        <Form.Text className="text-secondary">
          Don't have an account? <Link to={"/register"}>Register</Link>
        </Form.Text>

        <p className="mt-3">{errorMsg ? errorMsg : successMsg }</p>
        
      </Form>
    </Container>
  );
};

export default Login;
