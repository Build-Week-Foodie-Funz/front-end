/*
 * React II code.
 * Feel free to get yourself familiar with it but
 * please do not modify it without letting Kate know first ✨
 *
 * Code's purpose: A bunch of axios request processes. Serves as a middleman between
 * global state and the UI code.
 */

// These are leftovers that will later be transformed to match the current build week project.

import { axiosWithAuth } from "../axios/axiosWithAuth";

export const INITIAL_FETCH_START = "INITIAL_FETCH_START";
export const INITIAL_FETCH_SUCCESS = "INITIAL_FETCH_SUCCESS";
export const INITIAL_FETCH_FAIL = "INITIAL_FETCH_FAIL";

export const USER_FETCH_START = "USER_FETCH_START";
export const USER_FETCH_SUCCESS = "USER_FETCH_SUCCESS";
export const USER_FETCH_FAIL = "USER_FETCH_FAIL";

export const CREATE_USER_START = "CREATE_USER_START";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const CREATE_USER_FAIL = "CREATE_USER_FAIL";

export const RESTAURANT_FETCH_START = "RESTAURANT_FETCH_START";
export const RESTAURANT_FETCH_SUCCESS = "RESTAURANT_FETCH_SUCCESS";
export const RESTAURANT_FETCH_FAIL = "RESTAURANT_FETCH_FAIL";

export const DELETE_USER_START = "DELETE_USER_START";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAIL = "DELETE_USER_FAIL";

export const EDIT_USER_START = "EDIT_USER_START";
export const EDIT_USER_SUCCESS = "EDIT_USER_SUCCESS";
export const EDIT_USER_FAIL = "EDIT_USER_FAIL";

export const getInitialData = (props, history) => dispatch => {
  dispatch({ type: INITIAL_FETCH_START });
  axiosWithAuth()
    .post(
      "https://sethnadu-foodie-bw.herokuapp.com/login",
      `grant_type=password&username=${props.username}&password=${props.password}`,
      {
        headers: {
          Authorization: `Basic ${btoa("lambda-client:lambda-secret")}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )
    .then(res => {
      localStorage.setItem("token", res.data.access_token);
      history.push("/");
      dispatch({ type: INITIAL_FETCH_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: INITIAL_FETCH_FAIL, payload: err }));
};

export const createUser = props => dispatch => {
  dispatch({ type: CREATE_USER_START });
  axiosWithAuth()
    .post("https://sethnadu-foodie-bw.herokuapp.com/createnewuser", props)
    .then(res => {
      console.log("create user respon", res.data);
      dispatch({ type: CREATE_USER_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: CREATE_USER_FAIL, payload: err }));
};

export const getUser = () => dispatch => {
  console.log("got here to get");
  dispatch({ type: USER_FETCH_START });
  axiosWithAuth()
    .get("https://sethnadu-foodie-bw.herokuapp.com/user/restaurants")
    .then(res => {
      dispatch({ type: USER_FETCH_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: USER_FETCH_FAIL, payload: err }));
};

export const getRestaurant = id => dispatch => {
  dispatch({ type: RESTAURANT_FETCH_START });
  axiosWithAuth()
    .get(
      `https://sethnadu-foodie-bw.herokuapp.com/user/restaurants/${id}/reviews`
    )
    .then(res => {
      dispatch({ type: RESTAURANT_FETCH_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: RESTAURANT_FETCH_FAIL, payload: err }));
};

export const saveEdit = (id, USER) => dispatch => {
  dispatch({ type: EDIT_USER_START });
  axiosWithAuth()
    .put(`http://localhost:5000/api/USER/${id}`, USER)
    .then(res => {
      getUser();
    })
    .catch(err => dispatch({ type: EDIT_USER_FAIL, payload: err }));
};

export const deleteUSER = id => dispatch => {
  console.log("delete id", id);
  dispatch({ type: DELETE_USER_START });
  axiosWithAuth()
    .delete(`http://localhost:5000/api/USER/${id}`)
    .then(console.log("u piece of shit"))
    .catch(err => dispatch({ type: DELETE_USER_FAIL, payload: err }));
};
