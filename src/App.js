/*
 * React I && II collab.
 *
 */

import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import BubblePage from "./components/BubblePage";
import PrivateRoute from "./components/privateRoute";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import FormikEditUser from "./components/EditUser";
import FoodForm from "./components/FoodForm";
import SignUp from "./components/SignUp";
import FoodItem from "./components/FoodItem";
import "./styles.scss";
import NavBar from "./components/NavBar";

function App() {
	return (
		<Router>
			<NavBar />
			<div className="App">
				<Route exact path="/" component={Login} />
				<Route path="/signup" component={SignUp} />
				{/* These four below will be converted to PrivateRouters*/}
				<Route path="/dashboard" component={Dashboard} />
				<Route path="/foodform/:id" component={FoodForm} />
				<Route path="/editprofile/" component={FormikEditUser} />
				<Route path="/fooditem/:id" component={FoodItem} />
				{/* These four above will be converted to PrivateRouters*/}
			</div>
		</Router>
	);
}

export default App;
