import React from 'react';
import { Loader, Heading, Content } from 'react-bulma-components/full';

const Loading = () => (
  <Content>
    <Heading>Loading...</Heading>
    <Loader />
  </Content>
);

export default Loading;
