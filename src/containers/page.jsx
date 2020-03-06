import React from 'react';
import PageHeader from '../components/page-header';
import EventsPage from './events';
import ContactPage from './contact';
import Colors from '../utils/colors';
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

const Page = props => {
  const page = { ...props.page.fields };
  const render = pages[page.slug] && { appPage: pages[page.slug.toLowerCase()] };
  const content = page.content && documentToHtmlString(page.content);

  return (
    <React.Fragment>
      <PageHeader
        title={page.title}
        color={randomColor()}
      />
      <div
        style={
          {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '75%',
            margin: 'auto',
          }
        }
      >
        {content && <Content dangerouslySetInnerHTML={{ __html: content }} />}
        {render && <render.appPage {...props} />}
      </div>
    </React.Fragment>
  );
};
export default Page;
