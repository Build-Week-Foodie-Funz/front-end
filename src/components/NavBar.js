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
  background: red;
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
  height: 90%;
`;

const LogoContainer = styled.div`
  display: flex;
  width: 20em;
  align-items: center;
  height: 100%;
  display: flex;
  justify-content: space-between;
  background: yellow;
`;

const LogoText = styled.a`
  display: flex;
  text-decoration: none;
  color: white;
  font-size: 1.2em;
  // margin-right: 5%;
`;

const NavigationBar = () => {
  return (
    <NavContainer>
      <LogoContainer>
        <LogoText>
          <LogoImage src={Logo} />
          <h2>Foodie Fun</h2>
        </LogoText>
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
