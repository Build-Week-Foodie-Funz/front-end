import React from "react";
import styled from "styled-components";
import Logo from "../images/logo.svg";

const NavContainer = styled.div`
  background-color: #db832d;
  justify-content: flex-end;
  display: flex;
  align-items: center;
  height: 50px;
  width: 100%;
`;

const Navigation = styled.nav`
  dispaly: flex;
  width: 100%;
  @media (min-width: 500px) {
  }
  @media (min-width: 1200px) {
    padding: 0;
  }
`;

const NavItem = styled.a`
  display: inline-block;
  text-decoration: none;
  color: white;
  float: right;
  margin: 5px;
`;

const LogoImage = styled.img`
  height: 40px;
  margin-left: 1%;
`;

const LogoText = styled.a`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
  // margin-right: 5%;
`;

const NavigationBar = () => {
  return (
    <NavContainer>

      <LogoText> <LogoImage src={Logo} />Foodie Fun</LogoText>
      <Navigation>
        <NavItem href="/login">Login</NavItem>
        <NavItem href="https://foodiefun-marketing.netlify.com/">
          Marketing
        </NavItem>
        <NavItem href="/">Home</NavItem>
        <NavItem href="signup">Sign-Up</NavItem>
      </Navigation>
    </NavContainer>
  );
};

export default NavigationBar;
