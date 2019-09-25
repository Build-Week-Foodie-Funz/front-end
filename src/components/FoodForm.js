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

const FoodForm = ({ values, errors, touched, status }) => {
  const [reviewData, setReviewData] = useState([]);
  const [restaurants, setRestaraunts] = useState([]);
  const reviewDataInput = e => {
    setReviewData({ ...reviewData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    axios
      .get(`sethnadu-foodie-bw.herokuapp.com/user/restaurants/`)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (status) {
      setReviewData([...reviewData, status]);
    }
  }, [status]);

  return (
    <div className="foodform">
      <Form>
        <Field component="select" className="restaurant" name="restname">
          <option>Please Choose an Option</option>
          <option>Test</option>
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
        <button className="btn">Submit</button>
      </Form>
      {reviewData.map((data, i) => (
        <ul key={i}>
          <li>Restaurant Name:{data.restname}</li>
          <li>Type: {data.restype}</li>
          <li>Food item: {data.cuisinetype}</li>
          <li>Food price: {data.foodprice}</li>
          <li>Food item: {data.cuisinetype}</li>
          <li>Date of visit: {data.visitdate}</li>
          <li>Food rating: {data.foodrating}</li>
          <li>Food item: {data.cuisinetype}</li>
        </ul>
      ))}
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
export default FormikFoodForm;
