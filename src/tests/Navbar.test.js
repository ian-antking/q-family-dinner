import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import Navbar from '../components/library/Navbar';

const content = {
  pages: [
    {
      fields: {
<<<<<<< HEAD
        primaryPage: true,
        atitle: "Test Link"
=======
        title: "test-title",
        slug: "test-slug",
        primaryPage: true
      },
      sys: {
        id: "test-id"
>>>>>>> c6420638d2a25e140f5b9c22abf504290d6cfc4b
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