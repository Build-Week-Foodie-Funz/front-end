/*
 * React I & II code.
 * Feel free to get a head start on building the skeleton of this component.
 * Leave the styling off for later, instead try focusing on functionality first!
 *
 * Features:
 *  - Navigation component
 *  - Used for creation or editing of the individual people/users
 *  - Name of a person, their image
 *
 *
 */
import React, { useState } from "react";
import { connect } from "react-redux";
import Formik, {
  withFormik,
  Field,
  Form,
  yupToFormErrors,
  ErrorMessage
} from "formik";
import styled from "styled-components";
import { editUser } from "../actions/actions";
import profilePicture from "../images/defaultuser.png";
import * as Yup from "yup";
import axios from "axios";

const WarningText = styled.p`
  color: red;
`;

const UserContainer = styled.div`
  width: 100%;
  display: flex;
`;

const UserInput = styled.div`
  padding-left: 10px;
`;

const InputContainer = styled.div`
  width: 50%;
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
  width: 20%;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  .btn-2 {
    width: 90%;
  }
`;

const UserImage = styled.img`
  width: 200px;
  height: 200px;
  margin: 10px;
  border: 4px solid black;
`;

const ErrorMessageText = styled.p`
  height: 30px;
  color: red;
`;

const EditUser = props => {
  const [userUpdate, setUserUpdate] = useState({
    username: "",
    email: "",
    password: "",
    location: "",
    photo: ""
  });

  const updateUserInfo = e => {
    console.log(userUpdate);
    setUserUpdate({ ...userUpdate, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Form
        id="update-form"
        onSubmit={e => {
          e.preventDefault();
          props.editUser({
            username: userUpdate.user || props.user.username,
            // email: userUpdate.email || props.user.email,
            // location: userUpdate.location || props.user.location,
            // password: userUpdate.password || props.user.password,
            photo: userUpdate.photo || props.user.photo
          });
          console.log("submitted data: ", userUpdate);
        }}
      >
        <UserContainer>
          <InputContainer>
            <h2>UPDATE PROFILE:</h2>
            <WarningText>
              '' Please only change the field that you want updated, leave the
              rest empty.
            </WarningText>
            <UserInput>
              <StyledField
                id="username-input"
                type="text"
                name="username"
                placeholder="Username"
                onChange={updateUserInfo}
              />
            </UserInput>
            <UserInput>
              <StyledField
                type="email"
                name="email"
                placeholder="Email"
                onChange={updateUserInfo}
              />
            </UserInput>
            <UserInput>
              <StyledField
                id="password-input"
                type="password"
                name="password"
                placeholder="Password"
                onChange={updateUserInfo}
              />
            </UserInput>
            <UserInput>
              <StyledField
                id="location-input"
                type="text"
                name="location"
                placeholder="Location"
                onChange={updateUserInfo}
              />
            </UserInput>
            <UserInput>
              <StyledField
                id="photo-input"
                type="text"
                name="photo"
                placeholder="Photo"
                onChange={updateUserInfo}
              />
            </UserInput>
          </InputContainer>
          <ButtonContainer>
            <UserImage src={profilePicture}></UserImage>
            <button type="submit" className="btn">
              Update Profile
            </button>
            <button
              onClick={e => {
                e.preventDefault();
                document.getElementById("update-form").reset();
              }}
              className="btn-2"
            >
              Reset changes
            </button>
          </ButtonContainer>
        </UserContainer>
      </Form>
    </>
  );
};

const FormikEditUser = withFormik({
  mapPropsToValue({ username, email, password, location, photo }) {
    return {
      username: username || "",
      email: email || "",
      location: location || "",
      password: password || "",
      photo: photo || ""
    };
  }
  // validationSchema: Yup.object().shape({
  // 	password: Yup.string(5).required(
  // 		"Password must be at least 5 characters long"
  // 	)
  // }),
})(EditUser);

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  { editUser }
)(FormikEditUser);
