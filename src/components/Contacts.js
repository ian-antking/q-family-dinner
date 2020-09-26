import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import ContactLogo from './ContactLogo';

const StyledContactsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContactLogos = styled.div`
  display: flex;
  flex-direction: row;
`;

const Contacts = ({ contacts }) => (
  <StyledContactsBox>
    <span>Contact Us</span>
    <IconContext.Provider value={{ className: 'footer-icons', size: '2em' }}>
      <ContactLogos>
        { contacts.map((contact) => (
          <ContactLogo key={contact.fields.name} name={contact.fields.name} link={contact.fields.link} />
        )) }
      </ContactLogos>
    </IconContext.Provider>
  </StyledContactsBox>
);

Contacts.defaultProps = {
  contacts: [],
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    fields: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  })),
};

export default Contacts;
