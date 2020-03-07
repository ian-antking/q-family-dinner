import React from 'react';
import Colors from '../utils/colors';
import PageContent from '../components/page-content';
import NotFound from '../components/not-found';
import Loading from '../components/loading';

const randomColor = () => {
  const { pink, blue } = Colors.trans;
  const colors = [pink, blue];
  const index = Math.floor(Math.random() * 2);
  return colors[index];
};

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
    />
  ) : (
    placeholder
  );
};
export default Page;
