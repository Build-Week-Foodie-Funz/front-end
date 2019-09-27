import React from "react";

import { connect } from "react-redux";
import { getRestaurant, editReview, deleteReview } from "../actions/actions";

import styled from "styled-components";
import "../styles/button.scss";

const FoodCards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Header = styled.h2`
  color: #008b91;
  font-family: Chinese Rocks;
`;
const CardDiv = styled.div`
  height: auto;
  border-radius: 2em;
  border: 2px solid #b55e1c;
  margin: 40px;
  overflow: hidden;
  width: 18em;
  img {
    width: 300px;
    height: 220px;
    border-radius: 10%;
  }
`;

const Reviews = props => {
  setTimeout(function() {
    console.log("Restaurant props", props);
  }, 2000);

  return (
    <FoodCards>
      {props.getRestaurant(props.match.params.id)}
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
                  <div>
                    <button
                      className="btn-3"
                      onClick={() => {
                        // props.editReview(restid, rest.reviewid, props);
                        console.log(
                          "Restraunt: ",
                          props.match.params.id,
                          "review id: ",
                          rest.reviewid
                        );
                        props.history.push(
                          `/foodform/${props.match.params.id}-${rest.reviewid}`
                        );
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="btn-3"
                      onClick={() => {
                        props.deleteReview(rest.reviewid);

                        props.history.push("/");
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </CardDiv>
              </>
            );
          })
        : null}
      {/* {(window.onload = () => props.getRestaurant(props.match.params.id))} */}
    </FoodCards>
  );
};

// {window.onload = () => (props.getRestaurant(props.match.params.id))}

const mapStateToProps = state => {
  return {
    reviews: state.reviews
  };
};

export default connect(
  mapStateToProps,
  { getRestaurant, editReview, deleteReview }
)(Reviews);
