import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Contacts from './Contacts';
import FundingPartners from './FundingPartners';

const FooterBox = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 170px;
  background-color: whitesmoke;

  .footer-icons {
    color: black;
  }
`;

const LogosBox = styled.div`
  display: flex;
  width: 100%;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
`;

const Footer = ({ fundingPartners, contacts }) => {
  const location = useLocation();
  return (
    <FooterBox>
      <LogosBox>
        { location.pathname !== '/contact' && <Contacts contacts={contacts} /> }
        <FundingPartners fundingPartners={fundingPartners} />
      </LogosBox>
      <Link to="privacy">our privacy policy</Link>
    </FooterBox>
  );
};

Footer.defaultProps = {
  fundingPartners: [],
  contacts: [],
};

Footer.propTypes = {
  fundingPartners: PropTypes.arrayOf(PropTypes.shape({})),
  contacts: PropTypes.arrayOf(PropTypes.shape({})),
};

export default Footer;
