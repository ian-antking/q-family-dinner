import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Contacts from './Contacts';
import FundingPartners from './FundingPartners';

const FooterBox = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px 0;
  width: 100%;
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

const Attribution = styled.a`
  font-size: 0.8em;
  text-align: center;
  padding: 5px 0 0 0;
`;

const Footer = ({ fundingPartners, contacts }) => (
  <FooterBox>
    <LogosBox>
      <Contacts contacts={contacts} />
      <FundingPartners fundingPartners={fundingPartners} />
    </LogosBox>
    <Link to="privacy">our privacy policy</Link>
    <Attribution href="https://www.freepik.com/vectors/background">Default hero image created by freepik - www.freepik.com</Attribution>
  </FooterBox>
);

Footer.defaultProps = {
  fundingPartners: [],
  contacts: [],
};

Footer.propTypes = {
  fundingPartners: PropTypes.arrayOf(PropTypes.shape({})),
  contacts: PropTypes.arrayOf(PropTypes.shape({})),
};

export default Footer;
