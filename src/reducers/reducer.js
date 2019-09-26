/*
 * React II code.
 * Feel free to get yourself familiar with it but
 * please do not modify it without letting Kate know first ✨
 *
 * Code's purpose: this is global state, so all components that need some data will be
 * requesting access through `actions.js`. Imagine useState but global, thats kinda it.
 */

// These are leftovers that will later be transformed to match the current build week project.
import {
  INITIAL_FETCH_FAIL,
  INITIAL_FETCH_START,
  INITIAL_FETCH_SUCCESS,
  CREATE_USER_FAIL,
  CREATE_USER_START,
  CREATE_USER_SUCCESS,
  USER_FETCH_FAIL,
  USER_FETCH_START,
  USER_FETCH_SUCCESS,
  DELETE_USER_FAIL,
  DELETE_USER_START,
  DELETE_USER_SUCCESS,
  EDIT_USER_FAIL,
  EDIT_USER_START,
  EDIT_USER_SUCCESS,
  RESTAURANT_FETCH_SUCCESS,
  RESTAURANT_FETCH_START,
  RESTAURANT_FETCH_FAIL,
} from "../actions/actions";

const initialState = {
  user: {},
  restaurant: [],
  error: "",
  isFetching: false,
};

function reducer(state = initialState, action) {
  console.log("State", state);
  switch (action.type) {
    case RESTAURANT_FETCH_START:
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    case RESTAURANT_FETCH_SUCCESS:
      console.log("action, success", action.payload);
      return {
        ...state,
        restaurant: [...action.payload],
        isFetching: false,
        error: "",
      };
    case RESTAURANT_FETCH_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case DELETE_USER_START:
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: "",
      };
    case DELETE_USER_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case EDIT_USER_START:
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    case EDIT_USER_SUCCESS:
      return {
        ...state,
        user: [...action.payload],
        isFetching: false,
        error: "",
      };
    case EDIT_USER_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case USER_FETCH_START:
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    case USER_FETCH_SUCCESS:
      console.log("action, success", action.payload);
      return {
        ...state,
        user: { ...action.payload },
        isFetching: false,
        error: "",
      };
    case USER_FETCH_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case INITIAL_FETCH_START:
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    case INITIAL_FETCH_SUCCESS:
      return {
        ...state,
        friends: [...state.friends, ...action.payload],
        isFetching: false,
        error: "",
      };
    case INITIAL_FETCH_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case CREATE_USER_START:
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    case CREATE_USER_SUCCESS:
      console.log("The data receivved for the post new user", action.payload);
      return {
        ...state,
        isFetching: false,
        error: "",
      };
    case CREATE_USER_FAIL:
      console.log("Post failed");
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
