import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import Navbar from '../components/Navbar';

test('snapshot: Navbar component', () => {
  const { asFragment } = render(
    <Router>
      <Navbar />
    </Router>
  );
  const component = asFragment();
  expect(component).toMatchSnapshot();
});
