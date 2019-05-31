import React from 'react';
import PageHeader from '../components/page-header';

const Page = (props) => {
  return (
    <PageHeader
      title={props.title}
      color={props.color}
    />
  );
};
export default Page;
