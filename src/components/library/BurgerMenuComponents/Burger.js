import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledBurger = styled.button`
  padding: 0;
  width: 55px;
  height: 50px;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  align-items: center;

  &:focus {
    outline: none;
  }

  div {
    margin: 0;
    padding: 0;
    width: 45px;
    height: 8px;
    background: #BDBDBD;
    border-radius: 5px;
    transition: all 0.3s linear;
    transform-origin: 2.25px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

const Burger = ({ open, setOpen }) => (
  <StyledBurger data-testid="burger" open={open} onClick={() => setOpen(!open)}>
    <div data-testid="slice-one" />
    <div data-testid="slice-two" />
    <div data-testid="slice-three" />
  </StyledBurger>
);

Burger.defaultProps = {
  open: false,
};

Burger.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func.isRequired,
};

export default Burger;
