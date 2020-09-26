import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledFundingLogo = styled.div`
  img {
    max-width: 70px;
    width: 25vw;
    padding: 10px;
  }
`;

const FundingLogo = ({ fundingPartner }) => (
  <StyledFundingLogo>
    <a href={fundingPartner.website}>
      <img className="image-scaling" src={fundingPartner.logo.fields.file.url} alt={fundingPartner.name} />
    </a>
  </StyledFundingLogo>
);

FundingLogo.propTypes = {
  fundingPartner: PropTypes.shape({
    logo: PropTypes.shape({
      fields: PropTypes.shape({
        file: PropTypes.shape({
          url: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
    name: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
  }).isRequired,
};

export default FundingLogo;
