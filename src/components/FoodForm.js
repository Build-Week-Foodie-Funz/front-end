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
import {
  getUser,
  createReview,
  editReview,
  getAReview
} from "../actions/actions";
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
  // ids stores an id for a restraunt(0th) and id for review(1st)
  if (props.match.params.id) {
    var ids = props.match.params.id.split("-");
    console.log("IDS", ids);
    console.log("Singular", props.singularReview);
  }

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
          if (ids) {
            let newData = {
              menuitemname:
                reviewData.menuitemname || props.singularReview.menuitemname,
              photomenu: reviewData.photomenu || props.singularReview.photomenu,
              itemprice:
                parseInt(reviewData.itemprice) ||
                props.singularReview.itemprice,
              itemrating:
                reviewData.itemrating || props.singularReview.itemrating,
              shortreview:
                reviewData.shortreview || props.singularReview.shortreview,
              restname: reviewData.restname || props.singularReview.restname,
              cuisinetype:
                reviewData.cuisinetype || props.singularReview.cuisinetype
            };
            props.editReview(ids[0], ids[1], newData);
          } else {
            let uploadData = {
              ...reviewData,
              restname: document.getElementById("choose-rest").value,
              itemprice: parseInt(reviewData.itemprice)
            };

            let idForAxios = 0;
            // Finds restraunt's id that was chosen by a user at dropdown.
            if (props.user.restaurant) {
              props.user.restaurant.map((rest, i) => {
                if (rest.restname === uploadData.restname) {
                  idForAxios = rest.restid;
                }
              });
            }
            props.createReview(idForAxios, uploadData);
          }

          props.history.push("/");
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
      {
        (window.onload = () => {
          props.getUser();
          if (ids) props.getAReview(ids[1]);
        })
      }
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
    user: state.user,
    singularReview: state.singularReview
  };
};

export default connect(
  mapStateToProps,
  { getUser, createReview, editReview, getAReview }
)(FormikFoodForm);
