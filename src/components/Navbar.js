import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";

const StyledNavbar = styled.div`
position: fixed;
top: 0;
left: 0;
height: 60px;
width: 100vw;
color: #ffffff;
background: #000000;
display: flex;
flex-flow: row nowrap;
justify-content: space-between;
align-items: center;
z-index: 9;


`;


const NavBar = () => {
	return (
		<StyledNavbar>
			<Link to="/">Queer Family Tea</Link>
		</StyledNavbar>
	);
};

export default NavBar;

