/*
 * React I & II code.
 * Feel free to get a head start on building the skeleton of this component.
 * Leave the styling off for later, instead try focusing on functionality first!
 *
 * Features:
 *  - Navigation component
 *  - Used for creation or editing of the individual food items
 *  - Name of restraunt, type of restraunt, food ordered, date visited, price,
 *    rating, photo, comments
 */

import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import defaultFood from "../images/default_food.jpg";
import { connect } from "react-redux";
import { getUser, createReview } from "../actions/actions";
import { axiosWithAuth } from "../axios/axiosWithAuth";
import styled from "styled-components";

const Header = styled.h2`
  color: #008b91;
  font-family: Chinese Rocks;
`;

const StyledForm = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;

  @media (min-width: 500px) {
  }
  @media (min-width: 1200px) {
  }
`;

const FoodForm = props => {
  const [reviewData, setReviewData] = useState({
    menuitemname: "",
    photomenu: defaultFood,
    itemprice: "",
    itemrating: "",
    shortreview: "",
    restname: "",
    cuisinetype: ""
  });
  const reviewDataInput = e => {
    setReviewData({ ...reviewData, [e.target.name]: e.target.value });
    console.log(reviewData);
  };

  return (
    <div className="foodform">
      <Form
        onSubmit={e => {
          e.preventDefault();
          let idForAxios = 0;
          let uploadData = {
            ...reviewData,
            restname: document.getElementById("choose-rest").value,
            itemprice: parseInt(reviewData.itemprice)
          };

          // Finds restraunt's id that was chosen by a user at dropdown.
          if (props.user.restaurant) {
            props.user.restaurant.map((rest, i) => {
              if (rest.restname === uploadData.restname) {
                idForAxios = rest.restid;
              }
            });
          }

          console.log("Submitted", uploadData);
          console.log("Submitted id", parseInt(idForAxios));
          // props.createReview(idForAxios, uploadData);
          // props.getUser();
          // props.history.push("/");
        }}
      >
        <Header>
          <h2>Create a Review</h2>
        </Header>
        <Field
          component="select"
          id="choose-rest"
          className="restaurant"
          name="restname"
          onChange={reviewDataInput}
        >
          {props.user.restaurant
            ? props.user.restaurant.map((rest, i) => {
                return (
                  <>
                    <option key={i}>{rest.restname}</option>
                  </>
                );
              })
            : null}
        </Field>
        <Field
          type="text"
          name="menuitemname"
          placeholder="Food item"
          onChange={reviewDataInput}
        />
        <Field
          type="text"
          name="photomenu"
          placeholder="URL photo"
          onChange={reviewDataInput}
        />
        <Field
          type="text"
          name="cuisinetype"
          placeholder="Cuisine type"
          onChange={reviewDataInput}
        />
        <Field
          type="text"
          name="itemprice"
          placeholder="Food price"
          onChange={reviewDataInput}
        />
        <Field
          type="text"
          name="itemrating"
          placeholder="Food rating"
          onChange={reviewDataInput}
        />
        <Field
          component="textarea"
          type="text"
          name="shortreview"
          placeholder="Other comments"
          onChange={reviewDataInput}
        />
        <button className="btn">Submit</button>
      </Form>
      {(window.onload = () => props.getUser())}
    </div>
  );
};
const FormikFoodForm = withFormik({
  mapPropsToValues({ restname, item }) {
    return {
      restaurant: restname || "",
      item: item || ""
    };
  },
  handleSubmit(values, { setStatus }) {
    axios
      .post("", values)
      .then(res => {
        setStatus(res.data);
      })
      .catch(err => console.log(err.res));
  }
})(FoodForm);

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  { getUser, createReview }
)(FormikFoodForm);
