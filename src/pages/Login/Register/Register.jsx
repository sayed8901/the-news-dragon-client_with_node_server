import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../ContextProviders/AuthProvider";

const Register = () => {
  const { createUser, updateUserData } = useContext(AuthContext);

  const [accepted, setAccepted] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const imgThumb = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, imgThumb, email, password);

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        form.reset();
      })
      .catch((error) => {
        console.log(error.message);
      });

    // updating user data to firebase auth
    updateUserData(name, imgThumb)
      .then(() => {
        console.log("Profile updated successfully.");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleChecked = (event) => {
    // console.log(event.target.checked);
    setAccepted(event.target.checked);
  }

  return (
    <Container className="mx-auto w-25">
      <h4>Registration form!</h4>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhotoUrl">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            type="text"
            name="photo"
            placeholder="Enter Photo URL"
            required
          />
        </Form.Group>

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
          <Form.Check
            onClick={handleChecked}
            type="checkbox"
            name="accept"
            label={
              <>
                Accept <Link to={"/terms"}>Terms & Conditions</Link>
              </>
            }
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" disabled={!accepted}>
          Register
        </Button>

        <br />

        <Form.Text className="text-secondary">
          Already have an account? <Link to={"/login"}>Login</Link>
        </Form.Text>
        <Form.Text className="text-success"></Form.Text>
        <Form.Text className="text-danger"></Form.Text>
      </Form>
    </Container>
  );
};

export default Register;