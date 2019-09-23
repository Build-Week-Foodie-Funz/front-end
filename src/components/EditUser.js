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
import Formik, { withFormik, Field, Form } from "formik";
import styled from "styled-components";
import profilePicture from "../images/defaultuser.png";

const UserContainer = styled.div`
	background-color: #fbfcee;
	width: 100%;
`;

const UserInput = styled.div`
	padding-left: 10px;
	color: red;
	// height: 50px;
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
	width: 10%;
	margin: 0 auto;
`;

const EditUser = props => {
	const [data, setDate] = useState("");
	const initialState = {
		username: "",
		password: "",
		email: "",
		location: ""
	};

	return (
		<Form id="update-form">
			<UserContainer>
				UPDATE PROFILE:
				<p>
					'' Please only change the field that you want updated, leave the
					rest empty.
				</p>
				<InputContainer>
					<UserInput>
						<StyledField
							id="username-input"
							type="text"
							name="username"
							placeholder="Username"
						/>
					</UserInput>
					<UserInput>
						<StyledField type="email" name="email" placeholder="Email" />
					</UserInput>
					<UserInput>
						<StyledField
							id="password-input"
							type="password"
							name="password"
							placeholder="Password"
						/>
					</UserInput>
					<UserInput>
						<StyledField
							id="location-input"
							type="text"
							name="location"
							placeholder="Location"
						/>
					</UserInput>
				</InputContainer>
				<ButtonContainer>
					<img src={profilePicture}></img>
					<button type="submit">Update Profile</button>
					<button
						onClick={
							(window.onload = function() {
								document.getElementById("update-form").reset();
							})
						}
					>
						Reset changes
					</button>
				</ButtonContainer>
			</UserContainer>
		</Form>
	);
};

const FormikEditUser = withFormik({
	mapPropsToValue({ username, email, password, location }) {
		return {
			username: username || "",
			email: email || "",
			location: location || "",
			password: password || ""
		};
	}
})(EditUser);

export default FormikEditUser;
