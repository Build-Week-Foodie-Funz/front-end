/*
 * React I code.
 * Feel free to get a head start on building the skeleton of this component.
 * Leave the styling off for later, instead try focusing on functionality first!
 *
 * Features:
 *  - A link to the sign in form
 *  - A link to the forgot ur password form
 *  - Email & password verification
 */
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createUser, getInitialData } from "../actions/actions";
import { Form, Field, withFormik } from "formik";
import styled from "styled-components";
import * as Yup from "yup";
import axios from "axios";
import "../styles/button.scss";

const UserContainer = styled.div`
  background-color: #fbfcee;
  width: 100%;
`;

const UserInput = styled.div`
  padding-left: 10px;
  color: red;
  height: 50px;
`;
const InputContainer = styled.div`
  background-color: #fbfcee;
`;

const StyledField = styled.input`
  color: gray;
  margin: 20px;
  padding: 5px;
  padding-left: 15px;
  width: 200px;
  height: 2vh;
  font-size: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  margin: 0 auto;
`;

const SignUp = props => {
  return (
    <UserContainer>
      <div class="header">Sign Up</div>
      <Form
        id="signup-form"
        onSubmit={e => {
          e.preventDefault();
          let call = props.createUser({
            username: document.getElementById("signup-username").value,
            email: document.getElementById("signup-email").value,
            password: document.getElementById("signup-password").value,
            location: document.getElementById("signup-location").value
          });
          props.history.push("/login");
          return call;
        }}
      >
        <InputContainer>
          <UserInput>
            <StyledField
              id="signup-username"
              type="text"
              name="username"
              placeholder="Username:"
            />
            {/* {touched.username && errors.username && (
              <p classname="error">{errors.username}</p>
            )} */}
          </UserInput>
          <UserInput>
            <StyledField
              name="email"
              type="email"
              id="signup-email"
              placeholder="Email address:"
            />
            {/* {touched.email && errors.email && (
              <p className="error">{errors.email}</p>
            )} */}
          </UserInput>
          <UserInput>
            <StyledField
              name="password"
              id="signup-password"
              type="password"
              placeholder="Enter Your Password:"
            />
            {/* {touched.password && errors.password && (
              <p className="error">{errors.password}</p>
            )} */}
          </UserInput>
          <UserInput>
            <StyledField
              id="signup-location"
              name="area"
              type="text"
              placeholder="Location"
            />
            {/* {touched.area && errors.area && (
              <p className="error">{errors.area}</p>
            )} */}
          </UserInput>
        </InputContainer>
        Forgot password? <a href="#">reset</a>
        <ButtonContainer>
          <button className="btn" type="submit">
            Sign Up
          </button>
          <button type="button" className="btn-2">
            Sign In
          </button>
        </ButtonContainer>
      </Form>
      {/* {users.map(item => (
        <ul key={item.id}>
          <li>Username:{item.username}</li>
          <li>Email:{item.email}</li>
          <li>Password:{item.password}</li>
          <li>Location:{item.location}</li>
        </ul>
      ))} */}
    </UserContainer>
  );
};
const UserLogin = withFormik({
  mapPropsToValues({ username, email, password, location }) {
    return {
      username: username || "",
      email: email || "",
      password: password || "",
      location: location || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string()
      .required("Enter your Username.")
      .min(5),
    email: Yup.string()
      .email()
      .required("Enter your email address."),
    password: Yup.string()
      .required("Enter your password.")
      .min(8, "Too short, please enter at least eight (8) characters.")
  }),

  handleSubmit(values, { setStatus }) {
    axios
      .post("", values)
      .then(response => {
        console.log(response);
        setStatus(response.data);
      })
      .catch(err => {
        console.log(err.response);
      });
  }
})(SignUp);

export default connect(
  null,
  { createUser, getInitialData }
)(SignUp);
