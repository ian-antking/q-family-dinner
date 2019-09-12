import React from 'react';
import PageHeader from '../components/page-header';
import AboutPage from './about';
import EventsPage from './events';
import ContactPage from './contact';
import PrivacyPage from './privacy';

const pages = {
  about: AboutPage,
  events: EventsPage,
  contact: ContactPage,
  privacy: PrivacyPage,
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
      <div
        style={
          {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }
        }
      >
        <render.page
          {...props}
        />
      </div>
    </React.Fragment>
  );
};
export default Page;
