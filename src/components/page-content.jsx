import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { INLINES, BLOCKS } from '@contentful/rich-text-types';
import { Content, Section, Image } from 'react-bulma-components/full';
import HeroImage from '../components/hero-image';
import ContributorCard from '../components/contributor-card';
import { Link } from 'react-router-dom';
import PageHeader from '../components/page-header';
import EventsPage from '../containers/events';
import ContactPage from '../containers/contact';

const PageContent = props => {
  const { page, color } = props;
  const path = props.match.url.slice(1);
  const options = {
    renderNode: {
      [INLINES.ENTRY_HYPERLINK]: (node) => {
        return <Link to={`/${node.data.target.fields.slug}`}>{node.data.target.fields.title}</Link>;
      },
      [INLINES.HYPERLINK]: (node) => {
        return <a href={node.data.uri}>{node.content[0].value}</a>;
      },
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        return node.data.target.fields.file.contentType === 'image/png' ? (
          <Image src={node.data.target.fields.file.url} />
        ) : (
          <a href={node.data.target.fields.file.url} download>{node.data.target.fields.title}</a>
        );
      },
    },
  };

  const header = page.heroImage ? (
    <HeroImage
      image={page.heroImage.fields.file.url}
      color={color}
      title={page.title}
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
        {page.content && <Content size="medium">{documentToReactComponents(page.content, options)}</Content>}
        {path === 'events' && <EventsPage {...props} />}
        {path === 'contact' && <ContactPage {...props} />}
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
