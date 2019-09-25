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
import { Formik, Form, Field, ErrorMessage } from 'formik';


const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .mid-section {
    width: 950px;
    margin: 0 auto;
    color: green;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    img {
      width: 400px;
      margin-top: 20px;
    }

    .login-section {

      width: 300px;
      button {
        width: 40%;
      }
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

      &.-one {
        left: -10em;
        margin: 0;
      }

      &.-three {
        animation: drift 8000ms infinite linear;
        left: 30em;
      }

      &.-two {
        animation: drift 5000ms infinite linear;
        opacity: .15;
        left: 50em;
      }

      &.-four {
        animation: drift 8000ms infinite linear;
        opacity: .26;
        left: -20em;
        margin: 0;
      }

      &.-five {
        animation: drift 3000ms infinite linear;
        opacity: 0.3;
        // margin-right: 90%;
      }

      @keyframes drift {
        from { transform: rotate(0deg); }
        from { transform: rotate(360deg); }
      }
    }
    &:after {
      content: '';
      display: block;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;      
      z-index: 11;
      transform: translate3d(0, 0, 0);
    }
  }  
`

const initialCredentials = {
  email: '',
  password: '',
};

const Login = props => {
  const [credentials, setCredentials] = useState(initialCredentials);

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
          <Formik
            onSubmit={login}
            initialValues={initialCredentials}
            render={props => {
              return (
                <Form>
                  <Field
                    type="text"
                    name="username"
                    value={credentials.username}
                    onChange={handleChange}
                  />
                  <Field
                    type="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                  />
                  <button>Sign in</button>
                  <button>Sign up</button>
                </Form>
              )
            }}
          />
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
