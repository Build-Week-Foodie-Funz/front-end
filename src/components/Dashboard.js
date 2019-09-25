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

import React, { useState } from "react";
import { axiosWithAuth } from '../axios/axiosWithAuth';
import { userInfo } from "os";
import styled from 'styled-components';

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
`;

const UsersName = styled.h2`
  font-size: 2rem;
  margin-right: 55%;
`;

const PageContainer = styled.div`
  width: 100%;
`;

const Header = styled.header`
  width: 100%;
`;

const Dashboard = () => {
  return (
    <PageContainer>
      <Header>
        <HeaderImage src='https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'></HeaderImage>
        {/* <ProfileImage src='https://images.unsplash.com/photo-1512794268250-65fd4cd7441f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'></ProfileImage> */}
        <UsersName>Hello, John Smith!</UsersName>
        <a href='/editprofile'>Edit Profile</a>
        <a href='/foodform'>Add Review</a>
      </Header>
      <div className='search-forms'>
        <input type='text' name='restsearch' placeholder='Name of Resaurant' />
        <input type='text' name='cusinetype' placeholder='Type of food' />
        <input type='text' name='priceoffood' placeholder='Price' />
      </div>
      <div className='cards'>
        <FoodPicture src='https://images.unsplash.com/photo-1557872943-16a5ac26437e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1316&q=80'></FoodPicture>
        <h3>Rest Name</h3>
        <h4>Cuisine Type</h4>
        <p>Price</p>
        <p>Rating: 9001</p>
        <button>View reviews</button>
      </div>
    </PageContainer>
  );
};

export default Dashboard;
