/*
 * React I code.
 * Feel free to get a head start on building the skeleton of this component.
 * Leave the styling off for later, instead try focusing on functionality first!
 *
 * Features:
 *  - A link to the sign up form
 *  - A link to the forgot ur password form
 *  - Email & password verification
 */

import React, { useState } from "react";
import { connect } from "react-redux";
import { getInitialData } from "../actions/actions";
import styled from "styled-components";


const StyledDiv = styled.div`
  color: green;
  
`

const Login = props => {
  const [credentials, setCredentials] = useState({});

  const login = e => {
    e.preventDefault();
    props.getInitialData(credentials, props.history);
  };

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  return (
    <StyledDiv>
      <h1>SIGN IN</h1>
      <form onSubmit={login}>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button>Log in</button>
      </form>
    </StyledDiv>
  );
};

export default connect(
  null,
  { getInitialData }
)(Login);
