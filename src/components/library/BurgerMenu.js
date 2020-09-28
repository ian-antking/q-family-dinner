import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import useOnClickOutside from '../../hooks/hooks';
import Burger from './BurgerMenuComponents/Burger';
import Menu from './BurgerMenuComponents/Menu';

const StyledBurgerMenu = styled.div`
  height: 50px;
  width: 60px;
`;

const BurgerMenu = ({ content }) => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <StyledBurgerMenu data-testid="burgermenu" ref={node}>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} content={content} />
    </StyledBurgerMenu>
  );
};

BurgerMenu.propTypes = {
  content: PropTypes.shape.isRequired,
};

export default BurgerMenu;
