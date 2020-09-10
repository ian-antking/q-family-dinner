import React from 'react';
import { Route } from 'react-router-dom';
import { shape, string, arrayOf } from 'prop-types';

const Routes = ({ pages }) => (
  <div>
    {pages.map((page) => (
      <Route
        data-testId="route"
        key={`route-${page.sys.id}`}
        path={`/${page.fields.slug}`}
        render={() => <h1>{page.fields.title}</h1>}
      />
    ))}
  </div>
);

Routes.propTypes = {
  pages: arrayOf(shape({
    fields: shape({
      slug: string.isRequired,
    }).isRequired,
    sys: shape({
      id: string.isRequired,
    }).isRequired,
  })).isRequired,
};

export default Routes;
