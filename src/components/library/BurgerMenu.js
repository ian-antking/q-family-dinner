import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import useOnClickOutside from '../../hooks/hooks';
// eslint-disable-next-line import/no-unresolved
import Burger from './BurgerMenuComponents/Burger';
// eslint-disable-next-line import/no-unresolved
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
    <StyledBurgerMenu ref={node}>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} content={content}/>
    </StyledBurgerMenu>
  );
};

export default BurgerMenu;
