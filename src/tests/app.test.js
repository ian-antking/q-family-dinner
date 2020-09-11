import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, waitForElement } from '@testing-library/react';
import App from '../components/App';

jest.mock('../services/content-client');

describe('App', () => {
  describe('navigation', () => {
    it('renders a route for each page', async () => {
      const { getByText } = await render((
        <MemoryRouter>
          <App />
        </MemoryRouter>
      ));

      await waitForElement(() => {
        expect(getByText('home')).toBeInTheDocument();
      });
    });
  });
});
