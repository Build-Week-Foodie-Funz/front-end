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

import { axiosWithAuth } from '../axios/axiosWithAuth';
import { userInfo } from "os";
import styled from 'styled-components';
import { connect } from "react-redux";
import { getUser } from "../actions/actions";


const FoodPicture = styled.img`
  width: 100px;
  height: 100px;
`;

const HeaderImage = styled.img`
  height 5%;
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
`;

const UsersName = styled.h2`
  font-size: 2rem;
  width: 400px;
  
`;

const SearchForms = styled.div`
// position: absolute;
float: right;
width: 100%;
  input{
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
  a{
    position: relative;
    margin: 20px;
    float: right;
    
  }
`;

const RestCards = styled.div`
  width: 30%;
  Height: 530px;
  border: 1px solid black;
  img{
    width: 300px;
    height: 300px;
  }
`;



const Dashboard = props => {
  const [userInformation, setUserInformation] = useState();


  // console.log("user data", userInformation);
  // console.log(userInformation)
  useEffect(() => {
    setUserInformation(props.getUser())
    // console.log('THIS IS YOUR USERDATA LOADING', props.getUser())
  }, []);


  // window.onload = setUserData(mapStateToProps);
  console.log('This is REst', props.user.restaurant)
  return (
    <PageContainer>
      <Header>
        <HeaderImage src='https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'></HeaderImage>
        <ProfileImage src='https://images.unsplash.com/photo-1512794268250-65fd4cd7441f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'></ProfileImage>
        <UsersName>Hello, {props.user.username}!</UsersName>
        <a href='/editprofile'>Edit Profile</a>
        <a href='/foodform'>Add Review</a>

      </Header>
      <SearchForms className='search-forms'>
        <input type='text' name='restsearch' placeholder='Name of Resaurant' />
        <input type='text' name='cusinetype' placeholder='Type of food' />
        <input type='text' name='priceoffood' placeholder='Price' />
      </SearchForms>
      <RestCards>
        {/* <FoodPicture src='https://images.unsplash.com/photo-1557872943-16a5ac26437e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1316&q=80'></FoodPicture> */}
        {props.user.restaurant ? props.user.restaurant.map((rest) => {
          return (
            <>
              <h3>{rest.restname}</h3>
              <img src={rest.restphotos[1].photo}></img>
              <h4>Horus: {rest.resthours}</h4>
              <p>Location: {rest.restlocation}</p>
              <button rest={rest} src='/reviews'>View reviews</button>
            </>)
        }) : null}
        <h2>{props.user.username}</h2>
      </RestCards>
      {/* <button onClick={() => console.log("on button press", props.getUser())}>Get user</button> */}
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
