import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, waitForElement, fireEvent } from '@testing-library/react';
import App from '../components/App';

jest.mock('../services/content-client');

describe('App', () => {
  describe('navigation', () => {
    it('defaults to the home page', async () => {
      const { getByText } = await waitForElement(() => render(
        <MemoryRouter>
          <App />
        </MemoryRouter>,
      ));
      const home = getByText('home');
      expect(home).toBeInTheDocument();

      fireEvent.click(getByText('test-page-1-title'));

      // TODO: rewrite this test once the page component is complete/
    });
  });
});
