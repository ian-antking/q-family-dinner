import React from 'react';
import PageHeader from '../components/page-header';
import AboutPage from './about';
import EventsPage from './events';
import ContactPage from './contact';

const pages = {
  about: AboutPage,
  events: EventsPage,
  contact: ContactPage,
};


const Page = (props) => {
  const render = {
    page: pages[props.page],
  };

  return (
    <React.Fragment>
      <PageHeader
        title={props.title}
        color={props.color}
      />
      <render.page />
    </React.Fragment>
  );
};
export default Page;
