import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import Menu from '../components/library/BurgerMenuComponents/Menu';

const closed = false;
const open = true;
const content = {
  pages: [
    {
      fields: {
        title: "test-title-1",
        slug: "test-slug-1",
        primaryPage: true
      },
      sys: {
        id: "test-id-1"
      }
    },
    {
      fields: {
        title: "test-title-2",
        slug: "test-slug-2",
        primaryPage: true
      },
      sys: {
        id: "test-id-2"
      }
    },
    {
      fields: {
        title: "test-title-3",
        slug: "test-slug-3",
        primaryPage: true
      },
      sys: {
        id: "test-id-3"
      }
    },
    {
      fields: {
        title: "test-title-4",
        slug: "test-slug-4",
        primaryPage: false
      },
      sys: {
        id: "test-id-4"
      }
    },
    {
      fields: {
        title: "test-title-5",
        slug: "test-slug-5",
        primaryPage: false
      },
      sys: {
        id: "test-id-5"
      }
    }
  ]
};

test('snapshot: Menu component', () => {
	const { asFragment } = render(
		<Router>
	  		<Menu open={closed} content={content} />
	  	</Router>
	);
	const component = asFragment();
	expect(component).toMatchSnapshot();
  });

  test('Menu component renders', () => {
	const { getByTestId } = render(
	  <Router>
		<Menu open={closed} content={content} />
	  </Router>
	);
	const component = getByTestId('menu');
	expect(component).toBeInTheDocument();
  });

  test('Menu component renders', () => {
    const { getByTestId } = render(
      <Router>
      <Menu open={closed} content={content} />
      </Router>
    );
    const component = getByTestId('menu');
    expect(component).toBeInTheDocument();
    });

    test('Menu component renders a number of children equal to the number of primary pages in the content prop', () => {
      const { getByTestId } = render(
        <Router>
        <Menu open={closed} content={content} />
        </Router>
      );
      const component = getByTestId('menu');
      expect(component.children.length).toBe(3);
      });
