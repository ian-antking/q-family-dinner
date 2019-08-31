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
        <Heading>Contact Partisan</Heading>
        <SocialsCard
          website="https://partisancollective.net"
          facebook="https://www.facebook.com/partisancollective/"
          instagram="https://www.instagram.com/partisancollective/?hl=en"
          email="mailto:info@partisancollective.net"
        />
        <Heading>
          Address
        </Heading>
        <span>Partisan Collective</span>
        <span>19 Cheetham Hill Road</span>
        <span>Manchester</span>
        <span>M4 4FY</span>
      </Container>
      <Container className="contact-card">
        <Heading>Contact Us</Heading>
        <SocialsCard
          facebook="https://www.facebook.com/Queer-Family-Tea-638643326624464"
          instagram="https://www.instagram.com/queerfamilytea/"
          email="mailto:info@queerfamilytea.com"
        />
      </Container>
    </Section>
  </Content>
);

export default ContactInfo;
