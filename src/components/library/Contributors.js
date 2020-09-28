import React from 'react';
import PropTypes from 'prop-types';
import ContributorCard from './ContributorCard';

const Contributors = ({ contributors }) => (
  <>
    {contributors[0] && contributors.map((contributor) => (
      <ContributorCard
        key={contributor.fields.name}
        contributor={contributor}
      />
    ))}
  </>
);

Contributors.propTypes = {
  contributors: PropTypes.arrayOf.isRequired,
};

export default Contributors;
