/*
 * React II code.
 * Feel free to get yourself familiar with it but
 * please do not modify it without letting Kate know first ✨
 *
 * Code's purpose: When initial authorization token is retrived, this component
 * essentially adds a header with that token to every server request. Kinda like when
 * you reserve space in a restaurant and someone asks for your name to ensure you're
 * the right person with more access rights/permissions :)
 */

import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`
    }
  });
};
