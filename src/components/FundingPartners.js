import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FundingLogo from './FundingLogo';

const FundingPartnersBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const FundingPartners = ({ fundingPartners }) => (
  <FundingPartnersBox>
    {fundingPartners.map((partner) => (
      <FundingLogo key={partner.fields.name} fundingPartner={partner.fields} />
    ))}
  </FundingPartnersBox>
);

FundingPartners.propTypes = {
  fundingPartners: PropTypes.arrayOf(PropTypes.shape({
    fields: PropTypes.shape({
      name: PropTypes.string,
    }).isRequired,
  })).isRequired,
};

export default FundingPartners;
