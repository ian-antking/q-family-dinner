import React from 'react';
import PageHeader from '../components/page-header';
import EventsPage from './events';
import ContactPage from './contact';
import Colors from '../utils/colors.js';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import {
  Content,
} from 'react-bulma-components/full';

const pages = {
  events: EventsPage,
  contact: ContactPage,
};

const randomColor = () => {
  const { pink, blue } = Colors.trans;
  const colors = [pink, blue];
  const index = Math.floor(Math.random() * 2);
  return colors[index];
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
        color={randomColor()}
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
