import React from 'react';
import { Content, Section } from 'react-bulma-components/full';
import HeroImage from '../components/hero-image';
import ContributorCard from '../components/contributor-card';
import PageHeader from '../components/page-header';
import EventsPage from '../containers/events';
import ContactPage from '../containers/contact';
import ArticlesPage from '../containers/articles';
import RichText from './rich-text';

const PageContent = props => {
  const { page, color } = props;
  const path = props.match.url.slice(1);

  const header = page.heroImage ? (
    <HeroImage
      image={page.heroImage.fields.file.url}
      color={color}
      title={page.title}
      parallax
    />
  ) : (
    <PageHeader
      title={page.title}
      color={color}
    />
  );

  return (
    <React.Fragment>
      {header}
      <div id="content-box">
        {page.blurb && (
        <Section>
          <Content size="large">
            {page.blurb}
          </Content>
        </Section>
        )}
        {page.content && <Content size="medium"><RichText content={page.content} /></Content>}
        {path === 'events' && <EventsPage {...props} />}
        {path === 'contact' && <ContactPage {...props} />}
        {path === 'articles' && <ArticlesPage {...props} />}
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

export default PageContent;
