/*
 * React II code.
 * Feel free to get yourself familiar with it but
 * please do not modify it without letting Kate know first ✨
 *
 * Code's purpose: Allows to hide all private links that should be available
 * once a user signs in.
 */

import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("token") ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

export default PrivateRoute;
