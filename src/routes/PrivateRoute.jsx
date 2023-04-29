/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { AuthContext } from "../ContextProviders/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Button, Spinner } from "react-bootstrap";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);

  if (loading) {
    return (
      <>
        <Button variant="primary" disabled>
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Loading...
        </Button>
      </>
    );
  }

  if (user) {
    return children;
  } else {
    return (
      <Navigate to={"/login"} state={{ from: location }} replace></Navigate>
    );
  }
};

export default PrivateRoute;
