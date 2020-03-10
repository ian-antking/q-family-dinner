import React from 'react';
import randomColor from '../utils/random-color';
import PageContent from '../components/page-content';
import NotFound from '../components/not-found';
import Loading from '../components/loading';

const Page = props => {
  const page = props.page ? { ...props.page.fields } : null;
  const color = randomColor();

  const placeholder = props.pages ? <NotFound /> : <Loading />;

  return page ? (
    <PageContent
      {...props}
      page={page}
      color={color}
      events={props.events}
      pages={props.pages}
    />
  ) : (
    placeholder
  );
};
export default Page;
