import React from 'react';
import { Route } from 'react-router-dom';
import { shape, string, arrayOf } from 'prop-types';
import Page from '../library/Page';

const Routes = ({ pages }) => (
  <div>
    {pages.map((page) => (
      <Route
        data-testId="route"
        key={`route-${page.sys.id}`}
        path={`/${page.fields.slug}`}
        render={() => <Page pageContent={page} />}
      />
    ))}
    <Route exact path="/" render={() => <h1>home</h1>} />
  </div>
);

Routes.propTypes = {
  pages: arrayOf(shape({
    fields: shape({
      slug: string.isRequired,
      title: string.isRequired,
    }).isRequired,
    sys: shape({
      id: string.isRequired,
    }).isRequired,
  })).isRequired,
};

export default Routes;
