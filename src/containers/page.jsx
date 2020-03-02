import React from 'react';
import PageHeader from '../components/page-header';
import EventsPage from './events';
import ContactPage from './contact';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import {
  Content,
} from 'react-bulma-components/full';

const pages = {
  events: EventsPage,
  contact: ContactPage,
};

const Page = (props) => {
  const render = props.page ? {
    page: pages[props.page],
  } : null;

  const content = props.content ? (
    documentToHtmlString(props.content)
  ) : (
    null
  );

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
            width: '50%',
            margin: 'auto',
          }
        }
      >
        {content && <Content dangerouslySetInnerHTML={{ __html: content }} />}
        {render && <render.page {...props} />}
      </div>
    </React.Fragment>
  );
};
export default Page;
