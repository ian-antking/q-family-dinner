import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ContributorCard from './ContributorCard';

const StyledContributors = styled.div`
  width: 100%;
  padding: 2px 0 2px 0;
  background-color: ${(props) => props.theme.contributorsBackground};
  border-top: 2px solid ${(props) => props.theme.contributorsBorder};
`;

const Contributors = ({ contributors }) => (
  <StyledContributors>
    {contributors[0] && contributors.map((contributor) => (
      <ContributorCard
        key={contributor.fields.name}
        contributor={contributor}
      />
    ))}
  </StyledContributors>
);

Contributors.propTypes = {
  contributors: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
};

export default Contributors;
