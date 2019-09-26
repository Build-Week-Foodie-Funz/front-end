import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { connect } from "react-redux";
import { getRestaurant } from "../actions/actions";
import { axiosWithAuth } from "../axios/axiosWithAuth";
import styled from "styled-components";

const Header = styled.h2`
  color: #008b91;
  font-family: Chinese Rocks;
`;

const Reviews = props => {
  console.log("Restraunt", props.restaurant);
  return (
    <div>
      <button
        onClick={() => console.log(props.getRestaurant(props.match.params.id))}
      >
        Get stuff
      </button>
    </div>
  );
};

// {window.onload = () => (props.getRestaurant(props.match.params.id))}


const mapStateToProps = state => {
  return {
    restaurant: state.restaurant,
  };
};

export default connect(
  mapStateToProps,
  { getRestaurant }
)(Reviews);
