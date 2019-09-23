/*
 * React I && II collab.
 *
 */

import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import BubblePage from "./components/BubblePage";
import PrivateRoute from "./components/privateRoute";

import Login from "./components/Login";
import Dashboard from './components/Dashboard';
import EditUser from './components/EditUser';
import FoodForm from './components/FoodForm';
import SignUp from './components/SignUp';
import FoodItem from './components/FoodItem';
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <Route path='/signup' component={SignUp}/>
        <PrivateRoute path='/dashboard' component={Dashboard}/>
        <PrivateRoute path='/foodform/:id' component={FoodForm}/>
        <PrivateRoute path='/editprofile/' component={EditUser}/>
        <PrivateRoute path='/fooditem/:id' component={FoodItem}/>
      </div>
    </Router>
  );
}

export default App;
