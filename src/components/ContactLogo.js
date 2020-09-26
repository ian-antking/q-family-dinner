import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  FaInstagram,
  FaFacebookSquare,
  FaTwitterSquare,
  FaEnvelope,
  FaLink,
} from 'react-icons/fa';

const Logos = {
  facebook: <FaFacebookSquare />,
  email: <FaEnvelope />,
  instagram: <FaInstagram />,
  twitter: <FaTwitterSquare />,
  default: <FaLink />,
};

const LogoBox = styled.div`
  margin: 5px;
`;

const ContactLogo = ({ name, link }) => (
  <LogoBox>
    <a href={link}>
      {Logos[name] || Logos.default}
    </a>
  </LogoBox>
);

ContactLogo.propTypes = {

      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,

};

export default ContactLogo;
