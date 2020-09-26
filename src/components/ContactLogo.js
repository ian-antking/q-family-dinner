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

const ContactLogo = ({ contact }) => (
  <LogoBox>
    <a href={contact.fields.link}>
      {Logos[contact.fields.name] || Logos.default}
    </a>
  </LogoBox>
);

ContactLogo.propTypes = {
  contact: PropTypes.shape({
    fields: PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default ContactLogo;
