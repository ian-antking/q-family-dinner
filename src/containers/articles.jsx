import React from 'react';
import UnderConstruction from '../components/under-construction';

const ArticlesPage = (props) => {
  const pages = props.pages.filter(page => page.fields.discoverable);
  return (
    !pages.length && <UnderConstruction />
  );
};

export default ArticlesPage;
