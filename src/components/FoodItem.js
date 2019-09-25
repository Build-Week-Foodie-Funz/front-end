/*
 * React I & II code.
 * Feel free to get a head start on building the skeleton of this component.
 * Leave the styling off for later, instead try focusing on functionality first!
 *
 * Features:
 *  - Navigation component
 *  - User name/profile picture
 *  - Unique food item derived from a database
 *  - Visually shows the picture, name, other necessary data
 *  - Button for edit(reusing the creating form) and delete(no components necessary)
 */
import React, { useState, useEffect } from "react";
import Formik, { withFormik, Field, Form } from "formik";
import styled from "styled-components";

const FoodItem = ({ errors, status, values, touched }) => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    if (status) {
      setItem([...item, status]);
    }
  }, [status]);

  return (
    <div>
      <Form>
        <Field component="select" className="restaurant" name="restaurant">
          <option>Please Choose an Option</option>
          <option value=""></option>
        </Field>
      </Form>
    </div>
  );
};

export default FoodItem;
