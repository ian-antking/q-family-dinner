import React from 'react';
import ContactInfo from '../components/contact-info';
import Container from 'react-bulma-components/lib/components/container';
import Content from 'react-bulma-components/lib/components/content';
import Heading from 'react-bulma-components/lib/components/heading';

const ContactPage = () => (
  <Content>
    <Heading>Our Venue</Heading>
    <Container>
      <p>
        We are hosted by the Partisan Collective.
        Partisan is volunteer run space for independent,
         community led, DIY and cultural based projects.
      </p>
      <span>All of our events will be held at Partisan unless otherwise stated.</span>
    </Container>
    <ContactInfo />
  </Content>
);

export default ContactPage;
