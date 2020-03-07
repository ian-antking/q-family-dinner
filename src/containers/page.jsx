import React from 'react';
import PageHeader from '../components/page-header';
import EventsPage from './events';
import ContactPage from './contact';
import Colors from '../utils/colors';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Content } from 'react-bulma-components/full';
import HeroImage from '../components/hero-image';

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
  const content = page.content && documentToReactComponents(page.content);

  const header = page.heroImage ? (
    <HeroImage
      image={page.heroImage.fields.file.url}
      color={randomColor()}
      title={page.title}
    />
  ) : (
    <PageHeader
      title={page.title}
      color={randomColor()}
    />
  );

  return (
    <React.Fragment>
      {header}
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
        {content && <Content>{content}</Content>}
        {render && <render.appPage {...props} />}
      </div>
    </React.Fragment>
  );
};
export default Page;
