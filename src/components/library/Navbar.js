import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BurgerMenu from './BurgerMenu';

const StyledNavbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 50px;
  width: calc(100vw - 20px);
  padding: 0 5px 0 15px;
  color: ${(props) => props.theme.navbarText};
  background: ${(props) => props.theme.navbar};
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

  @media (min-width: 768px) {
    padding: 0 15px;
  }
`;

const NavBar = ({ content }) => {
  return (
    <StyledNavbar data-testid="navbar">
      <Link data-testid="homeLink" to="/">Queer Family Tea</Link>
      <BurgerMenu content={content}/>
    </StyledNavbar>
  );
};

export default NavBar;
