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
	width: 10%;
	margin: 0 auto;
	align-items: center;
	justify-content: center;
`;

const UserImage = styled.img`
	width: 200px;
	height: 200px;
	margin: 10px;
	border: 4px solid black;
`;

const EditUser = props => {
	const [userUpdate, setUserUpdate] = useState({
		name: "",
		email: "",
		password: "",
		location: ""
	});
	// const initialState = {
	// 	username: "",
	// 	password: "",
	// 	email: "",
	// 	location: ""
	// };

	const updateUserInfo = e => {
		console.log(userUpdate);
		setUserUpdate({ ...userUpdate, [e.target.name]: e.target.value });
	};

	return (
		<>
			<Form id="update-form">
				<UserContainer>
					<InputContainer>
						<h2>UPDATE PROFILE:</h2>
						<WarningText>
							'' Please only change the field that you want updated,
							leave the rest empty.
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
					</InputContainer>
					<ButtonContainer>
						<UserImage src={profilePicture}></UserImage>
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
		</>
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
