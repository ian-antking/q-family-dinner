import React from 'react';
import PropTypes from 'prop-types';
import HeroImage from './HeroImage';
import Article from './Article';
import Contributors from './Contributors';

const Page = ({ pageContent }) => (
  <>
    <HeroImage
      image={pageContent.fields.heroImage.fields.file.url}
      heading={pageContent.fields.title}
    />
    <Article
      text={pageContent}
    />
    <Contributors
      contributors={pageContent.fields.contributors}
    />
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
