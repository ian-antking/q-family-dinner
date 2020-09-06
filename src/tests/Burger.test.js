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

test('Burger component renders', () => {
  const { getByTestId } = render(
    <Burger open={closed} setOpen={setOpen} />
  );
  const component = getByTestId('burger');
  expect(component).toBeInTheDocument();
});

test('The function passed to onClick is called on click.', () => {
  const { getByTestId } = render (
    <Burger open={closed} setOpen={setOpen} />
  );
  const component = getByTestId('burger');
  fireEvent.click(component);
  expect(setOpen).toHaveBeenCalled();
});