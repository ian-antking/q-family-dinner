import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import {
  Section,
  Content,
  Heading,
  Container,
} from 'react-bulma-components/full';


const ContactInfo = () => (
  <Content>
    <Container>
      <FontAwesomeIcon icon={faFacebookSquare} />
      <FontAwesomeIcon icon={faInstagram} />
      <FontAwesomeIcon icon={faEnvelopeSquare} />
    </Container>
  </Content>
);

export default ContactInfo;
