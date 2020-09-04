import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import Burger from '../components/library/BurgerMenuComponents/Burger';

const open = false;
const setOpen = jest.fn();

test('snapshot: Burger component', () => {
  const { asFragment } = render(
    <Burger open={open} setOpen={setOpen} />
  );
  const component = asFragment();
  expect(component).toMatchSnapshot();
});

test('Burger component renders', () => {
  const { getByTestId } = render(
    <Burger open={open} setOpen={setOpen} />
  );
  const component = getByTestId('burger');
  expect(component).toBeInTheDocument();
});