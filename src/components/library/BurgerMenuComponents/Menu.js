import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { bool } from 'prop-types';

export const StyledMenu = styled.nav`
  position: absolute;
  z-index: 2;
  top: 50px;
  right: 0;
  height: calc(100vh - 60px - 40px);
  width: 260px;
  padding: 20px 0;
  background: whitesmoke;
  border-top: 1px solid #E6E6E6;
  text-align: center;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-end;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
`;

const MenuLink = styled(Link)`
  width: calc(100% - 40px);
  height: 75px;
  padding: 0 40px 0 0;
  font-size: 1.8em;
  color: white;
  text-decoration: none;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;

  &:hover {
    color: black;
  }
`;

const Menu = ({ open, setOpen, content }) => {
  const pages = content.pages;

  return (
    <StyledMenu data-testid="menu" open={open}>
      {pages && pages.map(page => { 
        return page.fields.primaryPage && (
          <MenuLink
            key={`menulink-${page.sys.id}`}
            to={`/${page.fields.slug}`}
            onClick={() => setOpen(!open)}
          >
            {page.fields.title}
          </MenuLink>
        );
      })
}

    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
