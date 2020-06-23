import React from 'react';
import Section from 'react-bulma-components/lib/components/section';
import Heading from 'react-bulma-components/lib/components/heading';
import PageCard from '../components/page-card';

const PageDiscovery = (props) => {
  const { pages } = props;
  return (
    <React.Fragment>
      <Heading>New Articles</Heading>
      <Section className="gallery">
        {
          pages.map(page => {
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