/*
 * React I & II code.
 * Feel free to get a head start on building the skeleton of this component.
 * Leave the styling off for later, instead try focusing on functionality first!
 *
 * Features:
 *  - Navigation component
 *  - Built in filter or a separate component, would love to hear thoughts
 *  - User name/profile picture
 *  - Populates a list of all the summary items, once clicked links to a separate
 *    component `FoodItem.js`
 */

import React, { useState, useEffect } from "react";

import { axiosWithAuth } from "../axios/axiosWithAuth";
import { userInfo } from "os";
import styled from "styled-components";
import defaultFood from "../images/default_food.jpg";
import profilePicture from "../images/defaultuser.png";
import Reviews from "./Reviews";
import { connect } from "react-redux";
import { getUser } from "../actions/actions";

const HeaderImage = styled.img`
  height: 5%;
  border-radius: 10%;
  width: 100%;
  position: relative;
  margin-top: -30%;
  z-index: -1;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 4px solid White;
  margin-left: 30px;
  margin-top: -100px;
`;

const UsersName = styled.h2`
  font-size: 2rem;
  width: 200px;
  text-align: left;
  padding: 0 30px;
`;

const SearchForms = styled.div`
  // position: absolute;
  float: right;
  width: 100%;
  input {
    margin: 0 20px 0;
  }
`;

const PageContainer = styled.div`
  width: 100%;
`;

const Header = styled.header`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  a {
    position: relative;
    margin: 20px;
    float: right;
    justify-content: space-between;
  }
`;

const RestCards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const CardDiv = styled.div`
  height: 450px;
  border-radius: 10%;
  border: 2px solid #b55e1c;
  margin: 40px;
  overflow: hidden;
  background: white;
  img {
    width: 300px;
    height: 250px;
    border-radius: 10%;
  }
`;

const Dashboard = props => {
  const [userInformation, setUserInformation] = useState({});

  const [inputData, setInputData] = useState({
    name: "",
    type: "",
    price: ""
  });

  const monitorInput = e => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    console.log(inputData);
  };

  useEffect(() => {
    if (inputData.name.length > 0) {
      // {
      //   userInformation
      //     ? userInformation.restaurant.filter(rest => {
      //         console.log("rest", rest);
      //         // return rest.restname.includes(inputData.name)
      //         // console.log("REST NAME", rest)
      //       })
      //     : null;
      // }
    } else if (inputData.type.length > 0) {
    } else if (inputData.price.length > 0) {
    } else {
      setUserInformation({ ...props.user });
      console.log("THEFRIKC", userInformation);
    }
  }, [inputData]);

  // window.onload = setUserInformation(props.getUser());

  // console.log("This is REst", props.user.restaurant);
  return (
    <PageContainer>
      <Header>
        <HeaderImage src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"></HeaderImage>
        <ProfileImage
          src={props.user.photo ? props.user.photo : profilePicture}
        ></ProfileImage>
        <UsersName>Hello, {props.user.username}!</UsersName>
        <a href="/editprofile">Edit Profile</a>
        <a href="/addrestaurant">Add Restaurant</a>
        <a href="/foodform">Add Review</a>
      </Header>
      <SearchForms className="search-forms">
        <input
          type="text"
          name="name"
          placeholder="Name of Resaurant"
          onChange={monitorInput}
        />
        <input
          type="text"
          name="type"
          placeholder="Type of food"
          onChange={monitorInput}
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          onChange={monitorInput}
        />
      </SearchForms>
      <RestCards>
        {/* <FoodPicture src='https://images.unsplash.com/photo-1557872943-16a5ac26437e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1316&q=80'></FoodPicture> */}
        {props.user.restaurant ? (
          props.user.restaurant.map(rest => {
            return (
              <CardDiv>
                <img
                  src={
                    rest.restphotos[0] ? rest.restphotos[0].photo : defaultFood
                  }
                ></img>
                <h3>{rest.restname}</h3>
                <h4>Horus: {rest.resthours}</h4>
                <p>Location: {rest.restlocation}</p>
                <p>{rest.restrating}</p>
                <button
                  className="btn-2"
                  rest={rest}
                  onClick={() => {
                    console.log(rest);
                    props.history.push(`/reviews/${rest.restid}`);
                    return <Reviews data={rest.restid} />;
                  }}
                >
                  View reviews
                </button>
              </CardDiv>
            );
          })
        ) : (
          <h2>Loading..</h2>
        )}
      </RestCards>
      {
        (window.onload = () => {
          props.getUser();
          setTimeout(function() {
            setUserInformation({ ...props.user });
            console.log("frick on load", userInformation);
          }, 1000);
        })
      }
    </PageContainer>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  { getUser }
)(Dashboard);
