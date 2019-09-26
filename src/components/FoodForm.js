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
import { connect } from "react-redux";
import { getUser } from "../actions/actions";
import { axiosWithAuth } from "../axios/axiosWithAuth";
import styled from "styled-components";

const Header = styled.h2`
  color: #008b91;
  font-family: Chinese Rocks;
`;

const FoodForm = props => {
  const [reviewData, setReviewData] = useState([]);
  const [restaurants, setRestaraunts] = useState([]);
  const reviewDataInput = e => {
    setReviewData({ ...reviewData, [e.target.name]: e.target.value });
  };

  // useEffect(() => {
  //   axiosWithAuth()
  //     // .get(`https://sethnadu-foodie-bw.herokuapp.com/user/restaurants`)
  //     .then(response => {
  //       console.log(response);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }, []);

  // useEffect(() => {
  //   if (status) {
  //     setReviewData([...reviewData, status]);
  //   }
  // }, [status]);
  // setTimeout(function () { console.log('This is the timeout', props.user) }, 1000);
  return (
    <div className="foodform">
      <Form >
        <Header>
          <h2>Create a Review</h2>
        </Header>
        <Field component="select" className="restaurant" name="restname">
          {props.user.restaurant
            ? props.user.restaurant.map((rest, i) => {
              return (
                <>
                  {console.log(i, rest.restname)}
                  <option key={i}>{rest.restname}</option>
                </>
              );
            })
            : null}
        </Field>
        <Field
          type="text"
          name="restype"
          placeholder="Restaurant type"
          onChange={reviewDataInput}
        />

        <Field
          type="text"
          name="cuisinetype"
          placeholder="Food item"
          onChange={reviewDataInput}
        />
        <Field
          type="text"
          name="foodprice"
          placeholder="Food price"
          onChange={reviewDataInput}
        />
        <Field
          type="text"
          name="visitdate"
          placeholder="Date of visit"
          onChange={reviewDataInput}
        />
        <Field
          type="text"
          name="foodrating"
          placeholder="Food rating"
          onChange={reviewDataInput}
        />
        <Field
          component="textarea"
          type="text"
          name="notes"
          placeholder="Other comments"
        />
        <button className="btn" onClick={(e) => console.log(e.target.value)}>Submit</button>
      </Form>
      {/* {props.user.restaurant
        ? props.user.restaurant.map(rest => {
          console.log('TEST', rest)
          return (
            <>
              <h3>TEST</h3>
              <p>Location: {rest.restlocation}</p>
            </>
          );
        })
        : null} */}
      {window.onload = () => props.getUser()}
    </div>
  );
};
const FormikFoodForm = withFormik({
  mapPropsToValues({ restname, item }) {
    return {
      restaurant: restname || "",
      item: item || "",
    };
  },
  handleSubmit(values, { setStatus }) {
    axios
      .post("", values)
      .then(res => {
        setStatus(res.data);
      })
      .catch(err => console.log(err.res));
  },
})(FoodForm);


const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

export default connect(
  mapStateToProps,
  { getUser }
)(FormikFoodForm);
