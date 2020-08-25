import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";

const StyledNavbar = styled.div`
position: fixed;
top: 0;
left: 0;
height: 50px;
width: calc(100vw - 30px);
padding: 0 15px;
color: #000000;
background: whitesmoke;
display: flex;
flex-flow: row nowrap;
justify-content: space-between;
align-items: center;
z-index: 9;

	a {
		font-size: 1.8em;
		font-weight: bold;
		color: #000000;
		text-decoration: none;
	}
`;


const NavBar = () => {
	return (
		<StyledNavbar>
			<Link to="/">Queer Family Tea</Link>
		</StyledNavbar>
	);
};

export default NavBar;

