import React from "react";
import styled from "styled-components";
import Logo from "../images/logo.svg";

const NavContainer = styled.div`
  background-color: #db832d;
  display: flex;
  height: 50px;
  align-items: center;
`;

const Navigation = styled.nav`
  margin-right: 5%;
  width: 300px;
  @media (min-width: 500px) {
    margin-right: -37%;
    padding-right: 20%;
  }
  @media (min-width: 1200px) {
    margin: 0 auto;
    padding: 0;
    margin-right: -5%;
  }
`;

const NavItem = styled.a`
  text-decoration: none;
  color: white;
  @media (min-width: 500px) {
    margin: 5px;
  }
`;

const LogoImage = styled.img`
  height: 40px;
  margin-left: 1%;
`;

const LogoText = styled.a`
	display: flex;
	fustify-content: flex-e
	text-decoration: none;
	color: white;
	font-size: 1.5rem;
	width: 200px;
	margin-right: 5%;
	float: right;
`;

const NavigationBar = () => {
  return (
    <NavContainer>
      <LogoImage src={Logo} />
      <LogoText>Foodie Fun</LogoText>
      <Navigation>
        <NavItem href="/login">Login</NavItem>
        <NavItem href="/home">Marketing</NavItem>
        <NavItem href="signup">Sign-Up</NavItem>
      </Navigation>
    </NavContainer>
  );
};

export default NavigationBar;
