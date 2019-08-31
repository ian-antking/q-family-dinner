import React from 'react';
import SocialsCard from './socials-card';

import {
  Content,
  Container,
  Heading,
  Section,
} from 'react-bulma-components/full';

import '../styles/contact-info.scss';

const ContactInfo = () => (
  <Content>
    <Section>

      <Container className="contact-card">
        <Heading>Queer Family Tea</Heading>
        <SocialsCard
          facebook="https://www.facebook.com/Queer-Family-Tea-638643326624464"
          instagram="https://www.instagram.com/queerfamilytea/"
          email="mailto:info@queerfamilytea.com"
        />
      </Container>

      <Container className="contact-card">
        <Heading>Partisan</Heading>
        <SocialsCard
          website="https://partisancollective.net"
          facebook="https://www.facebook.com/partisancollective/"
          instagram="https://www.instagram.com/partisancollective/?hl=en"
          email="mailto:info@partisancollective.net"
        />
      </Container>

    </Section>
  </Content>
);

export default ContactInfo;
