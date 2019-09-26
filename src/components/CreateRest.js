import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { withFormik, Field, Form } from "formik";
import * as Yup from "yup";
import { createRest, getUser, editRest } from "../actions/actions";
import { connect } from "react-redux";
import axios from "axios";

const SubmitButton = styled.button`
  height: 30px;
  width: 150px;
  font-size: 0.9rem;
`;

const CreateRest = props => {
  const [restUpload, setRestUpload] = useState({
    restname: "",
    resthours: "",
    restlocation: "",
    restrating: ""
  });

  const createRestForm = e => {
    setRestUpload({ ...restUpload, [e.target.name]: e.target.value });
  };

  console.log(props.match.params.id);
  return (
    <>
      <Form
        onSubmit={e => {
          if (props.match.params.id) {
            e.preventDefault();
            let newData = {};
            console.log("Submitter data", restUpload);

            for (let i = 0; i < props.user.restaurant.length; i++) {
              if (
                props.user.restaurant[i].restid ===
                parseInt(props.match.params.id)
              ) {
                newData = {
                  restname:
                    restUpload.restname || props.user.restaurant[i].restname,
                  resthours:
                    restUpload.resthours || props.user.restaurant[i].resthours,
                  restlocation:
                    restUpload.restlocation ||
                    props.user.restaurant[i].restlocation,
                  restrating:
                    restUpload.restrating || props.user.restaurant[i].restrating
                };
                break;
              }
            }
            props.editRest(props.match.params.id, newData);
            props.getUser();
            props.history.push("/");
          } else {
            e.preventDefault();
            console.log("Submitter data", restUpload);
            props.createRest(restUpload);
            props.getUser();
            props.history.push("/");
          }
        }}
      >
        <div className="why">
          <div>
            Name:
            <input
              type="text"
              name="restname"
              placeholder="Name"
              onChange={createRestForm}
            />
          </div>
          <div>
            <input
              type="text"
              name="resthours"
              placeholder="Hours"
              onChange={createRestForm}
            />
          </div>
          <div>
            <input
              type="text"
              name="restlocation"
              placeholder="Location"
              onChange={createRestForm}
            />
          </div>
          <div>
            <input
              type="text"
              name="restphotos"
              placeholder="URL photo"
              onChange={createRestForm}
            />
          </div>
          <div>
            <input
              type="text"
              name="restrating"
              placeholder="Rating"
              onChange={createRestForm}
            />
          </div>
        </div>
        {props.match.params.id ? (
          <SubmitButton type="submit" className="btn">
            Edit Restaurant
          </SubmitButton>
        ) : (
          <SubmitButton type="submit" className="btn">
            Add Restaurant
          </SubmitButton>
        )}
        {
          (window.onload = () => {
            props.getUser();
          })
        }
      </Form>
    </>
  );
};

const FormikCreateRest = withFormik({
  mapPropsToValues({ resthours, restname, restlocation, restrating }) {
    return {
      resthours: resthours || "",
      restname: restname || "",
      restlocation: restlocation || "",
      restrating: restrating || ""
    };
  },
  validationSchema: Yup.object().shape({
    restname: Yup.string().required("Please enter a Restaurant Name"),
    restlocation: Yup.string().required("Please enter a valid City/State")
  }),
  handleSubmit(values, { setStatus }) {
    axios
      .post("", values)
      .then(response => {
        console.log(response);
        setStatus(response.data);
      })
      .catch(err => {
        console.log(err.response);
      });
  }
})(CreateRest);

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  { createRest, getUser, editRest }
)(FormikCreateRest);
