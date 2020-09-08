import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import Menu from '../components/library/BurgerMenuComponents/Menu';

const closed = false;
const open = true;

test('snapshot: Menu component', () => {
	const { asFragment } = render(
		<Router>
	  		<Menu open={closed} />
	  	</Router>
	);
	const component = asFragment();
	expect(component).toMatchSnapshot();
  });

  test('Menu component renders', () => {
	const { getByTestId } = render(
	  <Router>
		<Menu open={closed} />
	  </Router>
	);
	const component = getByTestId('menu');
	expect(component).toBeInTheDocument();
  });
