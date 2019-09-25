/*
 * React I & II code.
 * Feel free to get a head start on building the skeleton of this component.
 * Leave the styling off for later, instead try focusing on functionality first!
 *
 * Features:
 *  - Navigation component
 *  - Built in filter or a separate component, would love to hear thoughts
 *  - User name/profile picture
 *  - Populates a list of all the summary items, once clicked links to a separate
 *    component `FoodItem.js`
 */

import React, { useState } from "react";
import { connect } from "react-redux";
import { getUser } from "../actions/actions";

const Dashboard = props => {
  console.log("user data", props.user);
  return (
    <>
      <h1>Imagine a Dashboard</h1>
      <button onClick={() => props.getUser()}>Get user</button>
    </>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  { getUser }
)(Dashboard);
