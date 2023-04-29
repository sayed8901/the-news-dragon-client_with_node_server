import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../ContextProviders/AuthProvider";

const NavigationBar = () => {
    const {user, logOut} = useContext(AuthContext);
    console.log(user);

    const handleLogOut = () => {
      logOut()
      .then(console.log('User signed out seccessfully.'))
      .catch(error => clg(error.message))
    }

  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Link className="text-decoration-none" to="/category/0">
                Home
              </Link>
              <Link className="px-4 text-decoration-none" to="#pricing">
                About
              </Link>
              <Link className="text-decoration-none" to="#pricing">
                Career
              </Link>
            </Nav>

            <Nav className="d-flex align-items-center gap-2">
              {user && (
                  <FaUserCircle style={{ fontSize: "2rem" }} />
              )}

                {user ? (
                  <Button onClick={handleLogOut} variant="secondary">Log out</Button>
                ) : (
                  <Link to={"/login"}>
                    <Button variant="secondary">Log in</Button>
                  </Link>
                )}

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;