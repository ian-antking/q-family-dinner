import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import Burger from '../components/library/BurgerMenuComponents/Burger';

const closed = false;
const open = true;
const setOpen = jest.fn();

test('snapshot: Burger component', () => {
  const { asFragment } = render(
    <Burger open={closed} setOpen={setOpen} />
  );
  const component = asFragment();
  expect(component).toMatchSnapshot();
});

test('burger component renders', () => {
  const { getByTestId } = render(
    <Burger open={closed} setOpen={setOpen} />
  );
  const component = getByTestId('burger');
  expect(component).toBeInTheDocument();
});

test('the function passed to onClick is called on click', () => {
  const { getByTestId } = render (
    <Burger open={closed} setOpen={setOpen} />
  );
  const component = getByTestId('burger');
  fireEvent.click(component);
  expect(setOpen).toHaveBeenCalled();
});

test('when open = false the styles of child divs are such that they form a burger', () => {
  const { getByTestId } = render (
    <Burger open={closed} setOpen={setOpen} />
  );
  const slice1 = getByTestId('slice-one');
  const slice2 = getByTestId('slice-two');
  const slice3 = getByTestId('slice-three');
  expect(slice1).toHaveStyle('transform: rotate(0)');
  expect(slice2).toHaveStyle(`
    opacity: 1;
    transform: translateX(0);
  `);
  expect(slice3).toHaveStyle('transform: rotate(0)');
});

test('when open = true the styles of child divs are such that they form a cross', () => {
  const { getByTestId } = render (
    <Burger open={open} setOpen={setOpen} />
  );
  const slice1 = getByTestId('slice-one');
  const slice2 = getByTestId('slice-two');
  const slice3 = getByTestId('slice-three');
  expect(slice1).toHaveStyle('transform: rotate(45deg)');
  expect(slice2).toHaveStyle(`
  opacity: 0;
  transform: translateX(20px);
  `);
  expect(slice3).toHaveStyle('transform: rotate(-45deg)');
});