import React from "react";
import styled from "styled-components";
import Logo from "../images/logo.svg";

const NavContainer = styled.div`
  background-color: #db832d;
  justify-content: space-between;
  display: flex;
  align-items: center;
  height: 3em;
  width: 100%;
`;

const Navigation = styled.nav`
  dispaly: flex;
  width: 30%;
  display: flex;
  justify-content: space-around;
  font-family: "Chica Mono";
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
  height: 70%;
  width: auto;
`;

const LogoContainer = styled.div`
  display: flex;
  width: 12em;
  align-items: center;
  height: 100%;
  display: flex;
  justify-content: space-around;

  h2 {
    font-family: "Zrnic";
    display: flex;
    font-size: 1.8em;
    text-decoration: none;
    color: white;
  }
`;

const NavigationBar = () => {
  return (
    <NavContainer>
      <LogoContainer>
        <LogoImage src={Logo} />
        <h2>Foodie Fun</h2>
      </LogoContainer>
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
