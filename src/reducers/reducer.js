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
  CREATE_COLORS_FAIL,
  CREATE_COLORS_START,
  CREATE_COLORS_SUCCESS,
  COLORS_FETCH_FAIL,
  COLORS_FETCH_START,
  COLORS_FETCH_SUCCESS,
  DELETE_COLOR_FAIL,
  DELETE_COLOR_START,
  DELETE_COLOR_SUCCESS,
  EDIT_COLOR_FAIL,
  EDIT_COLOR_START,
  EDIT_COLOR_SUCCESS
} from "../actions/actions";

const initialState = {
  user: {},
  error: "",
  isFetching: false
};

function reducer(state = initialState, action) {
  console.log("State", state);
  switch (action.type) {
    case DELETE_COLOR_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case DELETE_COLOR_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: ""
      };
    case DELETE_COLOR_FAIL:
      return {
        ...state,
        error: action.payload
      };

    case EDIT_COLOR_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case EDIT_COLOR_SUCCESS:
      return {
        ...state,
        colors: [...action.payload],
        isFetching: false,
        error: ""
      };
    case EDIT_COLOR_FAIL:
      return {
        ...state,
        error: action.payload
      };

    case COLORS_FETCH_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case COLORS_FETCH_SUCCESS:
      console.log("action, success", action.payload);
      return {
        ...state,
        colors: [...action.payload],
        isFetching: false,
        error: ""
      };
    case COLORS_FETCH_FAIL:
      return {
        ...state,
        error: action.payload
      };
    case INITIAL_FETCH_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case INITIAL_FETCH_SUCCESS:
      return {
        ...state,
        friends: [...state.friends, ...action.payload],
        isFetching: false,
        error: ""
      };
    case INITIAL_FETCH_FAIL:
      return {
        ...state,
        error: action.payload
      };
    case CREATE_COLORS_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case CREATE_COLORS_SUCCESS:
      return {
        ...state,
        colors: [...action.payload],
        isFetching: false,
        error: ""
      };
    case CREATE_COLORS_FAIL:
      console.log("Post failed");
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}

export default reducer;
