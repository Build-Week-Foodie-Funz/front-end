import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { withFormik, Field, Form } from "formik";
import * as Yup from "yup";
import { createRest, getUser } from "../actions/actions";
import { connect } from "react-redux";
import axios from "axios";

const PageContainer = styled.div`
	margin: 0 auto;
`;

const SubmitButton = styled.button`
  height: 30px;
  width: 150px;
  font-size: 0.9rem;
  margin: 0 auto;
  margin-top: 10px;
`;

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  border: 5px solid #DB832D;
  padding: 10px;
  border-radius: 20px;
`;

const UserInput = styled.div`
//   padding-left: 10px;
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.div`
  width: 50%;
`;

const StyledField = styled.input`
  color: gray;
  margin: 5px 20px;
  padding: 5px;
  padding-left: 15px;
  width: 200px;
  height: 2vh;
  font-size: 1rem;
`;

const CreateRest = props => {
	const [restUpload, setRestUpload] = useState({
		restname: "",
		resthours: "",
		restlocation: "",
		restrating: ""
	});

	const createRestForm = e => {
		setRestUpload({ ...restUpload, [e.target.name]: e.target.value });
		console.log(restUpload);
	};

	console.log(restUpload);
	return (
		<PageContainer>
			<h1>Add a Restaurant</h1>
			<Form
				onSubmit={e => {
					e.preventDefault();
					console.log("Submitter data", restUpload);
					props.createRest(restUpload);
					props.getUser();
					props.history.push("/");
				}}
			>
				<FormContainer>
					<UserInput>
						Name
            <StyledField
							type="text"
							name="restname"
							placeholder="Name"
							onChange={createRestForm}
						/>
					</UserInput>
					<UserInput>
						Hours
						<StyledField
							type="text"
							name="resthours"
							placeholder="Hours"
							onChange={createRestForm}
						/>
					</UserInput>
					<UserInput>
						Location
						<StyledField
							type="text"
							name="restlocation"
							placeholder="City, State"
							onChange={createRestForm}
						/>
					</UserInput>
					<UserInput>
						Photo
						<StyledField
							type="text"
							name="restphotos"
							placeholder="URL photo"
							onChange={createRestForm}
						/>
					</UserInput>
					<UserInput>
						Rating
						<StyledField
							type="text"
							name="restrating"
							placeholder="Rating"
							onChange={createRestForm}
						/>
					</UserInput>
					<SubmitButton type="submit" className="btn">
						Add Restaurant
        </SubmitButton>
				</FormContainer>

			</Form>
		</PageContainer>
	);
};

const FormikCreateRest = withFormik({
	mapPropsToValues({ resthours, restname, restlocation, restrating }) {
		return {
			resthours: resthours || "",
			restname: restname || "",
			restlocation: restlocation || "",
			restrating: restrating || ""
		};
	},
	validationSchema: Yup.object().shape({
		restname: Yup.string().required("Please enter a Restaurant Name"),
		restlocation: Yup.string().required("Please enter a valid City/State")
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
})(CreateRest);

// const mapStateToProps = state => {
// 	return {
// 	  user: state.user
// 	};
//   };

export default connect(
	null,
	{ createRest, getUser }
)(FormikCreateRest);
