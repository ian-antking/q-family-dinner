import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import BurgerMenu from '../components/library/BurgerMenu';

const content = {
  pages: [
    {
      fields: {
        title: "test-title",
        slug: "test-slug",
        primaryPage: true
      },
      sys: {
        id: "test-id"
      }
    }
  ]
};

test('snapshot: BurgerMenu component', () => {
  const { asFragment } = render(
    <Router>
      <BurgerMenu content={content}/>
    </Router>
  );
  const component = asFragment();
  expect(component).toMatchSnapshot();
});

test('BurgerMenu component renders', () => {
  const { getByTestId } = render(
    <Router>
      <BurgerMenu content={content}/>
    </Router>
  );
  const componentId = getByTestId('burgermenu');
  expect(componentId).toBeInTheDocument();
});