import React from "react";
import styled from "styled-components";
import Logo from "../images/logo.svg";

const NavContainer = styled.div`
	background-color: #db832d;
	display: flex;
	height: 50px;
	width: 100%;
	align-items: center;
`;

const Navigation = styled.nav`
	display: flex;
	margin-right: 5%;
	width: 13em;
	justify-content: flex-end;
	@media (min-width: 500px) {
		// margin-right: -37%;
		// padding-right: 20%;
	}
	@media (min-width: 1200px) {
		// margin: 0 auto;
		padding: 0;
		// margin-right: -5%;
	}
`;

const NavItem = styled.a`
	text-decoration: none;
	color: white;
	width: 10em;
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
	justify-content: flex-end;
	text-decoration: none;
	color: white;
	font-size: 1.5rem;
	width: 120px;
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
