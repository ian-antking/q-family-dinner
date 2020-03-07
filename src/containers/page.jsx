import React from 'react';
import PageHeader from '../components/page-header';
import EventsPage from './events';
import ContactPage from './contact';
import Colors from '../utils/colors';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Content } from 'react-bulma-components/full';
import HeroImage from '../components/hero-image';
import ContributorCard from '../components/contributor-card';

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
      <div id="content-box">
        {page.content && <Content size="medium">{documentToReactComponents(page.content)}</Content>}
        {render && <render.appPage {...props} />}
        <div id="contributor-box">
          {page.contributors && page.contributors.map(contributor => {
            return (
              <ContributorCard
                key={contributor.sys.id}
                contributor={contributor}
              />
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};
export default Page;
