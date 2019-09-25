import React, { useState } from "react";
import styled from "styled-components";
import { withFormik, Field, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";

const CreateRest = props => {
	const [restUpload, setRestUpload] = useState({
		// resthours: "",
		// restname: "",
		// restlocation: "",
		// restrating: ""
	});

	const createRestForm = e => {
		setRestUpload({ ...restUpload, [e.target.name]: e.target.value });
		console.log(restUpload);
	};

	return (
		<>
			<Form>
				<div className="why">
					<div>
						Name:
						<input
							type="text"
							name="restname"
							placeholder="Name"
							onChange={createRestForm}
						/>
					</div>
					<div>
						<input
							type="text"
							name="resthours"
							placeholder="Hours"
							onChange={createRestForm}
						/>
					</div>
					<div>
						<input
							type="text"
							name="restlocation"
							placeholder="Location"
							onChange={createRestForm}
						/>
					</div>
					<div>
						<input
							type="text"
							name="restrating"
							placeholder="Rating"
							onChange={createRestForm}
						/>
					</div>
				</div>
			</Form>
			{/* <button type="submit">Add Restaurant</button> */}
		</>
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

export default FormikCreateRest;