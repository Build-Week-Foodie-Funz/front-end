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
  width: 100%;
  
  

  .mid-section {
    width: 700px;
    margin: 0 auto;
    color: green;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      width: 30rem;
    }
  }

  .waves {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40vh;
    border-radius: 5px;
    box-shadow: 0 2px 30px rgba(black, .2);
    background: lighten(#f0f4c3, 10%);
    position: relative;
    overflow: hidden;
    transform: translate3d(0, 0, 0);

    .wave {
      opacity: .4;
      position: absolute;
      top: 70%;
      // left: 20%;
      right: 0;
      left: 0;
      background: #d47019;
      width: 60em;
      height: 1100px;
      transform-origin: 50% 50%;
      border-radius: 43%;
      animation: drift 5000ms infinite linear;

      &.-two {
        left: -10em;
        margin: 0;
      }

      &.-three {
        animation: drift 8000ms infinite linear;
        left: 30em;
      }
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
      <div class='waves'>
        <div class='wave -one'></div>
        <div class='wave -two'></div>
        <div class='wave -three'></div>
        <div class='wave -four'></div>
        <div class='wave -five'></div>
      </div>
    </StyledDiv>
  );
};

export default connect(
  null,
  { getInitialData }
)(Login);
