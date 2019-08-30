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

import '../styles/contact-info.scss';

const ContactInfo = () => (
  <Content>
    <Heading>Us</Heading>
    <Container className="contact-card">
      <div className="link-list">
        <a href="https://www.facebook.com/Queer-Family-Tea-638643326624464">
          <FontAwesomeIcon icon={faFacebookSquare} />
        </a>
        <a href="https://www.instagram.com/queerfamilytea/">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="info@queerfamilytea.com">
          <FontAwesomeIcon icon={faEnvelopeSquare} />
        </a>
      </div>
    </Container>
  </Content>
);

export default ContactInfo;
