import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { getRestaurant } from "../actions/actions";

import styled from "styled-components";

const FoodCards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Header = styled.h2`
  color: #008b91;
  font-family: Chinese Rocks;
`;
const CardDiv = styled.div`
  height: 600px;
  border-radius: 10%;
  border: 2px solid #b55e1c;
  margin: 40px;
  overflow: hidden;
  width: 350px;
  img {
    width: 300px;
    height: 250px;
    border-radius: 10%;
  }
`;

const Reviews = props => {
  //   console.log("Restaurant1", props.reviews);
  setTimeout(function() {
    console.log("Restaurant", props.reviews);
  }, 500);
  return (
    <FoodCards>
      {props.reviews
        ? props.reviews.map(rest => {
            console.log(rest);
            return (
              <>
                <CardDiv>
                  <img src={rest.photomenu}></img>
                  <h2>Name: {rest.restaurant.restname}</h2>
                  <h3>Food Type: {rest.cuisinetype}</h3>
                  <h3>Menu Item: {rest.menuitemname}</h3>
                  <h3>Price: {rest.itemprice}</h3>
                  <h3>Rating: {rest.itemrating}</h3>
                  <h3>{rest.shortreview}</h3>
                </CardDiv>
              </>
            );
          })
        : null}
      {(window.onload = () => props.getRestaurant(props.match.params.id))}
    </FoodCards>
  );
};

// {window.onload = () => (props.getRestaurant(props.match.params.id))}

const mapStateToProps = state => {
  return {
    reviews: state.reviews,
  };
};

export default connect(
  mapStateToProps,
  { getRestaurant }
)(Reviews);
