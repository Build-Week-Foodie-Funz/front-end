import React from "react";
import styled from "styled-components";
import Logo from "../images/logo.svg";

const NavContainer = styled.div`
	background-color: #db832d;
	display: flex;
	width: 100%;
	height: 50px;
	justify-content: flex-end;
	align-items: center;
`;

const Navigation = styled.nav`
	margin-right: 5%;
	width: 30%;
`;

const NavItem = styled.a`
	margin: 10px;
`;

const LogoImage = styled.img`
	height: 40px;
	margin-right: 1%;
`;

const LogoText = styled.a`
	color: white;
	font-size: 1.5rem;
	margin-right: 64%;
	width: 150px;
`;

const NavigationBar = () => {
	return (
		<NavContainer>
			<LogoImage src={Logo} />
			<LogoText>Foodie Fun</LogoText>
			<Navigation>
				<NavItem>Login</NavItem>
				<NavItem>marketing</NavItem>
				<NavItem>Sign Up</NavItem>
			</Navigation>
		</NavContainer>
	);
};

export default NavigationBar;
