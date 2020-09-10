import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import Navbar from '../components/library/Navbar';

const content = {
  pages: [
    {
      fields: {
        primaryPage: true,
        atitle: "Test Link"
      }
    }
  ]
};

test('snapshot: Navbar component', () => {
  const { asFragment } = render(
    <Router>
      <Navbar content={content}/>
    </Router>
  );
  const component = asFragment();
  expect(component).toMatchSnapshot();
});

test('Navbar component renders', () => {
  const { getByTestId } = render(
    <Router>
      <Navbar content={content}/>
    </Router>
  );
  const componentId = getByTestId('navbar');
  expect(componentId).toBeInTheDocument();
});

test(`Navbar includes a Home Link that links to "#/"`, () => {                                       
  const { getByTestId } = render( 
    <Router>
      <Navbar content={content}/>
    </Router>
  );
  const homeLink = getByTestId('homeLink');
  expect(homeLink.getAttribute("href")).toBe("#/")
 });