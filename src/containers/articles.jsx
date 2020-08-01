import React from 'react';
import UnderConstruction from '../components/under-construction';
import PageDiscovery from '../components/page-discovery';
import queryString from 'query-string';

const ArticlesPage = (props) => {
  const query = props.location.search && JSON.parse(queryString.parse(props.location.search).query);
  const pages = query.tag ? (
    props.pages.filter(page => {
      return page.fields.tags && page.fields.tags.includes(query.tag);
    })
  ) : (
    props.pages
  );

  return (
    pages.length ? <PageDiscovery pages={pages} /> : <UnderConstruction />
  );
};

export default ArticlesPage;
