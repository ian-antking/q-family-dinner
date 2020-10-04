import React from 'react';
import PropTypes from 'prop-types';
import HeroImage from './HeroImage';
import Article from './Article';
import Contributors from './Contributors';

const Page = ({ pageContent }) => (
  <>
    <HeroImage
      image={pageContent.fields.heroImage?.fields.file.url || 'http://images.ctfassets.net/yq2ab76w5obt/2dVGN7sDbJIbBGRjy6qftW/e87b464009c3df4cb5a1527c0d4f906e/hero-placeholder.jpg'}
      heading={pageContent.fields.title}
    />
    <Article
      text={pageContent}
    />
    {pageContent.fields.contributors && (
      <Contributors
        contributors={pageContent.fields.contributors}
      />
    )}
  </>
);

Page.defaultProps = {
  pageContent: {},
};

Page.propTypes = {
  pageContent: PropTypes.shape({
    fields: PropTypes.shape({
      title: PropTypes.string.isRequired,
      heroImage: PropTypes.shape({
        fields: PropTypes.shape({
          file: PropTypes.shape({
            url: PropTypes.string.isRequired,
          }),
        }),
      }),
      contributors: PropTypes.arrayOf.isRequired,
    }),
  }),
};

export default Page;
