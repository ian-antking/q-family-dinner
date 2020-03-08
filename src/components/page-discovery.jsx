import React from 'react';
import { Section, Heading } from 'react-bulma-components/full';
import PageCard from '../components/page-card';

const PageDiscovery = (props) => {
  const { pages } = props;
  return (
    <React.Fragment>
      <Heading>New Articles</Heading>
      <Section className="gallery">
        {
          pages.filter(page => page.fields.discoverable).map(page => {
            return (
              <PageCard
                key={page.sys.id}
                page={page}
              />
            );
          })
        }
      </Section>
    </React.Fragment>
  );
};

export default PageDiscovery;
