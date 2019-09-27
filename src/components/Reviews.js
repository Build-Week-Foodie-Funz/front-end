import React from "react";

import { connect } from "react-redux";
import { getRestaurant } from "../actions/actions";

import styled from "styled-components";
import "../styles/button.scss";

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
    console.log("Restaurant props", props);
  }, 500);

  return (
    <FoodCards>
      {props.reviews.length > 0
        ? props.reviews.map(rest => {
            console.log(rest);
            return (
              <>
                <CardDiv>
                  <Header></Header>
                  <img src={rest.photomenu}></img>
                  <h3> Name: {rest.restaurant.restname}</h3>
                  <h3>Food Type: {rest.cuisinetype}</h3>
                  <h3>Menu Item: {rest.menuitemname}</h3>
                  <h3>Price: {rest.itemprice}</h3>
                  <h3>Rating: {rest.itemrating}</h3>
                  <h3>{rest.shortreview}</h3>
                  <button className="btn-2">Edit</button>
                  <button className="btn-2">Delete</button>
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
