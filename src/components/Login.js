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
import mobile from "../images/mobile-login.svg";


const StyledDiv = styled.div`
  
  width: 900px;
  margin: 0 auto;

  .mid-section {
    color: green;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      width: 30rem;
    }
  }

  
  
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
      <section class="mid-section">
        <img src={mobile} />
        <div class="login-section">
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
        </div>
      </section>
    </StyledDiv>
  );
};

export default connect(
  null,
  { getInitialData }
)(Login);
