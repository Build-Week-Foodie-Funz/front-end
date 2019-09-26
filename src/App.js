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
import FormikFoodForm from "./components/FoodForm";
import SignUp from "./components/SignUp";
import Reviews from "./components/Reviews";
import FoodItem from "./components/FoodItem";
import ResetPassword from "./components/ResetPassword";
import "./styles.scss";
import NavBar from "./components/NavBar";
import { createGlobalStyle } from "styled-components";
import FormikCreateRest from "./components/CreateRest";

// If you need to style anything across the app please put it here
const GlobalStyles = createGlobalStyle`
  body{
    background-color: #fbfcee;
  }
`;

function App() {
  return (
    <Router>
      <GlobalStyles />
      <NavBar />
      <div className="App">
        <Route exact path="/" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        {/* These four below will be converted to PrivateRouters*/}
        <Route path='/foodform' component={FormikFoodForm} />
        <Route path="/reviews/:id" component={Reviews} />
        <Route path="/editprofile/" component={FormikEditUser} />
        <Route path="/reset/" component={ResetPassword} />
        <Route path="/fooditem/:id" component={FoodItem} />
        <Route path="/addrestaurant" component={FormikCreateRest} />
        {/* These four above will be converted to PrivateRouters*/}
      </div>
    </Router>
  );
}

export default App;
