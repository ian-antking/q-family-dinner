/* eslint-disable max-len */
import React from 'react';
import {
  Section,
  Content,
  Container,
  Heading,
} from 'react-bulma-components/full';


const PrivacyPage = () => (
  <Content>
    <Container>
      <Heading size={4}>
        We don't store your data, at all.
      </Heading>
      <p>
        We physically can’t. We have nowhere to store it. We don’t even have a database to store it in.
      </p>
    </Container>
  </Content>
);

export default PrivacyPage;
